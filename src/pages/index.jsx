import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components"
import tw from "tailwind.macro"
import { SearchAlt } from "styled-icons/boxicons-regular"


const Hero = styled.div`
  ${tw`flex justify-center items-center pt-16`};
  &:after {
    content: "";
    ${tw`absolute h-full w-full overflow-hidden z-0`};
    transform: skewY(-12deg);
    transform-origin: 0;
    background: linear-gradient(
      150deg,
      #05d5ff 5%,
      #0575e6 35%,
      #021b79 94%
    );
  }
`

const HeroBlock = styled.div`
  ${tw`
    p-6vw
    z-1
    item-center
    justify-center
    flex-col
  `}
`

const HeroTitle = styled.h1`
  ${tw`
    text-5xl
    text-center
    leading-loose
    text-white
    font-sans
    font-light
    tracking-wide
  `};
  text-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
`
const SearchWrapper = styled.div`
  ${tw`relative`}
`
const SearchIcon = styled(SearchAlt)`
  ${tw`
    absolute
    pin-l
    ml-3
    text-blue-darkest
    w-4
  `}
  top: 50%;
  transform: translateY(-50%);
`

const Search = styled.input`
  ${tw`bg-white font-light pr-4 pl-8 py-2 border shadow border-grey rounded-full w-64 my-2`}
`

const IndexPage = () => (
  <Layout>
    <SEO title="BotHub" keywords={[`bots`, `telegram`, `chatbots`]} />
    <Hero>
      <HeroBlock>
        <HeroTitle>Bothub</HeroTitle>
        <SearchWrapper>
          <Search type="text" placeholder="Search" />
          <SearchIcon />
        </SearchWrapper>
      </HeroBlock>
    </Hero>
  </Layout>
)

export default IndexPage;
