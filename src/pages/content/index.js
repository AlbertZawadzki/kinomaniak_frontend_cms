import Link from "next/link"
import React from "react"
import Layout from "../../components/layout"
import roles from "../../data/roleTypes.json"
import Tile from "../../components/Tile"
import functions from "../../functions"

const Content = () => {
  return (
    <Layout title="Content" role={roles.CONTENT_MANAGER}>
      <div className="tiles-row">
        <Tile title="Actors" full={false} hideable={false}>
          <Link href="/content/actors">
            <input
              type="button"
              className="center right top"
              value={functions.getTranslation("go_to_index")}
            />
          </Link>
        </Tile>
        <Tile title="Categories" full={false} hideable={false}>
          <Link href="/content/categories">
            <input
              type="button"
              className="center right top"
              value={functions.getTranslation("go_to_index")}
            />
          </Link>
        </Tile>
        <Tile title="Movies and series" full={false} hideable={false}>
          <Link href="/content/contents">
            <input
              type="button"
              className="center right top"
              value={functions.getTranslation("go_to_index")}
            />
          </Link>
        </Tile>
        <Tile title="Images" full={false} hideable={false}>
          <Link href="/content/images">
            <input
              type="button"
              className="center right top"
              value={functions.getTranslation("go_to_index")}
            />
          </Link>
        </Tile>
        <Tile title="Posters" full={false} hideable={false}>
          <Link href="/content/posters">
            <input
              type="button"
              className="center right top"
              value={functions.getTranslation("go_to_index")}
            />
          </Link>
        </Tile>
        <Tile title="Videos" full={false} hideable={false}>
          <Link href="/content/videos">
            <input
              type="button"
              className="center right top"
              value={functions.getTranslation("go_to_index")}
            />
          </Link>
        </Tile>
      </div>
    </Layout>
  )
}

export default Content
