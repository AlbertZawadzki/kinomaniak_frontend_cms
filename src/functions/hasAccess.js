import roles from "../data/roleTypes.json"
import store from "../redux/store"

const hasAccess = (role) => {
  let userRole = store.getState().request?.data?.user?.role || roles.USER

  try {
    userRole = userRole?.toString()?.replaceAll(" ", "-") || roles.USER
  } catch {
  }

  if (userRole === roles.USER) {
    return false
  }

  if (role === roles.NOT_CLIENT) {
    return true
  }

  switch (userRole) {
    case roles.OWNER:
    case roles.ADMIN:
    case roles.DEVELOPER:
      return true
    case roles.CONTENT_MANAGER:
      return role === roles.CONTENT_MANAGER
    case roles.ANALYTIC:
      return role === roles.ANALYTIC
    case roles.TRANSLATOR:
      return role === roles.TRANSLATOR
    case roles.SUPPORT:
      return role === roles.SUPPORT
    default:
      return false
  }
}

export default hasAccess
