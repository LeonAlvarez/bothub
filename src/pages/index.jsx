import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components"
import tw from "tailwind.macro"


const Hero = styled.div`
  ${tw`flex justify-center items-center`};
  background: #0575e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #021b79,
    #0575e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #021b79,
    #0575e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
const HeroBlock = styled.div`
  ${tw`p-6vw`}
`
const HeroTitle = styled.h1`
  ${tw`text-5xl text-white font-sans font-light tracking-wide`};
  text-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
`

const IndexPage = () => (
  <Layout>
    <SEO title="BotHub" keywords={[`bots`, `telegram`, `chatbots`]} />
    <Hero>
      <HeroBlock>
        <HeroTitle>Bothub</HeroTitle>
      </HeroBlock>
    </Hero>
  </Layout>
)

export default IndexPage;
