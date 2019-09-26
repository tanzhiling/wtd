import React, { useState } from 'react';
import { Toast, Button, Icon, List, Modal } from "./components";
import "./App.less"
const App = () => {
  const [visible, setVisible] = useState(false)
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
      {/* <List
        renderHeader="Button 按钮"
      >
        <Button onClick={onInfo} style={{ marginBottom: ".2rem" }}>default</Button>
        <Button type="primary" onClick={onSuccess} style={{ marginBottom: ".2rem" }}>primary</Button>
        <Button type="warning" onClick={onFail} style={{ marginBottom: ".2rem" }}>warning</Button>
        <Button onClick={onLoad} shape="round" style={{ marginBottom: ".2rem" }}>shape</Button>
        <Button type="primary" size="small" shape="round" onClick={onFail} style={{ marginBottom: ".2rem", width: "1rem" }}>samll</Button>
        <Button type="primary" shape="round" disabled style={{ marginBottom: ".2rem" }}>disabled</Button>
      </List> */}
      <Button type="primary" onClick={() => setVisible(true)} style={{ marginBottom: ".2rem" }}>弹出</Button>
      <Modal
        visible={visible}
        title='标题'
        onClose={() => setVisible(false)}
      >
        <Button type="primary" style={{ marginBottom: ".2rem" }}>primary</Button>
      </Modal>
      {/* <List
        renderHeader="Icon"
      >
        <Icon type="left" style={{ margin: 20 }} />
        <Icon type="right" style={{ margin: 20 }} />
        <Icon type="up" style={{ margin: 20 }} />
        <Icon type="down" style={{ margin: 20 }} />
        <Icon type="add" style={{ margin: 20 }} />
        <Icon type="del" style={{ margin: 20 }} />
        <Icon type="loading" style={{ margin:20}} />
      </List> */}
      {/* <List
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
      </List>  */}
    </div>
  )
}
export default App;
