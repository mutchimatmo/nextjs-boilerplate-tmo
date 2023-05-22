import Nav from "../components/Nav";
import Head from "next/head";
import Poster from "@/components/Poster";
import PriSmall28 from "@/components/PriSmall28";
import NametagHG from "@/components/NametagHG";
import NametagHR from "@/components/NametagHR";

function DashboardH() {
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
                <NametagHG text="Tom" />
              </a>
              <a>
                <NametagHR text="Mary" />
              </a>
              <a>
                <NametagHR text="John" />
              </a>
              <a>
                <NametagHG text="Alice" />
              </a>
              <a>
                <NametagHR text="Violet" />
              </a>
              <a>
                <NametagHG text="Iris" />
              </a>
              <a>
                <NametagHG text="Daphne" />
              </a>
              <a>
                <NametagHG text="Felix" />
              </a>

              <a>
                <NametagHR text="Hugo" />
              </a>
              <a>
                <NametagHR text="Phillip" />
              </a>
              <a>
                <NametagHG text="Olivia" />
              </a>
              <a>
                <NametagHR text="Arlo" />
              </a>
              <a>
                <NametagHR text="Luna" />
              </a>
              <a>
                <NametagHG text="Reminis.." />
              </a>
              <a>
                <NametagHR text="Eren" />
              </a>
              <a>
                <NametagHR text="Jack" />
              </a>

              <a>
                <NametagHG text="Penelope" />
              </a>
              <a>
                <NametagHR text="Kai" />
              </a>
              <a>
                <NametagHG text="Emily" />
              </a>
              <a>
                <NametagHG text="Lucas" />
              </a>
              <a>
                <NametagHR text="Harlow" />
              </a>
              <a>
                <NametagHG text="Beau" />
              </a>
              <a>
                <NametagHG text="Garnet" />
              </a>
              <a>
                <NametagHR text="Parker" />
              </a>

              <a>
                <NametagHR text="Sophia" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardH;
