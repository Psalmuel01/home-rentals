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
          <div className="iframe">
            <iframe
              title="iframe"
              width="408"
              height="340"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=408&amp;height=340&amp;hl=en&amp;q=Ikeja,%20Lagos+(Home%20Rentals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure distance on map
              </a>
            </iframe>
          </div>
          <div className="map-search">
            <div>
              <p>Neighbourhood</p>
            </div>
            <div>
              <p>All type</p>
            </div>
            <div>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
