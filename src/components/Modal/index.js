import React from "react"
import Dialog from "rmc-dialog"
import "./index.less"
let prefixCls = 'wt-modal';
const Modal = ({ title, footer, visible, children, onClose }) => {
  return (
    <Dialog
      prefixCls={prefixCls}
      title={title}
      visible={visible}
      animation="zoom"
      maskAnimation="fade"
      onClose={onClose}
      closable={false}
      footer={footer ? footer : <div className="wt-modal-button" onClick={onClose}>确定</div>}
    >
      {children}
    </Dialog>
  )
}
export default Modal