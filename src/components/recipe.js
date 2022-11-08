import React from 'react'
import Title from '../components/title.js';
import RecipeHolder from '../components/recipeHolder.js';
import ColLeft from '../components/colLeft.js';
import { StaticImage } from 'gatsby-plugin-image'

const pageTemplate = props => {

 const data = {
	  nodeFood:  props.pageContext.data
  }
var categoryList = "";
var tagsList = "";

data.nodeFood.recipeCategory.forEach(( {name}, index ) => {
  categoryList += (name + " ");
})
data.nodeFood.tags.forEach(( {name}, index ) => {
  tagsList += (name + " ");
})

const img = data.nodeFood.mediaImage.mediaImage.url;

return (
  <RecipeHolder>
    <Title> {data.nodeFood.title} </Title>
    <StaticImage alt="The food" src = { img }/> 
  </RecipeHolder>
)

 /* return (
    
    <>
      <h2>{data.nodeFood.title}</h2>
      <h2> Cooking Time: {data.nodeFood.cookingTime} Minutes </h2>
      <h2> Prep Time: {data.nodeFood.preparationTime} Minutes</h2>
      <h2> Difficulty: {data.nodeFood.difficulty} </h2>
      <h2> Number of Servings: {data.nodeFood.numberOfServings} </h2>
      <h2> Category: {categoryList} </h2>
      <h2> Tags: {tagsList} </h2>
      <h2> Instructions: <div
      dangerouslySetInnerHTML={{__html: data.nodeFood.recipeInstruction.value}}
    />
    </h2>
      

    </>
    )}
*/
 }

export default pageTemplate 