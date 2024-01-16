import Link from "../../node_modules/next/link";
import AppBar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import PartnersList from "./components/PartnersList/PartnersList";

export default function Home() {
  return (
    <main>
      <AppBar />
      {/* <VideoPlayer /> */}
      <PartnersList partners={[
        "assets/testimonials/img/ceccarelli.png",
        "assets/testimonials/img/ferri.png",
        "assets/testimonials/img/massarutto.jpg",
        "assets/testimonials/img/paganelli.png",
        "assets/testimonials/img/viero.png",
        "assets/testimonials/img/ceccarelli.png",
        "assets/testimonials/img/ferri.png",
        "assets/testimonials/img/massarutto.jpg",
        "assets/testimonials/img/paganelli.png",
        "assets/testimonials/img/viero.png",
        "assets/testimonials/img/ceccarelli.png",
        "assets/testimonials/img/ferri.png",
        "assets/testimonials/img/massarutto.jpg",
        "assets/testimonials/img/paganelli.png",
        "assets/testimonials/img/viero.png"
      ]} />
    </main>
  )
}
