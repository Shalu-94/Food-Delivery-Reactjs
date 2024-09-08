import React from "react";
import './App.css';
import two from "./parcel2.png";
import Header from "./header";
import Foot from "./footer";
import Foods from "./food";

function Aboutus() {
  return (
    <>
      <Header/>
      <Foods/>
      <section id="one">
        <div className="col1">
        <img src={two} alt="Food Delivery" style={{ width: "200%" }} />
        </div>
        <div className="col2">
        <h1>Hello Everyone!</h1>
        <h2>Welcome to <b>Shiro Foody App</b></h2>
         <p id="para1"> We are glad to serve foods to you.!<br></br>
          We deliver delicious foods to all over Tamilnadu.<br></br>
          <b>Our Mission</b><br></br>
We’re committed to transforming the way you experience food. Our mission is to provide a seamless, convenient, and enjoyable food delivery service that brings a variety of high-quality meals directly to you. Whether you're craving a gourmet dinner, a quick snack, or something in between, we're here to make your dining experience extraordinary.
     <br></br><b>What Sets Us Apart</b><br></br>
Extensive Selection:<br></br>Choose from an extensive list of restaurants, ranging from local gems to popular chains.<br></br>
Fast Delivery:<br></br> Enjoy prompt and reliable delivery, ensuring your food arrives fresh and hot.<br></br>
User-Friendly App:<br></br> Our intuitive app makes ordering food a breeze, with features designed to enhance your experience from browsing to delivery tracking.<br></br>
Customer Satisfaction:<br></br> Your satisfaction is our priority. We’re dedicated to providing exceptional service and support to make every meal memorable.   <br></br>
<br></br>Thank you for choosing Shiro Foody App. We’re excited to be part of your mealtime adventures and look forward to delivering more than just food – we’re delivering happiness to your door. 
          </p>
        </div>
        {/* <table>
            <tr>
               <td><div id="d1">
                <img src="/imgs/g5.jpg" alt=""/>
                </div></td> 
               <td><div id="d2">
               <p id="para1"> We are glad to serve foods to you.!<br></br>
          We deliver delicious foods to all over Tamilnadu.<br></br>
          <b>Our Mission</b><br></br>
We’re committed to transforming the way you experience food. Our mission is to provide a seamless, convenient, and enjoyable food delivery service that brings a variety of high-quality meals directly to you. Whether you're craving a gourmet dinner, a quick snack, or something in between, we're here to make your dining experience extraordinary.
     <br></br><b>What Sets Us Apart</b><br></br>
Extensive Selection:<br></br>Choose from an extensive list of restaurants, ranging from local gems to popular chains.<br></br>
Fast Delivery:<br></br> Enjoy prompt and reliable delivery, ensuring your food arrives fresh and hot.<br></br>
User-Friendly App:<br></br> Our intuitive app makes ordering food a breeze, with features designed to enhance your experience from browsing to delivery tracking.<br></br>
Customer Satisfaction:<br></br> Your satisfaction is our priority. We’re dedicated to providing exceptional service and support to make every meal memorable.   <br></br>
<br></br>Thank you for choosing Shiro Foody App. We’re excited to be part of your mealtime adventures and look forward to delivering more than just food – we’re delivering happiness to your door. 
          </p>
                </div></td> 
            </tr>
        </table> */}



      </section>
      <Foot/>
    </>
  );
}

export default Aboutus;
