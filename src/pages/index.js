import * as React from 'react'
import Layout from '../components/layout'
/* 
pass: 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
*/
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage