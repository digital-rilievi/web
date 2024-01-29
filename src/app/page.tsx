import NavBar from "./components/Navbar/Navbar"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import PartnersList from "./components/PartnersList/PartnersList"
import styles from "./page.module.css"
import content from 'content.json'
import ImageText from "./components/ImageText/ImageText"
import Footer from "./components/Footer/Footer"
import ImageButton from "./components/ImageButton/ImageButton"
import Space from "./components/Space/Space"
import BlueTextCta from "./components/BlueTextCta/BlueTextCta"
import ManualSlider from "./components/ManualSlider/ManualSlider"
import WeDealWith from "./components/WeDealWith/WeDealWith"

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className={styles.content}>
        <VideoPlayer />
        <Space size={"big"} />
        <Space size={"big"} />
        <h1 className={styles.title}>
          {content.home.title}
        </h1>
        <ImageText image={content.home.firstImage}
          text={content.home.firstImageDesc}
          secondaryText={content.home.firstImageName}
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
        <Space size={"big"} />
        <ManualSlider slides={[
        <WeDealWith image1={""} image2={""} text={"aa"} />,
        <WeDealWith image1={""} image2={""} text={"bb"} />,
        <WeDealWith image1={""} image2={""} text={"cc"} />
        ]} />
        <Space size={"big"} />
        <Space size={"big"} />
        <Space size={"big"} />
        <BlueTextCta text={content.home.areYouInterested} label={content.home.areYouInterestedLabel} link={content.home.areYouInterestedLink} />
        <Space size={"big"} />
        <Space size={"big"} />
        <Space size={"big"} />
        <PartnersList
          className={styles.partnersList}
          partners={content.home.partners}
        />
        <Space size={"big"} />
        <Space size={"big"} />
        <Footer />
      </div>
    </main>
  );
}