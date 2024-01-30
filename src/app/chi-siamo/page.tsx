import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from './Chisiamo.module.css'
import globalStyles from 'app/page.module.css'
import content from 'content.json'
import ScrollingText from 'app/components/ScrollingText/ScrollingText'

const ChiSiamo = () => {
  return (
    <>
      <Navbar />
      <div className={globalStyles.appBarSpace}>
        <Navbar invisible />
      </div>
      <ScrollingText text={content['chi-siamo'].title}/>
      <div className={styles.container}>
        <div className={styles.content}>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ChiSiamo