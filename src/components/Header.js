import logo from "../images/logo.svg";

function Header() {
  return (
    <header>
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="menu">
          <a href=" ">Home</a>
          <a href=" ">Landlord</a>
          <a href=" ">Tenants</a>
          <a href=" ">Contact Us</a>
        </div>
      </div>
      <hr />
    </header>
  );
}

export default Header;
