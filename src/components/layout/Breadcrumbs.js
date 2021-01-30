import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import * as Icons from "../../assets/icons"
import functions from "../../functions"

const Breadcrumbs = () => {
  const router = useRouter()
  const crumbs = router.route.split("/")
  let fullPath = ""

  if (router.asPath === "/") {
    return <React.Fragment />
  }

  return <div className='breadcrumbs-wrapper min-tablet'>
    <div className='breadcrumbs-inner-wrapper'>
      <div className='breadcrumb-back' onClick={() => router.back()}>
        <Icons.ArrowLeft />
      </div>
    </div>
    <div className='breadcrumbs-inner-wrapper'>
      {
        crumbs.map((crumb, id) => {
            fullPath += crumb + "/"

            return <Link href={fullPath} key={`breadcrumb-${id}`}>
              <div className='breadcrumb'>
                {`/${crumb.length === 0 ? functions.getTranslation("home").toLowerCase() : crumb}`}
              </div>
            </Link>
          },
        )
      }
    </div>
  </div>
}

export default Breadcrumbs