import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import ClubMark from "../components/ClubMark/ClubMark";
import Card from "../components/Card/Card";
import Category from "../components/Category/Category";
import LogoBox from "../components/LogoBox/LogoBox";
import Footer from "../components/Footer/Footer";
import randomColor from "randomcolor";

import sports from "../data/sports.json";

export default function Home() {
  const generateCategories = (n: number) => {
    let categories = [];

    if (typeof document !== "undefined") {
      for (let i = 1; i <= n; i++) {
        categories = [
          ...categories,
          <Category
            key={`sport${n}-${i}`}
            color={randomColor()}
            title={sports.sports[i].strSport}
          />,
        ];
      }
    }

    return categories;
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="wrapper d-flex justify-content-between">
                <div className="clubs d-flex">
                  <ClubMark title="Main Club partner" />
                  <ClubMark title="Official shirt sponsor" />
                </div>
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-secondary btn-lg active me-2"
                    role="button"
                    aria-pressed="true"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary btn-lg active"
                    role="button"
                    aria-pressed="true"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Card
                title="Sports"
                text="Price Boost every day on all sports"
                cta={{ label: "Go to Sports", link: "#" }}
              />
            </div>
            <div className="col-md-6">
              <Card
                title="Video"
                text="Offering the best slots and live dealer games"
                cta={{ label: "Go to Casino", link: "#" }}
                videoSrc="https://doggo.s3.amazonaws.com/output.webm"
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h2>Sport categories</h2>
              <div className="overflow-hidden">
                <div className="d-flex">{generateCategories(20)}</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h2>Exciting promotions</h2>
              <div className="row">
                <div className="col-md-6">
                  <Card
                    type="type2"
                    title="NBA Fantasy Guaranteed Prize Pool & Free Bet!"
                    text="Put in your Fantasy Team and receive a free Sport Bet!"
                  />
                </div>
                <div className="col-md-6">
                  <Card
                    type="type2"
                    title="Multi Master"
                    text="mB 3000 Jackpot every weekend with mB 300 guaranteed payout!"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h2>Game providers</h2>
              <div className="d-flex">
                <LogoBox />
                <LogoBox imgSrc="./chase-logo-transparent.png" />
                <LogoBox imgSrc="./coca-cola-logo-png-transparent.png" />
                <LogoBox />
                <LogoBox />
                <LogoBox />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
