'use client'
import AppBar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import PartnersList from "./components/PartnersList/PartnersList";
import styles from "./page.module.css"
//import Head from "next/head";

export default function Home() {
  var title = "Rilievi digitali, con le\ntecniche più recenti e\nall'avanguardia"
  return (
    <main>
      <AppBar />
      <VideoPlayer />
      <h1 className={styles.title}>
      {title}
      </h1>
      <PartnersList 
      className={styles.partnersList}
      partners={[
        "assets/partners/chioggia.jpeg",
        "assets/partners/logo1.png",
        "assets/partners/mose.png",
        "assets/partners/seam.png",
        "assets/partners/sport_salute.png",
        "assets/partners/venezia.png"
      ]} />
    </main>
  )
}
