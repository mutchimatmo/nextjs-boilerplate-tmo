import Nav from "../components/Nav";
import Head from "next/head";
import Poster from "@/components/Poster";
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
    </div>
  );
}

export default Home;
