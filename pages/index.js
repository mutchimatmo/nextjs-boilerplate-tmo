import Nav from "../components/Nav";
import Head from "next/head";
import SecBig from "@/components/SecBig";

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
      <div class="wrapper-home">
        <img src="/img/name.png" width="70%" />
        <div class="wrapper-position">
          <SecBig text="Join group/ See result" link="/M0.Home" />
          <SecBig text="Host new group" link="/H1.GroupInf" />
        </div>
      </div>

      <div class="underline-text28">How to play</div>
    </div>
  );
}

export default Home;
