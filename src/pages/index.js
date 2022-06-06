import * as React from "react"
import { graphql, Link } from "gatsby"

function Index({ data }) {
  return (
    <div className="wrapper">
      <main>
        <h1>File System Route API</h1>
        <p>
          Please see the{` `}
          <a href="https://www.gatsbyjs.com/docs/file-system-route-api">
            documentation
          </a>
          {` `}
          to learn about all options. Below you'll see some example pages
          created.
        </p>
        <h2>Collection routes</h2>
        <p>
          List of products (both linked by name & SKU). Those were created via
          {` `}
          <em>collection</em> routes. When you link to a page that doesn't exist
          a <em>client-only</em> page acts like a fallback (the{` `}
          <em>[name].js</em> page). This example also shows that you can create
          multiple pages for the same view, in this case display product
          information both for the name and SKU.
        </p>
        <p>
          In order to link to create the correct links in this overview{` `}
          <em>gatsbyPath</em> was used.
        </p>
        <ul>
          {data.devices.nodes.map(device => (
            <li key={device.meta.sku}>
              <Link to={device.nameSlug}>{device.name}</Link>
              {` `}
              <Link to={device.skuSlug}>(SKU)</Link>
            </li>
          ))}
        </ul>
      
        <h2>Client-Only routes</h2>
        <p>
          As shortly mentioned for the "Collection routes" the{` `}
          <em>[name].js</em> file inside <em>src/pages/products</em> is already a
          client-only page. But you can do even more with those! See the example
          below:
        </p>
        <ul>
          <li>
            <Link to="/devices/incite/offer/REHOBOAM">
              /devices/[brand]/offer/[coupon]
            </Link>
          </li>

        </ul>
      </main>
    </div>
  )
}

export default Index

export const query = graphql`
  {
    devices: allDevice {
      nodes {
        name
        nameSlug: gatsbyPath(filePath: "/devices/{device.name}")
        skuSlug: gatsbyPath(filePath: "/devices/{device.meta__sku}")
        meta {
          sku
        }
      }
    }
  }
`
