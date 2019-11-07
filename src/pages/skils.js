import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import skilsFile from "../json/skils.json";

const front = skilsFile.frontendDevelopment.map((data, index) =>
  <li key={index}>
    <img src={'../' + data.img} alt={data.name} />
    <p>{data.name}</p>
  </li>
);

const SkilsPage = () => (
  <Layout>
    <SEO title="Home" />
    <article id="skils">
      <h2>SKILS</h2>
      <section id="front">
        <h3>FRONTEND DEVELOPMENT</h3>
        <ul>{front}</ul>
      </section>
      <section id="back">
        <h3>BACKEND DEVELOPMENT</h3>
      </section>
      <section id="ops">
        <h3>DEVELOPMENT OPERATIONS</h3>
      </section>
    </article>

    <article id="works">
      <h2>WORKS</h2>
      <p className="text-center">Comming Soon...</p>
    </article>
  </Layout>
)

export default SkilsPage
