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
      <div className="wrapper-home">
        <img src="/img/name.png" width="70%" />
        <div className="position">
          <SecBig text="Join group/ See result" link="/M0.Home" />
          <SecBig text="Host new group" link="/H1.GroupInf" />
        </div>
      </div>

      <div className="underline-text28">How to play</div>
    </div>
  );
}

export default Home;
