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
        partners={content.home.partners} />
    </main>
  )
}
