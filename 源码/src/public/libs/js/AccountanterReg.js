$(function() {
    var option = {
        tooltip: {
            trigger: 'axis',
            // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            data: ['2016年', '2015年'],
            borderColor: '#b7042e',
            textStyle: {
                color: "#e2e2e2"
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['会计', '审计', '财务成本管理', '经济法', '税法', '公司战略与风险管理'],
            axisLabel: {
                show: true,
                interval: 'auto', // {number}
                margin: 8,
                textStyle: {
                    color: '#e2e2e2',
                    fontSize: 15,
                    fontWeight: 'bold'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#444',
                    width: 2,
                    type: 'solid'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#e2e2e2',
                    fontSize: 10,
                    fontWeight: 'bold'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#444',
                    width: 2,
                    type: 'solid'
                }
            }
        }],
        series: [{
                name: '2016年',
                type: 'line',
                data: [69.9, 67.8, 78.8, 80.7, 86.5, 77.4],
                smooth: 'true',
                symbol: 'circle', //图标形状
                symbolSize: 12, //图标尺寸
                itemStyle: {
                    normal: {
                        color: '#b8032e',
                        width: 6,
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#e2e2e2',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }
                        },
                        lineStyle: {
                            color: '#b8032e',
                            width: 2,
                        },
                    }
                },
                // markPoint: {
                //     data: [
                //         { type: 'max', name: '最大值' },
                //         { type: 'min', name: '最小值' }
                //     ]
                // },
                // markLine: {
                //     data: [
                //         { type: 'average', name: '平均值' }
                //     ]
                // }
            },
            {
                name: '2015年',
                type: 'line',
                data: [61.8, 62.4, 65.8, 70.3, 76.5, 67.7],
                smooth: 'true',
                symbol: 'circle', //图标形状
                symbolSize: 10, //图标尺寸
                itemStyle: {
                    normal: {
                        color: '#b8032e',
                        width: 6,
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#e2e2e2',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }
                        },
                        lineStyle: {
                            color: '#b8032e',
                            width: 2,
                        }
                    }
                },
                // markPoint: {
                //     data: [
                //         { name: '最低', value: -2, xAxis: 1, yAxis: -1.5 }
                //     ]
                // },
                // markLine: {
                //     data: [
                //         { type: 'average', name: '平均值' }
                //     ]
                // }
            }
        ]
    };
    var myChart = echarts.init(document.getElementById('echarts_wraper'));
    myChart.setOption(option);
})