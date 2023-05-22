import Nav from "../components/Nav";
import Head from "next/head";
import Poster from "@/components/Poster";
import PriSmall28 from "@/components/PriSmall28";
import NametagMG from "@/components/NametagMG";
import NametagMR from "@/components/NametagMR";

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

      <div className="wrapper-dashboard">
        <Poster />
        <div className="line"></div>
        <div className="wrapper-randompart">
          <div className="wrapper-random">
            <div className="text-reg-20 random">
              Press it to assign buddies to each participant
            </div>
            <PriSmall28 text="Random" link="/H4.BuddyInf" />
          </div>

          <div className="wrapper-participant">
            <div className="text-reg-36">25 Participants</div>
            <div className="wrapper-nametag">
              <a>
                <NametagMG text="Tom" />
              </a>
              <a>
                <NametagMR text="Mary" />
              </a>
              <a>
                <NametagMR text="John" />
              </a>
              <a>
                <NametagMG text="Alice" />
              </a>
              <a>
                <NametagMR text="Violet" />
              </a>
              <a>
                <NametagMG text="Iris" />
              </a>
              <a>
                <NametagMG text="Daphne" />
              </a>
              <a>
                <NametagMG text="Felix" />
              </a>

              <a>
                <NametagMR text="Hugo" />
              </a>
              <a>
                <NametagMR text="Phillip" />
              </a>
              <a>
                <NametagMG text="Olivia" />
              </a>
              <a>
                <NametagMR text="Arlo" />
              </a>
              <a>
                <NametagMR text="Luna" />
              </a>
              <a>
                <NametagMG text="Reminisce" />
              </a>
              <a>
                <NametagMR text="Eren" />
              </a>
              <a>
                <NametagMR text="Jack" />
              </a>

              <a>
                <NametagMG text="Penelope" />
              </a>
              <a>
                <NametagMR text="Kai" />
              </a>
              <a>
                <NametagMG text="Emily" />
              </a>
              <a>
                <NametagMG text="Lucas" />
              </a>
              <a>
                <NametagMR text="Harlow" />
              </a>
              <a>
                <NametagMG text="Beau" />
              </a>
              <a>
                <NametagMG text="Garnet" />
              </a>
              <a>
                <NametagMR text="Parker" />
              </a>

              <a>
                <NametagMR text="Sophia" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
