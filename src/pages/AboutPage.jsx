import React from 'react'
import { Footer, Navbar } from "../components";
import "./AboutPage.css"
const AboutPage = () => {
  return (
    <><body>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        QuikCraft is your go-to destination for effortless shopping, offering a curated selection of fashion, shoes, shades, and 
        electronics. Our philosophy revolves around simplicity and speed, ensuring that you can discover and purchase the latest 
        trends and cutting-edge products with ease. At QuikCraft, we prioritize your time and convenience, providing a seamless 
        online experience. Explore our collection and embrace a lifestyle that seamlessly blends style and innovation. Welcome to 
        QuikCraft, where simplicity meets sophistication, and your shopping journey is as swift as your lifestyle demands.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Men's Shirts</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4f8ce6134238773.61d222e7e75b2.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Hoodie's</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://www.solitaireofficial.com/cdn/shop/articles/photo_2023-08-17_19-45-26.jpg?v=1692272743" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Watches</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://idbeingcult.com/cdn/shop/files/id-mobile-banner_300x.jpg?v=1688465682" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Shoes</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="foot"/></body>
    </>
  )
}

export default AboutPage