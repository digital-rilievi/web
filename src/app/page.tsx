import Link from "../../node_modules/next/link";
import AppBar from "./components/Navbar/Navbar";
import PorductCard from "./components/PorductCard";

export default function Home() {
  return (
    <main>
        <AppBar />
        <Link href={"/users"}>USERS</Link>
        <PorductCard></PorductCard>
    </main>
  )
}
