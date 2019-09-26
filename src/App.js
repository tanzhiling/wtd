import React from 'react';
import { Toast, Button, Icon, List } from "./components";
import "./App.less"
const App = () => {
  const onSuccess = () => {
    Toast.success({
      content: "加入购物车成功！",
      contentStyle: {
        background: "var(--primary-color)",
      }
    })
  }
  const onFail = () => {
    Toast.fail({
      content: "加入购物车失败！",
    })
  }
  const onInfo = () => {
    Toast.info({
      content: <div>这是一条信息</div>,
    })
  }
  const onLoad = () => {
    Toast.loading({
      content: "正在加载中...",
    })
  }
  return (
    <div className="app">
      <Button onClick={onInfo} style={{ marginBottom: ".2rem" }}>信息</Button>
      <Button type="primary" onClick={onSuccess} style={{ marginBottom: ".2rem" }}>成功</Button>
      <Button type="warning" onClick={onFail} style={{ marginBottom: ".2rem" }}>失败</Button>
      <Button onClick={onLoad} shape="round" style={{ marginBottom: ".2rem" }}>加载中</Button>
      <Button type="primary" size="small" shape="round" onClick={onFail} style={{ marginBottom: ".2rem", width: "1rem" }}>失败</Button>
      <Button type="primary" shape="round" disabled style={{ marginBottom: ".2rem" }}>成功</Button>
      <Icon type="loading" />
      <List
        renderHeader="描述信息"
      >
        <List.Item>标题文字</List.Item>
        <List.Item
          thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
          extra="详细信息"
          arrow='right'
        >标题文字
        <List.Item.Brief>描述信息</List.Item.Brief>
        </List.Item>
        <List.Item
          extra="详细信息"
          arrow='right'
        >标题文字
        <List.Item.Brief>描述信息</List.Item.Brief>
        </List.Item>
      </List>
    </div>
  )
}

export default App;
