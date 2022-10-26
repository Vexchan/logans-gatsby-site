import { Link, useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const RecipePage = () => {
    const data = useStaticQuery(graphql`
    {
  Drupal {
    nodeRecipes(first: 10) {
      edges {
        node {
          title
        }
      }
    }
  }
}
  `)
  console.log(data.Drupal.nodeRecipes.edges);

  return (
    <Layout pageTitle="Recipe Page">
      {
        data.Drupal.nodeRecipes.edges.forEach(({ node }, index) => (
          <article key={node.id}>
            <h2>
                {node}
            </h2>
            <p></p>
            <p></p>
          </article>
        ))
      }
    </Layout>
  )
  }

export default RecipePage