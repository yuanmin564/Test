// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
//初始化图表
var myChart = echarts.init(document.getElementById('chart'));
var options = {
    lengend: {
        data: '单日实收金额',
    },
    xAxis: {
        type: 'category',
        data: ['2017-11-10', '2017-11-11', '2017-11-12', '2017-11-13', '2017-11-14'],
        axisTick: false,
    },
    yAxis: {
        type: 'value',
        axisTick: false,
    },
    series: [
        type: 'line',
        name: '单日实收金额',
        data: [600,400,700,500,300,],
};
myChart.setOption(options);
