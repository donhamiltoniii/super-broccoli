import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO appTitle="404: Not found" />
    <h1>404!</h1>
    <p>
      YOU DONE DID THE THING THAT MAKES THE INTERSITE YOU'RE ON NOT WORK!! DON'T
      DO DAT!
    </p>
  </Layout>
);

export default NotFoundPage;
