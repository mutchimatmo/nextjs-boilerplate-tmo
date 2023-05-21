import Head from "next/head";
import Nav from "../components/Nav";
import PriBig from "@/components/PriBig";
import SecSmall24 from "@/components/SecSmall24";
import FilledBig from "@/components/FilledBig";

function BuddyInform() {
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
          <div class="text-semi-28 green">Your buddy</div>
          <div class="text-semi-68 green">Borsud Chirstmas</div>
        </div>

        <div class="wrapper-inform">
          <FilledBig title="Name" text="Daphne" />
          <FilledBig
            title="Favorite items / Wishlist"
            text="Strawberry Cheesecake, Chocolate, Goldfish"
          />
          <FilledBig
            title="Detail"
            text="I come to work on Tuesday, Wednesday and Thursday."
          />
        </div>
      </div>

      <div class="wrapper-button-finish">
        <SecSmall24 text="Save picture" />
        <PriBig text="Back to home" link="/" />
      </div>
    </div>
  );
}

export default BuddyInform;
