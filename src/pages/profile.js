import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const ProfilePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <article id="profile">
      <h2>PROFILE</h2>
      <section>
        <span className="profile-img"><Img fixed={data.file.childImageSharp.fixed} /></span>
        <div className="content">
          <dl>
            <dt>名前</dt><dd>xxxx</dd>
            <dt>出身</dt><dd>埼玉県</dd>
            <dt>学歴</dt><dd>4年制専門学校</dd>
            <dt>職歴</dt><dd>1年10ヶ月ほどシステム開発会社に勤務</dd>
            <dt>その他</dt><dd><p>Webアプリ(勤怠管理等々)の開発等々を経験、AR技術に見せられ退職。<br />
            XR事業に携われるようになりたいという野望が有ります。<br />
            趣味は、ボクシングと課金。
          </p></dd>
          </dl>
        </div>
      </section>
    </article>
  </Layout>
)

export default ProfilePage

export const query = graphql`
  query {
    file(relativePath: { eq: "profile_icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
