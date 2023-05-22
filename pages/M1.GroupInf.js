import Head from "next/head";
import Nav from "../components/Nav";
import SecSmall28 from "@/components/SecSmall28";
import PriSmall28 from "@/components/PriSmall28";
import FilledBig from "@/components/FilledBig";

function GroupInformM() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <div className="wrapper">
        <div className="title-inform">
          <div className="text-semi-28">Group information</div>
          <div className="text-semi-68">Borsud Chirstmas</div>
        </div>

        <div className="inform">
          <FilledBig title="Date rage" text="10 - 30 May 2050" />
          <FilledBig title="Budget for a gift" text="800 - 1,000 Baht" />
          <FilledBig title="Detail" text="Sea theme" />
        </div>
      </div>

      <div className="wrapper-button-process">
        <SecSmall28 text="Back" link="/" />
        <PriSmall28 text="Next" link="/M2.YourInf" />
      </div>
    </div>
  );
}

export default GroupInformM;
