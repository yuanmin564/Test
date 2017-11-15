//初始化图表
console.dir(echarts)
window.onload =  function () {
    var id = document.getElementById('myChart')
    var myChart = echarts.init(document.getElementById('myChart'));
    var options = {
        title: {
            //text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['单日实收金额'],
            left: '5%'
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]

        },
        yAxis: {},
        series: [{
            name: '单日实收金额',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    myChart.setOption(options);
}
