import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

const IndexPage = () => {
  const { bgImage } = useStaticQuery(
    graphql`
      query {
        bgImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );

  const image = getImage(bgImage);
  const convertedBgImage = convertToBgImage(image);

  return (
    <>
      <BackgroundImage
        Tag="div"
        {...convertedBgImage}
        preserveStackingContext
        className="background"
      ></BackgroundImage>
    </>
  );
};

export default IndexPage;
