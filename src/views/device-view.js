import * as React from "react"
import { Link } from "gatsby"

function DeviceView({ device }) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>{device.name}</h1>
        <p>
          {device.description}. Appeared in {device.appearance}.
        </p>
        <p>SKU: {device.meta.sku}</p>
      </main>
      <footer>Product provided by Incite.</footer>
    </div>
  )
}

export default DeviceView
