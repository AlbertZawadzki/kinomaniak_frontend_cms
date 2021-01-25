import Link from "next/link"
import React from "react"
import Layout from "../../../components/layout"
import Tile from "../../../components/Tile"
import roles from "../../../data/_role_types.json"
import functions from "../../../functions"

const ContentActors = () => {
  return (
    <Layout title="Actors" role={roles.CONTENT_MANAGER}>
      <div className="tiles-row">
        <Tile title="All actors" full={false} hideable={false}>
          <Link href="/content/actors/all">
            <input
              type="button"
              className="center right top"
              value={functions.getTranslation("go_to_all")}
            />
          </Link>
        </Tile>
        <Tile title="Create new actor" full={false} hideable={false}>
          <Link href="/content/actors/new">
            <input
              type="button"
              className="center right top"
              value={functions.getTranslation("go_to_create_form")}
            />
          </Link>
        </Tile>
      </div>
    </Layout>
  )
}

export default ContentActors
