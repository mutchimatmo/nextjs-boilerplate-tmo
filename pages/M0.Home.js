import Nav from "../components/Nav";
import Head from "next/head";
import SecBig from "@/components/SecBig";
import PriBig from "@/components/PriBig";
import FilledBig from "@/components/FilledBig";
// import { imageConfigDefault } from "next/dist/shared/lib/image-config";

function HomeM() {
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
        <div className="position-input">
          <div className="position margin-rlb--20 ">
            <PriBig text="Join group/ See result" link="/M1.GroupInf" />
            <SecBig text="Host new group" link="/H1.GroupInf" />
          </div>
          <FilledBig title="Group code" text="tmo26x" />
        </div>
      </div>

      <div className="underline-text28">How to play</div>
    </div>
  );
}

export default HomeM;
