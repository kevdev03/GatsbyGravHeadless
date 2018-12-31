import React from 'react'
import { Link, graphql } from 'gatsby'
import styles from './product.module.css'
import Layout from '../components/layout'
const NETLIFY_URL = '';

export default function Product({data, location}) {
  return (
    <Layout>
      <h1>{data.snipcartProduct.name}</h1>
      <div className={styles.breadcrumb}>
        <Link to="/products">Back to the products</Link>
      </div>

      <section>
        <figure className={styles.productFigure}>
          <img src={data.snipcartProduct.image} alt={data.snipcartProduct.name} />
        </figure>

        <article>{data.snipcartProduct.description}</article>
        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.buyButton} snipcart-add-item`}
            data-item-name={data.snipcartProduct.name}
            data-item-id={data.snipcartProduct.userDefinedId}
            data-item-image={data.snipcartProduct.image}
            data-item-url={`${NETLIFY_URL}${location.pathname}`}
            data-item-price={data.snipcartProduct.price}
          >
            Buy it now for ${data.snipcartProduct.price}
          </button>
        </div>
      </section>
    </Layout>
  )
}

// TODO
// use return
export const query = graphql`
  query ProductById {
    snipcartProduct(userDefinedId: { eq: "1" }) {
      userDefinedId
      description
      image
      name
      price
    }
  }
`
