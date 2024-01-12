# poc

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 散点图 echarts

function formatAmount(amount) {
    // 去除小数点后多余的0
    if(amount > 0) {
      amount = parseFloat(amount).toFixed(2);
    
    // 添加千分位符号
    return amount.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }else{
      return amount
    }
    
}
 

option = {
 xAxis: {
    data: [0, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000],
    axisTick: {
            show: false // 隐藏刻度线
        },
   name: '现金返还', // Y 轴名称
     axisLabel: {
       show: true,
      formatter: (value) => {
        return formatAmount(value)
      }
    }
  },
  yAxis: {
    type: 'category',
    data: [0,1,2,3,4,5,6,7,8,9,10],
    name: '利息补贴', // Y 轴名称
    axisTick: {
            show: false // 隐藏刻度线
        },
    axisLabel: {
      formatter: (value) => {
        return value > 0 ? value + '.00%' : value
      }
    }
    //data: ['0', '1.00%', '2.00%', '3.00%', '4.00%', '5.00%', '6.00%', '7.00%', '8.00%', '9.00%', '10.00%']
  }, 
  series: [
    {
      symbolSize: 40,
      type: 'scatter',
      data: [
        {
          id: 1,
          nodeName: '特斯拉Model',
          value: [1, 9],
          label: {
            show: true, // 显示标签
            formatter: '特斯拉Model Y', // 标签格式化，这里使用数据项的名称作为标签
            position: 'bottom', // 标签位置，这里设置在点的上方
            fontSize: 12 // 字体大小
          },
          symbol: 'image://data:image/png;base64,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'
        }
      ],
    }
  ]
};