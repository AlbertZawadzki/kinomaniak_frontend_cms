import React from "react"
import Poster from "../../../Poster"

const ListerItem = ({ name, pin_color, pin_effect, border_visible, border_color, border_effect }) => {
  return (
    <div className='short-single-poster-wrapper'>
      <div className='short-single-poster-inner-wrapper'>
        <Poster
          pinColor={pin_color}
          pinEffect={pin_effect}
          borderVisible={border_visible}
          borderColor={border_color}
          borderEffect={border_effect}
          small
        />
        <div className='short-single-poster-name'>
          {name}
        </div>
      </div>
    </div>
  )
}

ListerItem.defaultProps = {
  name: "no name given",
  pin_color: "#4169e1",
  pin_effect: null,
  border_visible: false,
  border_color: null,
  border_effect: null,
}

export default ListerItem
