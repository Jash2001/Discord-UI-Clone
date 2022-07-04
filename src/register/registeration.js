import "./registerstyle.css";

function Registeration() {
  return (
    <div className="sign-up-form">
        <div className="sign-up-details">
            <h3 align='center'> Create an account </h3>
            <p className="p1"> EMAIL </p>
            <input type="text" id="email"></input>
            <p className="p1"> USERNAME </p>
            <input type="text" id="username"></input>
            <p className="p1"> PASSWORD </p>
            <input type="password" id="password"></input>
            <br/> <br/> 
            <button className="continue-btn"> Continue </button>
            <p className="p2"> Already have an account? </p>
      </div>
    </div>
  );
}

export default Registeration;
