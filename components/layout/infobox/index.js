import React from "react"
import InfoboxItem from "./InfoboxItem"

export default class Infobox extends React.Component {
  render() {
    return <div className='infobox-wrapper'>
      <div className='infobox-inner-wrapper'>
        <InfoboxItem status='more-action' message='Message' />
        <InfoboxItem status='processing' message='Message' />
        <InfoboxItem status='success' />
        <InfoboxItem status='failure' message='Message' />
        <InfoboxItem status='unknown' message='Message' />
      </div>
    </div>
  }
}
