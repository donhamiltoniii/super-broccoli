import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  appTitle: string;
  description?: string;
  lang?: string;
  meta?: ConcatArray<
    | { name: string; content: any; property?: undefined }
    | { property: string; content: any; name?: undefined }
  >;
}

const SEO: React.FC<SEOProps> = ({
  description = "",
  lang = "",
  meta = [],
  appTitle
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={appTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: appTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: appTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
};

export default SEO;
