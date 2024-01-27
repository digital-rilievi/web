import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from './Chisiamo.module.css'
import globalStyles from 'app/page.module.css'

const ChiSiamo = () => {
  return (
    <>
      <Navbar />
      <div className={globalStyles.appBarSpace}>
        <Navbar invisible />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <div className={styles.title1}>{"title1"}</div>
          <div className={styles.title2}>{"title2"}</div> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ChiSiamo