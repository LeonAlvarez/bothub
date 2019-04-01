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
        <main className="min-h-screen">{children}</main>
        <footer className="flex font-sans absolute pin-b w-full py-6 mt-12 border-t-2 border-grey-light justify-center">
          BotHub © {new Date().getFullYear()}, Built with &zwnj;
          <a class="no-underline" href="https://www.gatsbyjs.org">
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
