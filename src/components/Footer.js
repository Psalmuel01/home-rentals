import Location from "@mui/icons-material/LocationOn";
import Call from "@mui/icons-material/Call";
import Print from "@mui/icons-material/Print";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import Google from "@mui/icons-material/Google";
import Pinterest from "@mui/icons-material/Pinterest";
import Wifi from "@mui/icons-material/Wifi";

function Footer() {
  return (
    <div className="footer">
      <hr color="#f4511e" />
      <div className="footer-info">
        <div className="footer-logo">
          <h2>Logo</h2>
        </div>
        <div className="footer-details">
          <div className="location-info">
            <Location />{" "}
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div className="contact-info">
            <div>
              <Call /> <p>(123) 456-7890</p>
            </div>
            <div>
              <Print /> <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="socials">
            <p>Social Media</p>
            <div>
              <Facebook /> <Twitter /> <LinkedIn /> <YouTube /> <Instagram />{" "}
              <Google /> <Pinterest /> <Wifi />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
