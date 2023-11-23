import * as React from 'react'
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import './QuickLinks.scss'
const QuickLinks = (props: any) => {
  let arr: any[] = []
  arr = props.data

  
  return (
    <>
      {arr?.map((x) => {
        return (<div className="row2container__part2__item">
          <div className="linkBody" onClick={() => window.open(x.Url, "_blank")}>
            <div className="linkIcon"><img src={x.Icon} /></div>
            <div className="linkTitle">{x.Title}</div>
          </div>
        </div>)
      })}
    </>
  )
}

export default QuickLinks