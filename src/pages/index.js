/* 
pass: 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
*/
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A bloody rainbow!!!"
        src="../images/rainbow.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage