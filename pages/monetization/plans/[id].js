import React from "react"

const MonetizationPlansSingle = ({ id }) => {
  return (
    <pre>
      Monetization/Plans/{id}
    </pre>
  )
}

MonetizationPlansSingle.getInitialProps = (context) => {
  const { id } = context.query

  return { id }
}

export default MonetizationPlansSingle