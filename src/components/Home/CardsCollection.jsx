import React, { useContext } from "react"
import Card from "./Card"
import { ProductsContext } from "../../context/ProductsContext"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "./CardsCollection.scss"

const CardsCollection = () => {
  const [products] = useContext(ProductsContext)
  const breakpoints = useBreakpoint()
  return (
    <div className="cards-collection">
      {products.map(product => {
        const { id, title, homeImage, excerpt, sizes, slug } = product
        return (
          <>
            <Card
              key={id}
              id={id}
              title={title}
              imageUrl={homeImage}
              excerpt={excerpt}
              size={sizes}
              slug={slug}
            />
            {!breakpoints.md ? (
              <h3 className="card-blank-space-title">{title}</h3>
            ) : null}
          </>
        )
      })}
    </div>
  )
}

export default CardsCollection
