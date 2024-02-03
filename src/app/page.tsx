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
import WhoWeAre from "./components/WhoWeAre/WhoWeAre"

export default function Home() {

  var weDealWithList: React.ReactNode[] = content.home.weDealWith.map((deal, index) => (
    <WeDealWith
      key={index}
      index={index}
      image1={deal.img1}
      image2={deal.img2}
      title={deal.title}
      text={deal.text}
      link={deal.link} />
  ));

  return (
    <main>
      <NavBar />
      <div className={styles.content}>
        <VideoPlayer />
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
        <ImageButton
          image={content.home.secondImage}
          text={content.home.secondImageDesc}
          name={content.home.secondImageName}
          buttonLabel={content.home.secondImageButtonLabel}
          remainsInPage={true}
        />
        <Space size={"big"} />
        <Space />
        <ManualSlider slides={weDealWithList} />
        <Space size={"big"} />
        <Space size={"big"} />
        <BlueTextCta text={content.home.areYouInterested} label={content.home.areYouInterestedLabel} link={content.home.areYouInterestedLink} />
        <Space size={"big"} />
        <Space />
        <PartnersList
          className={styles.partnersList}
          partners={content.home.partners}
        />
        <Space size={"big"} />
        <Space />
        <WhoWeAre />
        <Space size={"big"} />
        <Space />
        <Footer />
      </div>
    </main>
  );
}