import Head from "next/head";
import Nav from "../components/Nav";
import FilledBig from "@/components/FilledBig";
import SecSmall28 from "@/components/SecSmall28";
import PriSmall28 from "@/components/PriSmall28";

function YourInformH() {
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
          <div class="text-semi-68">Your information</div>
        </div>

        <div class="wrapper-inform">
          <FilledBig title="Your name" text="Sophia" />
          <FilledBig
            title="Favorite items / Wishlist"
            text="Green tea, Mocha, Blue stationary"
          />
          <div class="wrapper-ask-detail">
            <div class="text-reg-16">Any more your details ?</div>
            <img src="/img/switchOff.svg" width="20%" />
          </div>
          <div class="wrapper-ask-color">
            <div class="text-reg-28">Select color</div>
            <div class="wrapper-color">
              <img src="/img/selectColor1.svg" width="40%" />
              <img src="/img/selectColor2.svg" width="40%" />
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper-button-process">
        <SecSmall28 text="Back" link="/H1.GroupInf" />
        <PriSmall28 text="Next" link="/H3.Dashboard" />
      </div>
    </div>
  );
}

export default YourInformH;
