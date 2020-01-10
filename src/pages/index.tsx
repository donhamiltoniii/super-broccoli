import React from "react";

import Layout from "../components/layout/layout.component";
import SEO from "../components/seo/seo.component";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO appTitle="Home" />
    <h1>BROCCOLI</h1>
    <p>It's fucking super!</p>
    <p>Now go build something great.</p>
  </Layout>
);

export default IndexPage;
