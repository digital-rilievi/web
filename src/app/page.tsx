import AppBar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import PartnersList from "./components/PartnersList/PartnersList";

export default function Home() {
  return (
    <main>
      <AppBar />
      {/* <VideoPlayer /> */}
      <PartnersList partners={[
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
