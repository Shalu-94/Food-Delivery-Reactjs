import React from "react";
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import Header from "./header";

// Initialize MDB UI Kit components (if necessary, but might not be needed)
initMDB({ Input, Ripple });

function Contactform() {
  return (
    <>
    <Header/>
    {/* <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18215.359737093997!2d77.3653954727991!3d8.924597650681008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04274bfbcd9cc9%3A0x6bb5c0b11838c7c3!2sPavoorchatram%20Bus%20station!5e0!3m2!1sen!2sin!4v1722925823782!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div> */}
      <form style={{ width: "26rem" }} id="formid">
        <h2>Get Touch With Us</h2>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example1">Name</label>
          <input type="text" id="form4Example1" className="form-control" placeholder="Enter Name"/>

        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example2">Email address</label>
          <input type="email" id="form4Example2" className="form-control" placeholder="Enter email"/>

        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example3">Message</label>
          <textarea className="form-control" id="form4Example3" rows="4" placeholder="Write your feedback" ></textarea>

        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
          <label className="form-check-label" htmlFor="form4Example4">
            Send me a copy of this message
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </>
  );
}

export default Contactform;
