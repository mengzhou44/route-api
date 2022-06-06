import * as React from "react"
import { graphql } from "gatsby"
import DeviceView from "../../views/device-view"

function Device(props) {
  const { device } = props.data
  return <DeviceView  device={device} />
}

export default Device

export const query = graphql`
  query ($id: String!) {
    device(id: { eq: $id }) {
      name
      description
      appearance
      meta {
        createdAt
        id
        sku
      }
    }
  }
`

