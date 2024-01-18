import AppBar from "./components/Navbar/Navbar"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import PartnersList from "./components/PartnersList/PartnersList"
import styles from "./page.module.css"
import content from 'content.json'

export default function Home() {
  return (
    <main>
      <AppBar />
      <VideoPlayer />
      <h1 className={styles.title}>
        {content.home.title}
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
