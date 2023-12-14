import React from "react";
import { Footer, Navbar } from "../components";
import "./Contactpage.css"
const ContactPage = () => {
  
  return (
    <>
    <body>
      <Navbar />
      {/* <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  onClick={fun}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
         <div className="conta">
      <h1 className="text-center my-4">Get in Touch</h1>
<hr/>      <br/><br/>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
          <div className="text-center">
          <i class="fa-solid fa-map-pin fa-flip fa-2xl"></i><br/>
            {/* <i className="bi bi-geo-alt h2 text-primary me-3"></i> */}
            <br/><p>Shridevi Institute of Engineering and Technology (SIET),<br/> Tumakuru, Karnataka<br/>
            Pincode:572106<br/>
            Adress:Sira Road, NH-4, Maralenahalli, Karnataka</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <div className="text-center">
            <i class="fa-solid fa-square-envelope fa-fade fa-2xl"></i><br/>
            <br/><p><h3>Team reactifive</h3><br/><i class="fa-solid fa-id-badge fa-xl"></i>Yashas: 1sv21is037@shrideviengineering.org<br/>
            <br/><i class="fa-solid fa-id-badge fa-xl"></i>Vishnu: 1sv21is036@shrideviengineering.org<br/>
            <br/><i class="fa-solid fa-id-badge fa-xl"></i>Dakshith: 1sv21is004@shrideviengineering.org<br/>
            <br/><i class="fa-solid fa-id-badge fa-xl"></i>Dhishanth: 1sv21is008@shrideviengineering.org<br/>
            <br/><i class="fa-solid fa-id-badge fa-xl"></i>Rahul: 1sv21is025@shrideviengineering.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  

      <Footer className="foot" />
      </body>
    </>
  );
};

export default ContactPage;
