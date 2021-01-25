import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import functions from "../../../functions"
import store from "../../../redux/store"
import * as Icons from "../../../assets/icons"

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
  Icon,
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
        <div className={basicClassName}>
          <div className="menu-item-icon">{Icon}</div>
          <div className="menu-item-name">{renderName(name)}</div>
        </div>
      </Link>
    )
  }

  if (subitems?.length > 0) {
    return (
      <React.Fragment>
        <div className="min-tablet">
          <div className={basicClassName}>
            <div className="menu-item-icon">{Icon}</div>
            <div className="menu-item-name">{renderName(name)}</div>
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
        </div>
        <div className="max-mobile">
          <Link href={renderPath(to)}>
            <div className={basicClassName}>
              <div className="menu-item-icon">{Icon}</div>
              <div className="menu-item-name">{renderName(name)}</div>
            </div>
          </Link>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className={basicClassName} onClick={() => action()}>
      <div className="menu-item-icon">{Icon}</div>
      <div className="menu-item-name">{renderName(name)}</div>
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
  Icon: <Icons.EmptyIcon />,
}

export default MenuItem
