import Header from "./Header";

function Hero() {
  return (
    <div className="hero">
      <Header />
      <div className="hero-area">
        <h1 className="hero-text">
          The Most Affortable Place To Stay In The San Franciso Bay Area
        </h1>
        <div className="map">
          {/* <iframe src="" title="jsx-ally/iframe-has-title" frameborder="0"></iframe> */}
          <div className="iframe"></div>
          <div className="search"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
