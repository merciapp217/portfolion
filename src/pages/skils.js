import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import skilsFile from "../json/skils.json";

function SkillsList(list) {
  const img_path = "../image/product_logo/";
  const content = list.map((data, index) =>
    <li key={index}>
      <div><img src={img_path + data.img} alt={data.name} /></div>
      <p className="text-center">{data.name}</p> 
    </li>
  );

  return content;
}

const SkilsPage = () => (
  <Layout>
    <SEO title="Home" />
    <article id="skils">
      <h2>SKILS</h2>
      <section id="front">
        <div>
          <h3>FRONTEND DEVELOPMENT</h3>
          <ul>{SkillsList(skilsFile.frontendDevelopment)}</ul>
        </div>
      </section>
      <section id="back">
        <div>
          <h3>BACKEND DEVELOPMENT</h3>
          <ul>{SkillsList(skilsFile.backendDevelopment)}</ul>
        </div>
      </section>
      <section id="ops">
        <div>
          <h3>DEVELOPMENT OPERATIONS</h3>
          <ul>{SkillsList(skilsFile.developmentOperations)}</ul>
        </div>
      </section>
    </article>

    <article id="works">
      <h2>WORKS</h2>
      <p className="text-center">Comming Soon...</p>
    </article>
  </Layout>
)

export default SkilsPage
