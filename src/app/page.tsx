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
        image={content.home.secondImage}
        text={content.home.secondImageDesc}
        name={content.home.secondImageName}
        buttonLabel={content.home.secondImageButtonLabel}
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