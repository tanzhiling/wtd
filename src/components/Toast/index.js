/**
 * `Toast`
*/
import React from "react"
import Notification from 'rmc-notification';
import classnames from 'classnames';
import Icon from "../Icon"
import "rmc-notification/assets/index.css"
import "./index.less"
let messageInstance;
let prefixCls = 'wt-toast';
let normalColor = "#fff";
function getMessageInstance(mask, callback) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }
  Notification.newInstance({
    prefixCls,
    style: {},
    className: classnames("wt-toast", mask ? prefixCls + '-mask' : prefixCls + '-nomask')
  }, function (notification) {
    return callback && callback(notification);
  });
}
const notice = ({ content, type, size, mask, duration, contentStyle, onClose }) => {
  getMessageInstance(mask, notification => {
    messageInstance = notification;
    notification.notice({
      duration,
      style: {},
      content: <div className={prefixCls + '-text'} style={contentStyle}>
        {type ? <Icon type={type} color={contentStyle && contentStyle.color ? contentStyle.color : normalColor} size={size} style={{ marginRight: 4 }} /> : ""}
        {content}
      </div>,
      closable: false,
      onClose() {
        if (onClose) {
          onClose()
        }
        notification.destroy();
        notification = null;
        messageInstance = null;
      }
    });
  });
}
const Toast = {
  info: ({ content, contentStyle, duration, onClose }) => {
    return notice({
      content,
      contentStyle,
      duration,
      onClose
    });
  },
  success: ({ content, contentStyle, duration, onClose }) => {
    return notice({
      content,
      contentStyle,
      type: "check",
      duration,
      onClose
    });
  },
  fail: ({ content, contentStyle, duration, onClose }) => {
    return notice({
      content,
      contentStyle,
      type: "close",
      duration,
      onClose
    });
  },
  loading: ({ content, contentStyle, duration, onClose }) => {
    return notice({
      content,
      contentStyle,
      type: "loading",
      duration,
      onClose
    });
  },
}
export default Toast