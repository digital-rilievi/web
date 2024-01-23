import AppBar from "./components/Navbar/Navbar"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import PartnersList from "./components/PartnersList/PartnersList"
import styles from "./page.module.css"
import content from 'content.json'
import ImageText from "./components/ImageText/ImageText"

export default function Home() {
  return (
    <main>
      <AppBar />
      <VideoPlayer />
      <h1 className={styles.title}>
        {content.home.title}
      </h1>
        <ImageText image="/assets/projects/project-home.png"
          text={
            `La Digital Rilievi s.r.l. è fondata nel 2001, con l’obiettivo di proporsi sul mercato nazionale e internazionale quale consulente tecnico scientifico per la realizzazione di servizi di rilevamento topografico generale, aerofotogrammetrie, ortofotocarte digitali, rilievo architettonico, monumentale, ricerca e mappatura di sottoservizi aerei e interrati, cartografia numerica e Data Base Topografici, monitoraggi di strutture, frane e gallerie, assistenza topografica ai cantieri, ecc.`
          }
          invertOrder
          blueCircle
        />
      <PartnersList
        className={styles.partnersList}
        partners={content.home.partners}
      />
    </main>
  );
}