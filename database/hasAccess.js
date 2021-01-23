import getUser from "./getUser"

const hasAccess = (access) => {
  const userRole = getUser().role

  return true
}

export default hasAccess