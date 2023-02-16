import cover from "../images/cover.jpg";
import testifier from "../images/testifier.png";
import Play from "@mui/icons-material/PlayCircle";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-details">
        <div className="testimonial-info">
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <div className="testifier">
            <img src={testifier} style={{ width: "30%" }} alt="" />
            <div className="testifer-info">
              <h6>Harry Wilson</h6>
              <p style={{ fontSize: "xx-small" }}>Property Owner</p>
            </div>
          </div>
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div className="testimonial-img">
        <img
          src={cover}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
        <Play className="play" background="red" />
      </div>
    </div>
  );
}

export default Testimonial;
