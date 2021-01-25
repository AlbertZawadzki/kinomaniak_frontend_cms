import React, { useState } from "react"
import * as Icons from "../assets/icons"

const Tile = ({ hidden, hideable, title, children, sub, full, column }) => {
  switch (sub) {
    case 1:
      title = <h3>{title}</h3>
      break
    default:
      title = <h2>{title}</h2>
  }

  const [show, setShow] = useState(!hidden)

  return (
    <div className={`tile-wrapper ${full ? "full" : "small"}`}>
      {title}
      {hideable && (
        <button
          className="button absolute right top"
          onClick={() => setShow(!show)}
        >
          {show ? <Icons.ArrowUp /> : <Icons.ArrowDown />}
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
