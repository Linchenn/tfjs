/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const socket = io();
const STATUS_COLOR_MAP = {
  waiting: '#AAAAAA',
  complete: '#357edd',
  error: '#e8564b'
};
const state = {
  isVisorInitiated: false,
  isDatGuiHidden: false,
  browser: {
    base: 'BrowserStack',
    browser: 'chrome',
    browser_version: '84.0',
    os: 'OS X',
    os_version: 'Catalina',
    device: 'null'
  },
  benchmark: {model: 'mobilenet_v2', modelUrl: '', numRuns: 1, backend: 'wasm'},

  run: () => {
    // Disable the button.
    benchmarkButton.__li.style.pointerEvents = 'none';
    benchmarkButton.__li.style.opacity = .5;

    initVisor();
    const tabId = createTab(state.browser);

    // Send the benchmark configuration to the server to start the benchmark.
    if (state.browser.device === 'null') {
      state.browser.device = null;
    }
    const benchmark = {...state.benchmark};
    if (state.benchmark.model !== 'custom') {
      delete benchmark['modelUrl'];
    }

    socket.emit('run', {tabId, benchmark, browser: state.browser});
  }
};

function initVisor() {
  if (state.isVisorInitiated) {
    return;
  }
  state.isVisorInitiated = true;

  // Bind an event to visor's 'Maximize/Minimize' button.
  const visorFullScreenButton =
      tfvis.visor().el.getElementsByTagName('button')[0];
  const guiCloseButton = document.getElementsByClassName('close-button')[0];
  const originalGuiWidth = gui.domElement.style.width;

  // The following two bound events are to implemet:
  // - When the visor is minimized, the controlled panel is hidden;
  // - When the visor is maximized, the controlled panel appears;
  gui.domElement.style.width = originalGuiWidth;
  visorFullScreenButton.onclick = () => {
    if (state.isDatGuiHidden) {
      // When opening the controll panel, recover the size.
      gui.open();
      gui.domElement.style.width = originalGuiWidth;
    } else {
      // When closing the controll panel, narrow the size.
      gui.close();
      gui.domElement.style.width = '10%';
    }
    state.isDatGuiHidden = !state.isDatGuiHidden;
  };
  guiCloseButton.onclick = () => {
    if (state.isDatGuiHidden) {
      // When opening the controll panel, recover the size.
      gui.domElement.style.width = originalGuiWidth;
    } else {
      // When closing the controll panel, narrow the size.
      gui.domElement.style.width = '10%';
    }
    tfvis.visor().toggleFullScreen();
    state.isDatGuiHidden = !state.isDatGuiHidden;
  };

  // If this button (hide visor) is exposed, then too much extra logics will be
  // needed to tell the full story.
  const visorHideButton = tfvis.visor().el.getElementsByTagName('button')[1];
  visorHideButton.style.display = 'none';
}

const visorTabNameCounter = {};
/**
 *  Generate a unique name for the given setting.
 *
 * @param {object} browserConf An object including os, os_version, browser,
 *     browser_version and device fields.
 */
function getTabId(browserConf) {
  let baseName;
  if (browserConf.os === 'android' || browserConf.os === 'ios') {
    baseName = browserConf.device;
  } else {
    baseName = `${browserConf.os}(${browserConf.os_version})`;
  }
  if (visorTabNameCounter[baseName] == null) {
    visorTabNameCounter[baseName] = 0;
  }
  visorTabNameCounter[baseName] += 1;
  return `${baseName} - ${visorTabNameCounter[baseName]}`;
}

function createTab(browserConf) {
  const tabId = getTabId(browserConf);

  // For tfjs-vis, the tab name is not only a name but also the index to the
  // tab.
  drawBrowserSettingTable(tabId, browserConf);
  drawBenchmarkParameterTable(tabId);

  // Add a status indicator tothe tab.
  const visorTabList = document.getElementsByClassName('tf-tab');
  const curTabElement = visorTabList[visorTabList.length - 1];

  const indicatorElement = document.createElement('span');
  indicatorElement.innerHTML = `.`;
  indicatorElement.style.fontSize = '20px';
  indicatorElement.id = `${tabId}-indicator`;
  curTabElement.appendChild(indicatorElement);

  setLoadingStatus(tabId);
  return tabId;
}

