import React from "react"
import Link from "next/link"

const FastAction = ({ to, name }) => <Link href={to}>
  <input
    type="button"
    className="center"
    style={{ margin: "5px" }}
    value={name}
  />
</Link>

FastAction.defaultProps = {
  to: "/",
  name: "No name given",
}

export default FastAction