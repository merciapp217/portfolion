import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProfilePage = () => (
  <Layout>
    <SEO title="Home" />
    <article id="profile">
      <h2>PROFILE</h2>
      <section>
        <span className="profile-img"><img src="/" alt="プロフィール画像"></img></span>
        <p>はじめまして。埼玉出身のWebエンジニアめる(@wellxxx_)です。
          新卒で入社した会社(現在は2年目)でRuby on Railsを用いてシステム開発したり、HTML&CSS&PHP諸々使ってLP更新したりしてます。
          生活に困らない為に選んだエンジニアの道が、
          いつしか楽しいものとなって、「人の心を動かすもの」を作る事が夢になりました。
          <span className="text-right">(2019/11)</span>
        </p>
      </section>
    </article>
  </Layout>
)

export default ProfilePage
