import * as React from 'react'
import { motion } from "framer-motion";
import {
    headingStyles,
  } from './layoutRecipe.module.css'

export default function Title({ children }) {
    return (
        <h1 className="heading" style={ headingStyles} >
             <motion.heading
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
                >
                { children }
            </motion.heading>
        </h1>
    )
}