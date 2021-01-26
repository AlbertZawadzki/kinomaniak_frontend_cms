import React, { useState } from "react"
import * as Icons from "../assets/icons"

const Tile = ({ hidden, hideable, title, children, sub, full, column }) => {

  let buttonStyles
  let iconStyles

  switch (sub) {
    case 1:
      title = <h3 className='tile-title'>{title}</h3>
      buttonStyles = { top: 0, right: "-5px" }
      iconStyles = { fontSize: "22px" }
      break
    case 2:
      title = <h4 className='tile-title'>{title}</h4>
      buttonStyles = { top: 0, right: "-5px" }
      iconStyles = { fontSize: "20px" }
      break
    default:
      title = <h2 className='tile-title'>{title}</h2>
      buttonStyles = { top: "5px", right: 0 }
      iconStyles = { fontSize: "24px" }
  }

  const [show, setShow] = useState(!hidden)

  return (
    <div className={`tile-wrapper ${full ? "full" : "small"}`}>
      {title}
      {hideable && (
        <button
          type="button"
          className="button absolute right top"
          onClick={() => setShow(!show)}
          style={buttonStyles}
        >
          {show ? <Icons.ArrowUp style={iconStyles} /> : <Icons.ArrowDown style={iconStyles} />}
        </button>
      )}
      <div
        className={`tile-content
         ${show ? "show" : "hidden"}
          ${column ? "column" : "row"}
          `}
      >
        {children}
      </div>
    </div>
  )
}

Tile.defaultProps = {
  hidden: false,
  hideable: true,
  title: "No title given",
  children: <div className="error">No children given</div>,
  sub: 0,
  full: true,
  column: false,
}

export default Tile
