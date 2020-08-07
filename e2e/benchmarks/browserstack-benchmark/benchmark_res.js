const benchmarkRes = {
  'timeInfo': {
    'times': [
      164.79500000059488, 114.79500000059488, 134.79500000059488,
      124.79500000059488, 154.79500000059488, 174.79500000059488,
      124.79500000059488, 154.79500000059488
    ],
    'averageTime': 164.79500000059488,
    'minTime': 164.79500000059488,
    'maxTime': 164.79500000059488
  },
  'memoryInfo': {
    'newBytes': 0,
    'newTensors': 0,
    'peakBytes': 20579628,
    'kernels': [
      {
        'name': 'Multiply',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15160620,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 110,
        'inputShapes': [[1, 224, 224, 3], []],
        'outputShapes': [[1, 224, 224, 3]]
      },
      {
        'name': 'Sub',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15762732,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 224, 224, 3], []],
        'outputShapes': [[1, 224, 224, 3]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 1605632,
        'totalBytesSnapshot': 16766252,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 224, 224, 3], [3, 3, 3, 32], [32], null],
        'outputShapes': [[1, 112, 112, 32]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 1605632,
        'totalBytesSnapshot': 16766252,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 224, 224, 3], [3, 3, 3, 32], [32]],
        'outputShapes': [[1, 112, 112, 32]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 1605632,
        'totalBytesSnapshot': 17769772,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 112, 112, 32], [3, 3, 32, 1], [32], null],
        'outputShapes': [[1, 112, 112, 32]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 1605632,
        'totalBytesSnapshot': 17769772,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 112, 112, 32], [3, 3, 32, 1], [32]],
        'outputShapes': [[1, 112, 112, 32]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 802816,
        'totalBytesSnapshot': 16966956,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 112, 112, 32], [1, 1, 32, 16], [16], null],
        'outputShapes': [[1, 112, 112, 16]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 802816,
        'totalBytesSnapshot': 16966956,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 112, 112, 32], [1, 1, 32, 16], [16]],
        'outputShapes': [[1, 112, 112, 16]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 4816896,
        'totalBytesSnapshot': 20178220,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 112, 112, 16], [1, 1, 16, 96], [96], null],
        'outputShapes': [[1, 112, 112, 96]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 4816896,
        'totalBytesSnapshot': 20178220,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 112, 112, 16], [1, 1, 16, 96], [96]],
        'outputShapes': [[1, 112, 112, 96]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 1204224,
        'totalBytesSnapshot': 20579628,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 112, 112, 96], [3, 3, 96, 1], [96], null],
        'outputShapes': [[1, 56, 56, 96]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 1204224,
        'totalBytesSnapshot': 20579628,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 112, 112, 96], [3, 3, 96, 1], [96]],
        'outputShapes': [[1, 56, 56, 96]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 16063788,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 56, 56, 96], [1, 1, 96, 24], [24], null],
        'outputShapes': [[1, 56, 56, 24]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 16063788,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 56, 56, 96], [1, 1, 96, 24], [24]],
        'outputShapes': [[1, 56, 56, 24]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 1806336,
        'totalBytesSnapshot': 16665900,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 56, 56, 24], [1, 1, 24, 144], [144], null],
        'outputShapes': [[1, 56, 56, 144]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 1806336,
        'totalBytesSnapshot': 16665900,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 56, 56, 24], [1, 1, 24, 144], [144]],
        'outputShapes': [[1, 56, 56, 144]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 1806336,
        'totalBytesSnapshot': 18472236,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 56, 56, 144], [3, 3, 144, 1], [144], null],
        'outputShapes': [[1, 56, 56, 144]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 1806336,
        'totalBytesSnapshot': 18472236,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 56, 56, 144], [3, 3, 144, 1], [144]],
        'outputShapes': [[1, 56, 56, 144]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 16966956,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 56, 56, 144], [1, 1, 144, 24], [24], null],
        'outputShapes': [[1, 56, 56, 24]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 16966956,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 56, 56, 144], [1, 1, 144, 24], [24]],
        'outputShapes': [[1, 56, 56, 24]]
      },
      {
        'name': 'Add',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 15461676,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 56, 56, 24], [1, 56, 56, 24]],
        'outputShapes': [[1, 56, 56, 24]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 1806336,
        'totalBytesSnapshot': 16665900,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 56, 56, 24], [1, 1, 24, 144], [144], null],
        'outputShapes': [[1, 56, 56, 144]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 1806336,
        'totalBytesSnapshot': 16665900,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 56, 56, 24], [1, 1, 24, 144], [144]],
        'outputShapes': [[1, 56, 56, 144]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 16816428,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 56, 56, 144], [3, 3, 144, 1], [144], null],
        'outputShapes': [[1, 28, 28, 144]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 16816428,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 56, 56, 144], [3, 3, 144, 1], [144]],
        'outputShapes': [[1, 28, 28, 144]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 100352,
        'totalBytesSnapshot': 15110444,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 144], [1, 1, 144, 32], [32], null],
        'outputShapes': [[1, 28, 28, 32]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 100352,
        'totalBytesSnapshot': 15110444,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 144], [1, 1, 144, 32], [32]],
        'outputShapes': [[1, 28, 28, 32]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15260972,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 32], [1, 1, 32, 192], [192], null],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15260972,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 32], [1, 1, 32, 192], [192]],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15863084,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 192], [3, 3, 192, 1], [192], null],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15863084,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 192], [3, 3, 192, 1], [192]],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 100352,
        'totalBytesSnapshot': 15361324,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 192], [1, 1, 192, 32], [32], null],
        'outputShapes': [[1, 28, 28, 32]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 100352,
        'totalBytesSnapshot': 15361324,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 192], [1, 1, 192, 32], [32]],
        'outputShapes': [[1, 28, 28, 32]]
      },
      {
        'name': 'Add',
        'bytesAdded': 100352,
        'totalBytesSnapshot': 14859564,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 32], [1, 28, 28, 32]],
        'outputShapes': [[1, 28, 28, 32]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15260972,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 32], [1, 1, 32, 192], [192], null],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15260972,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 32], [1, 1, 32, 192], [192]],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15863084,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 192], [3, 3, 192, 1], [192], null],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15863084,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 192], [3, 3, 192, 1], [192]],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 100352,
        'totalBytesSnapshot': 15361324,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 192], [1, 1, 192, 32], [32], null],
        'outputShapes': [[1, 28, 28, 32]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 100352,
        'totalBytesSnapshot': 15361324,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 192], [1, 1, 192, 32], [32]],
        'outputShapes': [[1, 28, 28, 32]]
      },
      {
        'name': 'Add',
        'bytesAdded': 100352,
        'totalBytesSnapshot': 14859564,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 28, 28, 32], [1, 28, 28, 32]],
        'outputShapes': [[1, 28, 28, 32]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15260972,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 32], [1, 1, 32, 192], [192], null],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 602112,
        'totalBytesSnapshot': 15260972,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 32], [1, 1, 32, 192], [192]],
        'outputShapes': [[1, 28, 28, 192]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 150528,
        'totalBytesSnapshot': 15311148,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 192], [3, 3, 192, 1], [192], null],
        'outputShapes': [[1, 14, 14, 192]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 150528,
        'totalBytesSnapshot': 15311148,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 28, 28, 192], [3, 3, 192, 1], [192]],
        'outputShapes': [[1, 14, 14, 192]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14759212,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 192], [1, 1, 192, 64], [64], null],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14759212,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 192], [1, 1, 192, 64], [64]],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 14909740,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 64], [1, 1, 64, 384], [384], null],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 14909740,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 64], [1, 1, 64, 384], [384]],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 15210796,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [3, 3, 384, 1], [384], null],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 15210796,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [3, 3, 384, 1], [384]],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14959916,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [1, 1, 384, 64], [64], null],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14959916,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [1, 1, 384, 64], [64]],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'Add',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14709036,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 64], [1, 14, 14, 64]],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 14909740,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 64], [1, 1, 64, 384], [384], null],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 14909740,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 64], [1, 1, 64, 384], [384]],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 15210796,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [3, 3, 384, 1], [384], null],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 15210796,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [3, 3, 384, 1], [384]],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14959916,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [1, 1, 384, 64], [64], null],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14959916,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [1, 1, 384, 64], [64]],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'Add',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14709036,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 64], [1, 14, 14, 64]],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 14909740,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 64], [1, 1, 64, 384], [384], null],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 14909740,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 64], [1, 1, 64, 384], [384]],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 15210796,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [3, 3, 384, 1], [384], null],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 15210796,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [3, 3, 384, 1], [384]],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14959916,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [1, 1, 384, 64], [64], null],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14959916,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 384], [1, 1, 384, 64], [64]],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'Add',
        'bytesAdded': 50176,
        'totalBytesSnapshot': 14709036,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 64], [1, 14, 14, 64]],
        'outputShapes': [[1, 14, 14, 64]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 14909740,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 64], [1, 1, 64, 384], [384], null],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 14909740,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 64], [1, 1, 64, 384], [384]],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 15160620,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 384], [3, 3, 384, 1], [384], null],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 301056,
        'totalBytesSnapshot': 15160620,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 384], [3, 3, 384, 1], [384]],
        'outputShapes': [[1, 14, 14, 384]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 75264,
        'totalBytesSnapshot': 14934828,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 384], [1, 1, 384, 96], [96], null],
        'outputShapes': [[1, 14, 14, 96]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 75264,
        'totalBytesSnapshot': 14934828,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 384], [1, 1, 384, 96], [96]],
        'outputShapes': [[1, 14, 14, 96]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15085356,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 96], [1, 1, 96, 576], [576], null],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15085356,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 96], [1, 1, 96, 576], [576]],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15536940,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 576], [3, 3, 576, 1], [576], null],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15536940,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 576], [3, 3, 576, 1], [576]],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 75264,
        'totalBytesSnapshot': 15160620,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 576], [1, 1, 576, 96], [96], null],
        'outputShapes': [[1, 14, 14, 96]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 75264,
        'totalBytesSnapshot': 15160620,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 576], [1, 1, 576, 96], [96]],
        'outputShapes': [[1, 14, 14, 96]]
      },
      {
        'name': 'Add',
        'bytesAdded': 75264,
        'totalBytesSnapshot': 14784300,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 96], [1, 14, 14, 96]],
        'outputShapes': [[1, 14, 14, 96]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15085356,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 96], [1, 1, 96, 576], [576], null],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15085356,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 96], [1, 1, 96, 576], [576]],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15536940,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 576], [3, 3, 576, 1], [576], null],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15536940,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 576], [3, 3, 576, 1], [576]],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 75264,
        'totalBytesSnapshot': 15160620,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 576], [1, 1, 576, 96], [96], null],
        'outputShapes': [[1, 14, 14, 96]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 75264,
        'totalBytesSnapshot': 15160620,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 576], [1, 1, 576, 96], [96]],
        'outputShapes': [[1, 14, 14, 96]]
      },
      {
        'name': 'Add',
        'bytesAdded': 75264,
        'totalBytesSnapshot': 14784300,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 14, 14, 96], [1, 14, 14, 96]],
        'outputShapes': [[1, 14, 14, 96]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15085356,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 96], [1, 1, 96, 576], [576], null],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 451584,
        'totalBytesSnapshot': 15085356,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 96], [1, 1, 96, 576], [576]],
        'outputShapes': [[1, 14, 14, 576]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 112896,
        'totalBytesSnapshot': 15122988,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 576], [3, 3, 576, 1], [576], null],
        'outputShapes': [[1, 7, 7, 576]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 112896,
        'totalBytesSnapshot': 15122988,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 14, 14, 576], [3, 3, 576, 1], [576]],
        'outputShapes': [[1, 7, 7, 576]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 31360,
        'totalBytesSnapshot': 14702764,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 576], [1, 1, 576, 160], [160], null],
        'outputShapes': [[1, 7, 7, 160]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 31360,
        'totalBytesSnapshot': 14702764,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 576], [1, 1, 576, 160], [160]],
        'outputShapes': [[1, 7, 7, 160]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14778028,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 160], [1, 1, 160, 960], [960], null],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14778028,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 160], [1, 1, 160, 960], [960]],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14966188,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 960], [3, 3, 960, 1], [960], null],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14966188,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 960], [3, 3, 960, 1], [960]],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 31360,
        'totalBytesSnapshot': 14809388,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 960], [1, 1, 960, 160], [160], null],
        'outputShapes': [[1, 7, 7, 160]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 31360,
        'totalBytesSnapshot': 14809388,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 960], [1, 1, 960, 160], [160]],
        'outputShapes': [[1, 7, 7, 160]]
      },
      {
        'name': 'Add',
        'bytesAdded': 31360,
        'totalBytesSnapshot': 14652588,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 160], [1, 7, 7, 160]],
        'outputShapes': [[1, 7, 7, 160]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14778028,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 160], [1, 1, 160, 960], [960], null],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14778028,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 160], [1, 1, 160, 960], [960]],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14966188,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 960], [3, 3, 960, 1], [960], null],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14966188,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 960], [3, 3, 960, 1], [960]],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 31360,
        'totalBytesSnapshot': 14809388,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 960], [1, 1, 960, 160], [160], null],
        'outputShapes': [[1, 7, 7, 160]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 31360,
        'totalBytesSnapshot': 14809388,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 960], [1, 1, 960, 160], [160]],
        'outputShapes': [[1, 7, 7, 160]]
      },
      {
        'name': 'Add',
        'bytesAdded': 31360,
        'totalBytesSnapshot': 14652588,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 7, 7, 160], [1, 7, 7, 160]],
        'outputShapes': [[1, 7, 7, 160]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14778028,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 160], [1, 1, 160, 960], [960], null],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14778028,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 160], [1, 1, 160, 960], [960]],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'FusedDepthwiseConv2D',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14934828,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 960], [3, 3, 960, 1], [960], null],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'fusedDepthwiseConv2d',
        'bytesAdded': 188160,
        'totalBytesSnapshot': 14934828,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 960], [3, 3, 960, 1], [960]],
        'outputShapes': [[1, 7, 7, 960]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 62720,
        'totalBytesSnapshot': 14809388,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 960], [1, 1, 960, 320], [320], null],
        'outputShapes': [[1, 7, 7, 320]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 62720,
        'totalBytesSnapshot': 14809388,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 960], [1, 1, 960, 320], [320]],
        'outputShapes': [[1, 7, 7, 320]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 250880,
        'totalBytesSnapshot': 14872108,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 320], [1, 1, 320, 1280], [1280], null],
        'outputShapes': [[1, 7, 7, 1280]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 250880,
        'totalBytesSnapshot': 14872108,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 320], [1, 1, 320, 1280], [1280]],
        'outputShapes': [[1, 7, 7, 1280]]
      },
      {
        'name': 'AvgPool',
        'bytesAdded': 5120,
        'totalBytesSnapshot': 14814508,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 7, 7, 1280]],
        'outputShapes': [[1, 1, 1, 1280]]
      },
      {
        'name': 'Cast',
        'bytesAdded': 5120,
        'totalBytesSnapshot': 14819628,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 112,
        'inputShapes': [[1, 1, 1, 1280]],
        'outputShapes': [[1, 1, 1, 1280]]
      },
      {
        'name': 'FusedConv2D',
        'bytesAdded': 4004,
        'totalBytesSnapshot': 14567632,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 1, 1, 1280], [1, 1, 1280, 1001], [1001], null],
        'outputShapes': [[1, 1, 1, 1001]]
      },
      {
        'name': 'fusedConv2d',
        'bytesAdded': 4004,
        'totalBytesSnapshot': 14567632,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 1, 1, 1280], [1, 1, 1280, 1001], [1001]],
        'outputShapes': [[1, 1, 1, 1001]]
      },
      {
        'name': 'Reshape',
        'bytesAdded': 0,
        'totalBytesSnapshot': 14562512,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 1, 1, 1001]],
        'outputShapes': [[1, 1001]]
      },
      {
        'name': 'Identity',
        'bytesAdded': 4004,
        'totalBytesSnapshot': 14566516,
        'tensorsAdded': 1,
        'totalTensorsSnapshot': 111,
        'inputShapes': [[1, 1001]],
        'outputShapes': [[1, 1001]]
      }
    ]
  }
}
