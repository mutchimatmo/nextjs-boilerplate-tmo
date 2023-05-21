import Nav from "../components/nav";
import Head from "next/head";
import PosterPart from "@/components/PosterPart";

function Home() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <PosterPart />
    </div>
  );
}

export default Home;
