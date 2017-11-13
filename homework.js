//初始化图表
var myChart = echarts.init(document.getElementById('chart'));
var options = {
    xAxise:{
        
    },
    series: [
        type: 'line',
        name: '单日实收金额',
        data:'',
    ],
};
myChart.setOption(options);
