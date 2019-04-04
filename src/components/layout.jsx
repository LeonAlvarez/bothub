/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./../style.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <main className="min-h-screen h-full relative">{children}</main>
        <footer className="flex font-sans w-full py-12 mt-12 text-white bg-blue-darker border-t-2 border-grey-light justify-center">
          BotHub © {new Date().getFullYear()}, Built with &zwnj;
          <a className="no-underline text-white" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
