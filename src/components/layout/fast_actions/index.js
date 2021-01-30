import React from "react"
import Tile from "../../Tile"
import FastAction from "./FastAction"

const FastActions = ({ name, items }) => {
  if (!items.length) {
    return <React.Fragment />
  }

  return <Tile title={name}>
    <div className='tiles-row'>
      {items.map((item, id) => <FastAction key={`fast-action-${id}`} {...item} />,
      )}
    </div>
  </Tile>
}
FastActions.defaultProps = {
  name: "No name given",
  items: [],
}

export default FastActions