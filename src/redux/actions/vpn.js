import * as actions from "../actionNames/vpn"

export const setVpns = (data) => ({
  type: actions.VPN_SET,
  data: data,
})

export const addVpn = (data) => ({
  type: actions.VPN_ADD,
  data: data,
})

export const removeVpn = (id) => ({
  type: actions.VPN_REMOVE,
  id: id,
})

export const updateVpn = (data) => ({
  type: actions.VPN_UPDATE,
  data: data,
})
