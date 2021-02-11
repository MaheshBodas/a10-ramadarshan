import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

function HomeSlider() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  /*
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
      }
  */
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  console.log(index)
  console.log(length)
  return (
    <div class="grid-container">
      <div class="item1">
        <button onClick={() => handlePrevious()}>Previous</button>
      </div>
      <div class="item2"></div>
      <div class="item3">
        <button align="center" onClick={() => handleNext()}>Next</button>
      </div>  
      <div class="item4"> 
        <Img
          fluid={{ ...node.childImageSharp.fluid}}           
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
        />  
      </div>    
    </div>
  )
}

export default HomeSlider
