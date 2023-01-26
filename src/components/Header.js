import logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <div className="menu">
        <a href=" ">Home</a>
        <a href=" ">Landlord</a>
        <a href=" ">Tenants</a>
        <a href=" ">Contact Us</a>
      </div>
    </header>
  );
}

export default Header;
