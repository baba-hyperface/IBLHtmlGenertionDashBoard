import React from 'react'
import { HtmlGenerator } from './HtmlGenerator'
import Styles from "./IBLOffers.module.css";

export const IBLOffers = () => {
  return (
    <div className={Styles.main}>
        <div className={Styles.iblOffers}>IBLOffers</div>
        <div className={Styles.HtmlGenerator}><HtmlGenerator/></div>
    </div>
  )
}
