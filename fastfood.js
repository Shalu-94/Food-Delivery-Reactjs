import React from "react";
import three from "./fastfd1.png";
import Header from "./header";
function Fast(){
    return(
        <>
        <Header/>
       <img src={three} alt="Fast" style={{ width: "100%" }} />
      <p> <b>Our Menu Highlights</b><br></br>
<b>Burgers:</b> Dive into our juicy, flame-grilled burgers made from 100% fresh beef. From classic cheeseburgers to our signature creations, there’s something to satisfy every taste.
<br></br>
<b>Fries & Sides:</b> Our golden, crispy fries are the perfect companion to any meal. Don’t forget to try our loaded nachos, onion rings, or chicken nuggets.
<br></br>
<b>Chicken:</b> Enjoy tender, juicy chicken that's fried to perfection. Whether you prefer wings, tenders, or a full sandwich, we’ve got the flavor you’re craving.
<br></br>
<b>Beverages:</b> Quench your thirst with our wide selection of refreshing sodas, milkshakes, and iced teas. Mix and match to find your perfect drink.
<br></br>
<b>Desserts:</b> Treat yourself to a sweet finish with our indulgent desserts. From creamy milkshakes to decadent sundaes, we have just the thing to satisfy your sweet tooth.
</p> 
        </>
    )
}
export default Fast;