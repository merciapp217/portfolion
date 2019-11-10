import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article id="index">
      <section>
        <div>
          <h2>PORTFOLION</h2>
          <p>都内でRuby on Railsエンジニアをしています、める(<a href="https://twitter.com/wellxxx_" target="_blank">@wellxxx_</a>)のポートフォリオサイトです。宜しければ、プロフィールからどうぞ。
          <br />最終更新日:2019年11月10日</p>
        </div>
        <span />
      </section>
    </article>
  </Layout>
)

export default IndexPage
