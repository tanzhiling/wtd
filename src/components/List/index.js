import React from "react"
import Icon from "../Icon"
import "./index.less"
/**
 * @param {String | React.Element} renderHeader `list head`    
 */
const List = ({ children, renderHeader }) => {
  return (
    <div className="wt-list">
      {renderHeader ? <div className="wt-list-header">{renderHeader}</div> : ""}
      {children}
    </div>
  )
}
/**
 * @param {String | React.Element} thumb `缩略图(当为 string 类型时作为 img src)`
 * @param {String | React.Element} extra `右边内容`
 * @param {String} arrow `箭头方向`
 */

const Item = ({ thumb, arrow, extra, children, ...props }) => {
  const thumbItem =
    typeof thumb === "string" ? <div className="wt-list-item-thumb">
      <img src={thumb} alt="" />
    </div> : <div className="wt-list-item-thumb">
        {thumb}
      </div>
  const extraItem = <div className="wt-list-item-extra">
    {extra}
  </div>
  return (
    <div className="wt-list-item" {...props}>
      <div className="wt-list-item-container">
        {thumb ? thumbItem : ""}
        <div className="wt-list-item-content">
          {children}
        </div>
        {extra ? extraItem : ""}
        {arrow ? <Icon type={arrow} style={{ marginLeft: 8 }} /> : ""}
      </div>
    </div>
  )
}
const Brief = ({ children }) => {
  return (
    <div className="wt-list-item-brief">{children}</div>
  )
}
Item.Brief = Brief
List.Item = Item
export default List