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
            <dt>名前</dt><dd>める(本名は非公開)</dd>
            <dt>出身</dt><dd>埼玉県</dd>
            <dt>生年月日</dt><dd>1996/XX/XX生まれの23歳</dd>
            <dt>経歴</dt>
            <dd>
            <ul>
              <li>◆ 2018年03月 - 某専門学校の情報系学科卒業</li>
              <li>◇ 2018年04月 - システム開発会社に入社</li>
              <li>◆ 2019年11月 - 在職勤務継続中</li>
            </ul>
            </dd>
          </dl>
        </div>
        <div className="text">
          <p>デザイン好きでマークアップが苦手でシステムつくるエンジニアです。
            会社ではシステムの開発をし、自分の経験から新卒をコソコソサポート。
            面倒見が良いせいで、自分の作業圧迫してしまうバランス悪悪タイプです。<br />
            趣味は、ボクシングと課金。最近、興味ある事はARで少しずつ勉強中。
            今後は、少しずつXR事業に携われるようになりたいという野望が有ります。
          </p>
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
