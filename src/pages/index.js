import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article id="index">
      <h2>PORTFOLION</h2>
      <p>エンジニア@xxxxxのポートフォリオサイトです。
        <br />宜しければ、プロフィールからどうぞ。
      </p>
    </article>
  </Layout>
)

export default IndexPage
