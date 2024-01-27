import AppBar from "./components/Navbar/Navbar"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import PartnersList from "./components/PartnersList/PartnersList"
import styles from "./page.module.css"
import content from 'content.json'
import ImageText from "./components/ImageText/ImageText"
import Footer from "./components/Footer/Footer"
import ImageButton from "./components/ImageButton/ImageButton"
import Space from "./components/Space/Space"

export default function Home() {
  return (
    <main>
      <AppBar />
      <VideoPlayer />
      <Space size={"big"} />
      <Space size={"big"} />
      <h1 className={styles.title}>
        {content.home.title}
      </h1>
      <ImageText image={content.home.firstImage}
        text={content.home.firstImageDesc}
        inverted
        blueCircle
      />
      <Space size={"big"} />
      <Space size={"big"} />
      <ImageButton
        image={"/assets/projects/mose.png"}
        title={"LA NOSTRA AZIENDA\nE I NOSTRI PROGETTI"}
        remainsInPage={true}
      />
      <Space size={"big"} />
      <Space size={"big"} />
      <PartnersList
        className={styles.partnersList}
        partners={content.home.partners}
      />
      <Space size={"big"} />
      <Space size={"big"} />
      <Footer />
    </main>
  );
}