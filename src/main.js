100// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
var option = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [15, 70, '编程基础'],
      [35, 75, '沟通能力'],
      [55, 75, 'React'],
      [75, 80, 'Vue'],
      [80, 80, 'javascript'],
      [90, 85, '项目开发'],
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 40,
    max: 100,
    text: ['High Score', 'Low Score'],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#65B581', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);