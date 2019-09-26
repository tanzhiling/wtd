## WTD react 移动端 Ui

#### Icon 组件 基于 svg 可引入 iconfont.cn 自行扩展

|   参数    |   说明    |  类型  | 默认值 |
| :-------: | :-------: | :----: | :----: |
|   type    | icon 类型 | String |   无   |
|   color   | icon 色彩 | string |   无   |
| className |   类名    | string |   无   |

#### Button 组件

|   参数   |                 说明                 |  类型   | 默认值 |
| :------: | :----------------------------------: | :-----: | :----: |
|   size   |   按钮大小，可选值为 large、small    | string  | large  |
|   type   |  按钮类型，可选值为 primary/warning  | string  |   -    |
|  shape   | 设置按钮形状 可选值为 round 或者不设 | string  |   -    |
| disabled |               设置禁用               | boolean | false  |

#### Toast 组件 (目前 success fail info loading 模式)

|     参数     |          说明          |          类型           | 默认值 |
| :----------: | :--------------------: | :---------------------: | :----: |
|   content    |        提示内容        | React.Element or String |   无   |
| contentStyle |    提示内容区域样式    |         object          |   无   |
|   duration   | 自动关闭的延时，单位秒 |         number          |  1.5   |
|   onClose    |     关闭后回调函数     |        function         |   无   |
|     mask     |    是否显示透明蒙层    |         Boolean         |  true  |

#### List 组件

|     参数     |    说明     |          类型           | 默认值 |
| :----------: | :---------: | :---------------------: | :----: |
| renderHeader | list header | React.Element or String |   无   |

List.Item
| 参数 | 说明 | 类型 | 默认值 |
| :----------: | :---------: | :---------------------: | :----: |
| thumb | 缩略图(当为 string 类型时作为 img src)| React.Element or String | 无 |
| arrow | 箭头方向(右,上,下), 可选 left,up,down,right,但是不显示| React.Element or String | 无 |
| extra | 右边内容| React.Element or String | 无 |

List.Item.Brief