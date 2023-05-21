import Nav from "../components/Nav";
import Head from "next/head";
import Poster from "@/components/Poster";
import PriSmall28 from "@/components/PriSmall28";
import NametagHG from "@/components/NametagHG";
import NametagMG from "@/components/NametagMG";
import NametagHR from "@/components/NametagHR";
import NametagMR from "@/components/NametagMR";
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
      <NametagHG text="Tangmo" />
      <NametagMG text="Tangmo" />
      <NametagHR text="Rin" />
      <NametagMR text="Sae" />

      <div className="wrapper-randompart">
        <div className="wrapper-random">
          <div className="text-reg-20 random">
            Press it to assign buddies to each participant
          </div>
          <PriSmall28 text="Random" />
        </div>

        <div className="wrapper-participant">
          <div className="text-reg-36">25 Participants</div>
          <div className="wrapper-nametag">
            <a>
              <NametagHG text="Tangmo" />
            </a>
            <a>
              <NametagMG text="Tangmo" />
            </a>
            <a>
              <NametagHG text="Tangmo" />
            </a>
            <a>
              <NametagMG text="Tangmo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
