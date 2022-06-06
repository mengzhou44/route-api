import * as React from "react"
import { graphql, Link } from "gatsby"

function Index({ data }) {
  return (
    <div className="wrapper">
      <main>
        <h3>Accessing parent data</h3>
        <p>
          The example below is a list of blog posts that were written in
          markdown and named in the format <em>YYYY-MM-DD-title.md</em>.
          Markdown nodes automatically add the <em>File</em> node as a parent
          thus you can access things like the <em>name</em>, e.g. to construct a
          route at <em>/blog/YYYY-MM-DD-title</em>.
        </p>
        <ul>
          {data.blog.nodes.map(post => (
            <li key={post.parent.name}>
              <Link to={`/blog/${post.parent.name}`}>
                {post.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Index

export const query = graphql`
  {
    blog: allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`
