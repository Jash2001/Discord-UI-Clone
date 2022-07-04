import "./Loginstyle.css";
import qrcode from "../assets/qr_code.png"
import bgimage from "../assets/center_bg_landing_header.svg"

function Login() {
  return (
    <div className="login">
      <div className="left-side">
        <div className="login-header">
          <h3> Welcome Back! </h3>
          <p className="p1"> We're so excited to see you again </p>
        </div>

        <div className="login-details">
          <p className="p1"> EMAIL </p>
          <input type="text" id="email"></input>
          <p className="p1"> PASSWORD </p>
          <input type="password" id="password"></input>
          <p className="p3"> Forget your password </p>     
        </div>

        <div className="login-click">
          <button className="login-btn"> Login </button>
          <div className="register">
            <p className="p2"> Need an account? </p> 
            <p className="p3"> Register </p>
          </div>
        </div>
      </div>

      <div className="right-side">
        <img src={qrcode} alt="qrcode"></img>
        <h2> Log in with QR Code </h2>
        <p align="center" className="p1"> Scan this with the <b> Discode Mobile <br/> App </b>to login instanty.</p> 
      </div>
    </div>
  );
}

export default Login;
