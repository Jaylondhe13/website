import { headerInfo } from '../../shared/constants';

const HeaderInfo = () => {
  
  return (
    <div className="container-fluid bg-light p-3">
      <div className="row">
        {/* Left Part - College Logo Image */}
        <div className="col-md-3 col-12 text-center mb-3 mb-md-0 text-right">
          <img
            src="https://th.bing.com/th/id/OIP.LMCbPohyAYsFv8zmT_rwxAHaIS?rs=1&pid=ImgDetMain"
            alt="College Logo"
            className="img-fluid rounded-circle" style={{width:"150px", height:"150px"}}
          />
        </div>

        {/* Middle Part - College Name, Address, Description */}
        <div className="col-md-6 col-12 text-left mb-3 mb-md-0 d-flex-column">
          <b style={{color:"#444343"}}>{headerInfo.subtitle}</b>
          <h2 style={{color:"#053750"}}>{headerInfo.title}</h2>
          <h4>{headerInfo.subjects}</h4>
          <p>{headerInfo.address}<br/>
          <b style={{color:"#024D5E"}}>{headerInfo.certification}</b>
          </p>
        </div>

        {/* Right Part - Call and Email */}
        <div className="col-md-3 col-12 text-center">
          <p>Call: +91-9921638101</p>
          <p>Email: ssgm.bpharm@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfo;

