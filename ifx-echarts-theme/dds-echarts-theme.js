(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('dds-echarts-theme', {
        "color": [
            "#0A8276",
            "#B9D257",
            "#06534B",
            "#B8DEDA",
            "#575352",
            "#EEEDED",
            "#BE3283",
            "#DFF4F3",
            "#F97414",
            "#FBE273"
        ],
        "backgroundColor": "#FFFFFF",
        "textStyle": {
            "fontFamily": "\"Source Sans 3\", \"Source Sans Pro\", Arial, sans-serif"
        },
        "title": {
            "textStyle": {
                "color": "#1D1D1D"
            },
            "subtextStyle": {
                "color": "#1D1D1D"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 0
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 0,
            "symbol": "circle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 0
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 0,
            "symbol": "circle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": 2,
                "barBorderColor": "#FFFFFF"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 2,
                "borderColor": "#FFFFFF"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 2,
                "borderColor": "#FFFFFF"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 2,
                "borderColor": "#FFFFFF"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 2,
                "borderColor": "#FFFFFF"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 2,
                "borderColor": "#FFFFFF"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 2,
                "borderColor": "#FFFFFF"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 2,
                "borderColor": "#FFFFFF"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#0A8276",
                "color0": "rgba(0, 0, 0, 0)",
                "borderColor": "#0A8276",
                "borderColor0": "#0A8276",
                "borderWidth": 2
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 2,
                "borderColor": "#FFFFFF"
            },
            "lineStyle": {
                "width": 1,
                "color": "#BFBBBB"
            },
            "symbolSize": 0,
            "symbol": "circle",
            "smooth": false,
            "color": [
                "#0A8276",
                "#B9D257",
                "#06534B",
                "#B8DEDA",
                "#575352",
                "#EEEDED",
                "#BE3283",
                "#DFF4F3",
                "#F97414",
                "#FBE273"
            ],
            "label": {
                "color": "#FFFFFF"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#EEEDED",
                "borderColor": "#BFBBBB",
                "borderWidth": 2
            },
            "label": {
                "color": "#1D1D1D"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#BFBBBB",
                    "borderColor": "#8D8786",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#575352"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#EEEDED",
                "borderColor": "#BFBBBB",
                "borderWidth": 2
            },
            "label": {
                "color": "#1D1D1D"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#BFBBBB",
                    "borderColor": "#8D8786",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#575352"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#BFBBBB"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#BFBBBB"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#1D1D1D"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#BFBBBB"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(234,237,245,0.5)",
                        "rgba(255,255,255,0)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#BFBBBB"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#BFBBBB"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#1D1D1D"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#BFBBBB"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(234,237,245,0.5)",
                        "rgba(255,255,255,0)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#BFBBBB"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#BFBBBB"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#1D1D1D"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#BFBBBB"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(234,237,245,0.5)",
                        "rgba(255,255,255,0)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#BFBBBB"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#BFBBBB"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#1D1D1D"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#BFBBBB"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(234,237,245,0.5)",
                        "rgba(255,255,255,0)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#1D1D1D"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#575352"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#1D1D1D"
            },
            "left": "center",
            "right": "auto",
            "top": "auto",
            "bottom": 16
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#BFBBBB",
                    "width": 2
                },
                "crossStyle": {
                    "color": "#BFBBBB",
                    "width": 2
                },
                "label": {
                "color": "#1D1D1D",
                "backgroundColor": "#BFBBBB" 
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#0A8276",
                "width": 2
            },
            "itemStyle": {
                "color": "#0A8276",
                "borderWidth": 2
            },
            "controlStyle": {
                "color": "#0A8276",
                "borderColor": "#0A8276",
                "borderWidth": 0
            },
            "checkpointStyle": {
                "color": "#0A8276",
                "borderColor": "#06534B"
            },
            "label": {
                "color": "#1D1D1D"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#08665C"
                },
                "controlStyle": {
                    "color": "#0A8276",
                    "borderColor": "#0A8276",
                    "borderWidth": 0
                },
                "label": {
                    "color": "#1D1D1D"
                }
            }
        },
        "visualMap": {
            "color": [
                "#0A8276",
                "#6CB4AD",
                "#DFF4F3",
                "#B9D257"
            ]
        },
        "markPoint": {
            "label": {
                "color": "#FFFFFF"
            },
            "emphasis": {
                "label": {
                    "color": "#FFFFFF"
                }
            }
        },
        "grid": {
            "left": "15%",
            "right": "10%",
            "top": 65,
            "bottom": 80
        }
    });
}));