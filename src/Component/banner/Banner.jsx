import React from 'react'
import Style from "./Banner.module.css"





const Banner = () => {
  return (
    <div className={Style.container}>

    <div className={Style.firstScetion}>
     <div className={Style.logo}>
   <img src="images/logo.png" alt="" />
     </div>
    <div className={Style.planflex}>
      <div className={Style.plantwords}>
        <h1>Plan_ET</h1>
        <p>Home of the best greenery</p>
        <h5>Providing you with the healthiest indoor and outdoor<br></br> plans fits for the best scenery.</h5>

        <div className={Style.button}>
          <button className={Style.button1}>Consultion</button>
          <button className={Style.button2}>Shop plant</button>
        </div>
      </div>

      <div className={Style.imagesplant}>
        <img src="images/plant1.png" alt="" />
      </div>
    </div>

<div className={Style.calculationdiv}>

<div className={Style.total1}>
  <h1>200+
</h1>
</div>
<div className={Style.total1}>
  <p>Sold <br></br><span>plant</span></p>
</div>
<div className={Style.total1}>
  <img src="images/line.png" alt="" />
</div>

<div className={Style.total1}>
  <h1>150+</h1>
</div>
<div className={Style.total1}>
<p>Client</p>
  </div>
</div>
<div id='about'>
  
<div className={Style.about}>
  <div className={Style.word}>
  <h1>About Us</h1>
  <p>At Plan_ET is skilled and cerifitied botanist whose aim is to select the best range of plants in its healthiest state free of any form of pest and disease. Our plants are thoroughly inspected by the national union of botanist before sale approval is granted for each plant. </p>
  </div>

  <div className={Style.imagess}>
    <img src="images/img1.png" alt="" />
    <img src="images/img2.png" alt="" />
    <img src="images/img3.png" alt="" />
    <img src="images/img4.png" alt="" />
  </div>
</div>

<div className={Style.aboutplants}>
  <div className={Style.plantdiv}>
  <img src="images/plant2.png" alt="" />
  <img src="images/plant4.png" alt="" />
  <img src="images/plant3.png" alt="" />
  </div>

  <div className={Style.word}>
    <h1>About Our Plants</h1>
    <p>At Plan_ET is skilled and cerifitied botanist whose aim is to select the best range of plants in its healthiest state free of any form of pest and disease. Our plants are thoroughly inspected by the national union of botanist before sale approval is granted for each plant. </p>
  </div>
</div>
  </div>
</div>

  <div className={Style.cardcontainer}>
<h1>client feedbacks</h1>

<div className={Style.carddiv}>

<div className={Style.card}>
  <div>
    <img src="images/person1.png" alt="" srcset="" />
  </div>

  <p>Providing you with the most healthiest indoor and outdoor plans fits for the best scenery.</p>
</div>

<div className={Style.card}>
  <div>
    <img src="images/person2.png" alt="" srcset="" />
  </div>

  <p>Providing you with the most healthiest indoor and outdoor plans fits for the best scenery.</p>
</div>
<div className={Style.card}>
  <div>
    <img src="images/person3.png" alt="" srcset="" />
  </div>

  <p>Providing you with the most healthiest indoor and outdoor plans fits for the best scenery.</p>
</div>
</div>
</div>

<div className={Style.section3}>
<div className={Style.serviceimg}>
  <img src="images/pot1.png" alt="" />
</div>

<div className={Style.servicecontainer}>
  <h1>Services we offer</h1>
  <h5>Plan_ET is professionally trained to offer you the best services to fit every customer  personal preference .</h5>

  <div className={Style.service}>

  <div className={Style.servicecard}>
    <h4>Repotting</h4>
    <p>Changing of soil of old plants and fertilizing</p>
  </div>
  <div className={Style.servicecards}>
    <h4>Sales</h4>
    <p>Sales of fresh unadultrated virgin state plant.</p>
  </div>
  <div className={Style.servicecard}>
    <h4>Customizing</h4>
    <p>We customizing plant and bed based on choice.</p>
  </div>
  </div>
</div>


</div>
<div className={Style.bestplant}>
  <h1>Our best selling plants</h1>

<div className={Style.bestplantdiv}>

<div className={Style.Best}>
<img src="images/pot4.png" alt="" />
<p>Pearl Mahogany</p>
  </div>

  <div className={Style.Best}>
<img src="images/pot2.png" alt="" />
<p>Root Rust</p>
  </div>

  <div className={Style.Best}>
<img src="images/pot3.png" alt="" />
<p>Lavender Bloom</p>
  </div>
</div>

<div className={Style.buttondiv}>
  <button>Shop plant</button>
</div>

<div className={Style.footer}>
  <div className={Style.footerdivv}>
   <div className={Style.footerimg}>
    <img src="images/logo4.png" alt="" />
   <img src="images/logo2.png" alt="" />
   </div>
    <p>Providing you with the healthiest indoor and outdoor plans fits for the best scenery.</p>
  </div>
  <div className={Style.footerdivv} >
    <h5>Quicklinks</h5>
    <nav>
    <ul>
    <li><a href="">Home</a></li>

        <li><a href="#about">About</a></li>

  <li><a href="">Contact Us</a></li>

     <li><a href="">Blog</a></li>
    </ul>
    </nav>
   
  </div>
  <div className={Style.footerdivv}>
    <h5>Contact Us</h5>
    <p>+234 647 2574 123</p>
    <p>Adedejilens@gmail.com</p>
    <p>10 ogunlana street, surulere, Lagos.</p>
  </div>
</div>
</div>
    </div>
    
  )
}

export default Banner