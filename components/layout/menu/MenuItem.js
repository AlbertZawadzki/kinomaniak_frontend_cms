import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import functions from "../../../functions"
import store from "../../../redux/store"

const renderName = (name) => {
  if (name === "user_name") {
    return store.getState().request.data?.user?.name || "Unknown"
  }
  return name
}

const renderPath = (path) => {
  if (path === "/profile/") {
    return path + (store.getState().request.data?.user?.id || 0)
  }
  return path
}

const MenuItem = ({
  action,
  isLink,
  isTop,
  name,
  to,
  type,
  subitems,
  isSubItem,
}) => {
  const router = useRouter()
  let basicClassName = `
    menu-item ${isTop ? "top" : "left"}
    ${type}
    ${isLink && router.pathname === to ? "active" : "inactive"}
    ${!isLink && router.pathname.includes(to) ? "active" : "inactive"}
    ${isSubItem ? "subitem" : "normal"}
  `

  if (!functions.hasAccess(type)) {
    return <React.Fragment />
  }

  if (isLink) {
    return (
      <Link href={renderPath(to)}>
        <div className={basicClassName}>{renderName(name)}</div>
      </Link>
    )
  }

  if (subitems?.length > 0) {
    return (
      <div className={basicClassName}>
        {name}
        <div className="submenu-wrapper">
          <div className="submenu">
            {subitems.map((item) => (
              <MenuItem
                type={item.type || type}
                key={item.id}
                {...item}
                isSubItem
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={basicClassName} onClick={() => action()}>
      {name}
    </div>
  )
}

MenuItem.defaultProps = {
  action: () => {
    console.log("No action given")
  },
  isLink: false,
  isTop: false,
  name: "No name set",
  to: null,
  type: "unknown",
  subitems: [],
  isSubItem: false,
}

export default MenuItem
