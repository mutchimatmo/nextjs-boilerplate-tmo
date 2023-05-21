import Nav from "../components/Nav";
import Head from "next/head";
import Poster from "@/components/Poster";
import NameTagHG from "@/components/NameTagHG";
import NameTagMG from "@/components/NameTagMG";
import NameTagHR from "@/components/NameTagHR";
import NameTagMR from "@/components/NameTagMR";
// import { imageConfigDefault } from "next/dist/shared/lib/image-config";

function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Poster />
      <NameTagHG text="Tangmo" />
      <NameTagMG text="Tangmo" />
      <NameTagHR text="Rin" />
      <NameTagMR text="Sae" />
    </div>
  );
}

export default Home;
