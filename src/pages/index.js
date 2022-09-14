/* 
pass: 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
*/
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

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

export const Head = () => <Seo title="Home Page" />

export default IndexPage