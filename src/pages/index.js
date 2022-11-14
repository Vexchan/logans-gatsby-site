import * as React from 'react'
import Layout from '../components/layout'
import HomePage from '../components/homePage'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { motion } from "framer-motion";
import { siteTitle, pageTitle, lineWidth } from '../components/layout.module.css'
import earthGIF from '../gifs/earthSpin.gif'
import titleWebsite from '../images/titleWebsite.png'

const IndexPage = () => {
  return (
    <HomePage>
      <motion.div className={siteTitle}
                /*animate={{ x: [50, 30, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                */
               animate={{opacity: 1, scale: 1}}
                initial={{ opacity: 0, scale:1 }}
                transition={{ scale:1,duration: 2 }}
                >
                <StaticImage alt="site title" src="../images/House Icon edited.png" />
        </motion.div>
        <br></br><br></br> 
        <hr className={lineWidth}></hr>
        <br></br><br></br><br></br><br></br>
        <img className={pageTitle} src={titleWebsite} alt="Out of this world" />
      <Layout pageTitle="">
        <img src={earthGIF} alt="Earth spinning in space" />

      </Layout>
    </HomePage>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage