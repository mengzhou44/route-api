import * as React from "react"
import { Link } from "gatsby"

function DeviceCatchAll({ params }) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>Couldn't find device</h1>
        <p>We couldn't locate the device"{params.name}"</p>
      </main>
    </div>
  )
}

export default DeviceCatchAll
