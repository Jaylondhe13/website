import { headerInfo } from '../../shared/constants';
import logo from '../../assets/img/logo.jpg'

const HeaderInfo = () => {
  
  return (
    <div className="container-fluid bg-light p-3">
      <div className="row">
        {/* Left Part - College Logo Image */}
        <div className="col-md-3 col-12 text-center mb-3 mb-md-0 text-right">
          <img
            src={logo}
            alt="College Logo"
            className="img-fluid" style={{width:"150px", height:"150px",borderRadius:"50px"}}
          />
        </div>

        {/* Middle Part - College Name, Address, Description */}
        <div className="col-md-7 col-12 text-left mb-3 mb-md-0 d-flex-column lh-1">
          <b style={{color:"#444343"}}>{headerInfo.subtitle}</b>
          <h2 style={{color:"#053750", fontWeight:'bolder'}}>{headerInfo.title}</h2>
          <h4>{headerInfo.subjects}</h4>
          <p>{headerInfo.address}<br/>
          <b style={{color:"#024D5E"}}>{headerInfo.certification}</b>
          </p>
        </div>

        {/* Right Part - Call and Email */}
        <div className="col-md-2 col-12 text-center">
          <p>Call: +91-9921638101</p>
          <p>Email: ssgm.bpharm@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfo;

