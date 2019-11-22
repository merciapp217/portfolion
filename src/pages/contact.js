import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <article id="contact">
      <h2>CONTACT</h2>
      <section>
        <div className="google-form">
          <iframe title="google form" src="https://docs.google.com/forms/d/e/1FAIpQLSe_J5WoG902RX6L88VgOiBw1XmMf58keOUKJ_cj2BodFEz2WA/viewform?embedded=true">読み込んでいます…</iframe>
        </div>
      </section>
    </article>
  </Layout>
)

export default ContactPage
