import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <article id="contact">
      <h2>CONTACT</h2>
      <section>
        {/* google form を設置する */}
      <p>何かしら御用の方は、TwitterのDM（推奨）又はフォームからご連絡ください。</p>
      </section>
    </article>
  </Layout>
)

export default ContactPage
