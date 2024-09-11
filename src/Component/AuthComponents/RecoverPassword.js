import RecoverImg from "../../Assets/Recover Screen VECTOR 1.png";
const RecoverPassword = () => {
  return (
    <section className="container recover-section">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h1 className="recover-intro">Recover Password</h1>
          <p className="recover-text">We are glad to have you here! Please fill in your information</p>

          <form className="recover-form">
            <input
              type="email"
              className="form-control fw-bold"
              id="email"
              placeholder="Enter email"
            />
          </form>
           <div className="recover-link">
           <a href="/recover-success" className="text-decoration-none" >RECOVER NOW</a>
           </div>
        
        </div>
        <div className="col-4"></div>
      </div>
      <div className="recover-image">
        <img src={RecoverImg} alt=""></img>
      </div>
    </section>
  );
};
export default RecoverPassword;
