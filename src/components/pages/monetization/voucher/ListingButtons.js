import React from "react"
import database from "../../../../database"
import functions from "../../../../functions"
import { updateVoucher } from "../../../../redux/actions/voucher"

const update = async (id, enable = false) => {
  let url = "vouchers"
  if (enable) {
    url += "/activate/"
  } else {
    url += "/deactivate/"
  }
  url += id

  await database.post(url, updateVoucher, null)
}

const ListingButtons = ({ id, available }) => {
  return available ?
    <input
      type="button"
      className="small right warn"
      value={functions.getTranslation("disable")}
      onClick={() => update(id)}
    />
    :
    <input
      type="button"
      className="small right success"
      value={functions.getTranslation("enable")}
      onClick={() => update(id, true)}
    />
}

ListingButtons.defaultProps = {
  id: 0,
  available: false,
}

export default ListingButtons
