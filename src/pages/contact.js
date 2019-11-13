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
        <div className="content">
          <p>本サイト、もしくは個人に対して御用の方はTwitter<a href="https://twitter.com/wellxxx_" target="_blank" rel="noopener noreferrer">@wellxxx_</a>のDM（推奨）又はフォームからご連絡ください。2日程度にてご返信いたします。
            <br />※ スクール関係や個人事業、フリーランス等々のお誘いはスパムと判断しご返信できない場合もございます。
          </p>
        </div>
        <div className="embedding-twitter">
          <a className="twitter-timeline" data-lang="ja" data-width="500" data-height="500" data-theme="light" data-link-color="#d2b356" href="https://twitter.com/wellxxx_?ref_src=twsrc%5Etfw">Tweets by wellxxx_</a> <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </section>
    </article>
  </Layout>
)

export default ContactPage
