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
      <ImageText image="/assets/projects/project-home.png"
        text={
          `La Digital Rilievi s.r.l. è fondata nel 2001, con l’obiettivo di proporsi sul mercato nazionale e internazionale quale consulente tecnico scientifico per la realizzazione di servizi di rilevamento topografico generale, aerofotogrammetrie, ortofotocarte digitali, rilievo architettonico, monumentale, ricerca e mappatura di sottoservizi aerei e interrati, cartografia numerica e Data Base Topografici, monitoraggi di strutture, frane e gallerie, assistenza topografica ai cantieri, ecc.`
        }
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
      <p>AIAIASDDASIAIAIAAIAIA</p>
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