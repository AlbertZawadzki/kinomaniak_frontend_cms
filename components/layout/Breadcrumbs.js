import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Breadcrumbs = () => {
  const router = useRouter()
  const crumbs = router.asPath.split("/")
  let fullPath = ""

  if (router.asPath === "/") {
    return <React.Fragment />
  }

  return <div className='breadcrumbs-wrapper min-tablet'>
    <div className='breadcrumb-back' onClick={() => router.back()}>
    </div>
    {
      crumbs.map((crumb, id) => {
          fullPath += crumb + "/"

          return <Link href={fullPath} key={`breadcrumb-${id}`}>
            <div className='breadcrumb'>
              {`/${crumb}`}
            </div>
          </Link>
        },
      )
    }
  </div>
}

export default Breadcrumbs