function setLoadingStatus(tabId) {
  // Set the status of the status indicator as waiting.
  const indicatorElementId = `${tabId}-indicator`;
  const indicatorElement = document.getElementById(indicatorElementId);
  indicatorElement.style.color = STATUS_COLOR_MAP.waiting;

  // Add loading indicator in the page.
  const surface = tfvis.visor().surface(
      {name: 'Benchmark Summary', tab: tabId, styles: {width: '100%'}});
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'loader';
  surface.drawArea.appendChild(loadingIndicator);
}

function setCompleteStatus(tabId) {
  // Set the status of the status indicator as complete.
  const indicatorElementId = `${tabId}-indicator`;
  const indicatorElement = document.getElementById(indicatorElementId);
  indicatorElement.style.color = STATUS_COLOR_MAP.complete;

  // Add loading indicator in the page.
  const surface = tfvis.visor().surface(
      {name: 'Benchmark Summary', tab: tabId, styles: {width: '100%'}});
  surface.drawArea.removeChild(surface.drawArea.firstElementChild);
}

function setErrorStatus(tabId) {
  // Set the status of the status indicator as error.
  const indicatorElementId = `${tabId}-indicator`;
  const indicatorElement = document.getElementById(indicatorElementId);
  indicatorElement.style.color = STATUS_COLOR_MAP.error;

  // Add loading indicator in the page.
  const surface = tfvis.visor().surface(
      {name: 'Benchmark Summary', tab: tabId, styles: {width: '100%'}});
  surface.label.style.color = 'red';
  surface.label.style.borderColor = 'red';
  if (surface.drawArea.childElementCount >= 1) {
    surface.drawArea.removeChild(surface.drawArea.firstElementChild);
  }
}

function reportBenchmarkResults(benchmarkResults) {
  const tabId = benchmarkResults.tabId;

  // TODO: show error message, if `benchmarkResult.error != null`.

  // TODO:
  //   1. draw a summary table for inference time and memory info.
  //   2. draw a line chart for inference time.
  //   3. draw a table for inference kernel information.
  tfvis.visor().surface(
      {name: 'benchmark results', tab: tabId, styles: {width: '100%'}});

  // TODO: delete 'loading indicator' under the tab.
}

function drawBrowserSettingTable(tabId, browserConf) {
  // TODO: Add a table.
  tfvis.visor().surface(
      {name: 'browser setting', tab: tabId, styles: {width: '100%'}});
}

function drawBenchmarkParameterTable(tabId) {
  // TODO: Add a table.
  tfvis.visor().surface(
      {name: 'benchmark parameter', tab: tabId, styles: {width: '100%'}});
}

socket.on('benchmarkComplete', benchmarkResult => {
  reportBenchmarkResults(benchmarkResult);

  // Enable the button.
  benchmarkButton.__li.style.pointerEvents = '';
  benchmarkButton.__li.style.opacity = 1;
});

const gui = new dat.gui.GUI();
gui.domElement.id = 'gui';
showModelSelection();
showParameterSettings();
const benchmarkButton = gui.add(state, 'run').name('Run benchmark');

function showModelSelection() {
  const modelFolder = gui.addFolder('Model');
  let modelUrlController = null;

  modelFolder.add(state.benchmark, 'model', Object.keys(benchmarks))
      .name('model name')
      .onChange(async model => {
        if (model === 'custom') {
          if (modelUrlController === null) {
            modelUrlController = modelFolder.add(state.benchmark, 'modelUrl');
            modelUrlController.domElement.querySelector('input').placeholder =
                'https://your-domain.com/model-path/model.json';
          }
        } else if (modelUrlController != null) {
          modelFolder.remove(modelUrlController);
          modelUrlController = null;
        }
      });
  modelFolder.open();
  return modelFolder;
}

function showParameterSettings() {
  const parameterFolder = gui.addFolder('Parameters');
  parameterFolder.add(state.benchmark, 'numRuns');
  parameterFolder.add(state.benchmark, 'backend', ['wasm', 'webgl', 'cpu']);
  parameterFolder.open();
  return parameterFolder;
}
