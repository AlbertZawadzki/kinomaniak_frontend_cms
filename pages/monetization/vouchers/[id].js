import React from "react"

const MonetizationVouchersSingle = ({ id }) => {
  return (
    <pre>
      Monetization/Vouchers/{id}
    </pre>
  )
}

MonetizationVouchersSingle.getInitialProps = (context) => {
  const { id } = context.query

  return { id }
}

export default MonetizationVouchersSingle