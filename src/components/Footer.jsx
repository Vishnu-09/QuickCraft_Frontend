import React from "react";


const Footer = () => {
  return (
    <>
      {/* <footer className="mb-0 text-center" position="sticky">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made by {" "}
              <a  href="#" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Reactifive</a>
            </p>
            <a className="text-dark fs-4" href="#" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github fa-bounce"></i>
            </a>
          </div>
        </div>
      </footer> */}
      
      <div className="container-fluid  text-black p-3" >
      <div className="row">
        <div className="col-md-4 d-flex align-items-center" >
          <img src="favicon.jpg" alt="Logo" className="img-fluid" height="50px" width="50px"/><span><h4>QuickCraft</h4></span>
        </div>
        <div className="col-md-4 text-center">
        <p className="mb-3 mb-md-0">Made by {" "}
              <a  href="#" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Reactifive</a>
            </p>
        </div>
        <div className="col-md-4 text-end">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-dark">
          <i class="fa-brands fa-github fa-bounce fa-2xl"></i>
          </a>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default Footer;
