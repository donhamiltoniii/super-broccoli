import React from "react";

import Layout from "../components/layout/layout.component";
import Observables from "../components/observables/observables.component";
import SEO from "../components/seo/seo.component";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO appTitle="Home" />
    <h1>Components</h1>
    <h2>Observables</h2>
    <Observables />
  </Layout>
);

export default IndexPage;
