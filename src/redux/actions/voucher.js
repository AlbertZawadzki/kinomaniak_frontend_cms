import * as actions from "../actionNames/voucher"

export const setVouchers = (data) => ({
  type: actions.VOUCHER_SET,
  data: data,
})

export const addVoucher = (data) => ({
  type: actions.VOUCHER_ADD,
  data: data,
})

export const removeVoucher = (id) => ({
  type: actions.VOUCHER_REMOVE,
  id: id,
})

export const updateVoucher = (data) => ({
  type: actions.VOUCHER_UPDATE,
  data: data,
})
