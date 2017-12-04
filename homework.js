//初始化图表
console.dir(echarts)
window.onload =  function () {
    var id = document.getElementById('myChart')
    var myChart = echarts.init(document.getElementById('myChart'));
    var colors = ['#5793f3', '#d14a61', '#675bba'];
    var options = {
        title: {},
        tooltip: {},
        legend: {
            data: ['单日实收金额'],
            left: '5%'
        },
        xAxis: {
            data: ["20171110", "20171111", "20171112", "20171113", "20171114", "20171115", "20171116"],
            nameLocation: 'end',
            nameGap: 0,
            boundaryGap: false,
            axisLine: {
                show: false,
            },
            axisTick: {
                lineStyle: {
                    color: '#e4e5ea',
                },
            },
            splitLine: {
                show: true,
            }
        },
        yAxis: {
            type: 'value',
            nameLocation: 'start',
            axisLine: {
                show: false,
            },
            axisTick: {
                lineStyle: {
                    color: '#e4e5ea',
                },
            },
        },
        series: [{
            name: '单日实收金额',
            type: 'line',
            data: [200, 240, 360, 410, 310, 820, 760],
            smooth: true,
            itemStyle: {
                normal: {
                    color: '#1fd55e',
                }
            }
        }]
    };
    myChart.setOption(options);
}