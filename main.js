var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
var option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#996',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'vue技术栈', max: 100 },
            { name: '编程基础', max: 100 },
            { name: '静态页面', max: 100 },
            { name: 'react技术栈', max: 100 },
            { name: '项目开发', max: 100 },
            { name: '沟通能力', max: 100 }
        ]
    },
    series: [{
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [85, 85, 95, 70, 85, 80],
                name: '技能评估'
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);