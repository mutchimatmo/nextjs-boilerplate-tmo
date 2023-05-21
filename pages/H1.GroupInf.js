import Head from "next/head";
import Nav from "../components/Nav";
import FilledBig from "@/components/FilledBig";
import FilledSmall from "@/components/FilledSmall";
import SecSmall28 from "@/components/SecSmall28";
import PriSmall28 from "@/components/PriSmall28";

function GroupInformH() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <div class="wrapper">
        <div class="wrapper-title-inform">
          <div class="text-semi-68">Group information</div>
        </div>

        <div class="wrapper-inform">
          <FilledBig title="Group name" text="Borsud Chirstmas" />

          <div class="wrapper-inform-small">
            <FilledSmall
              title="Start date"
              text="10 May 2050"
              icon="/img/calendar.svg"
            />
            <FilledSmall
              title="End date"
              text="30 May 2050"
              icon="/img/calendar.svg"
            />
          </div>
          <div class="wrapper-inform-small">
            <FilledSmall title="Budget for a gift" text="800 - 1,000" />
            <FilledSmall title="Currency" text="THB" icon="/img/arrow.svg" />
          </div>

          <div class="wrapper-detail">
            <div class="wrapper-ask-detail bottom-20">
              <div class="text-reg-16">Any more your details ?</div>
              <img src="/img/switchOn.svg" width="20%" />
            </div>
            <FilledBig title="Detail" text="Sea theme" />
          </div>
        </div>
      </div>

      <div class="wrapper-button-process">
        <SecSmall28 text="Back" link="/" />
        <PriSmall28 text="Next" link="/H2.YourInf" />
      </div>
    </div>
  );
}

export default GroupInformH;
