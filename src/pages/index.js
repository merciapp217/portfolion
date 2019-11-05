import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article id="index">
      <section>
        <div className="content">
          <h2>PORTFOLION</h2>
          <p>める(<a href="#" target="_blank" rel="noopener noreferrer">@wellxxx_</a>)のポートフォリオサイトです。<br />何となく作った物を纏めて行きます。</p>
        </div>
        <span />
      </section>
    </article>
  </Layout>
)

export default IndexPage
