import React from "react";
import four from "./homefood2.jpeg";
import Header from "./header";
function Homes(){
    return(
        <>
        <Header/>
        <img src={four} alt="Homes" style={{width:"100%"}}/>
      <p>  <b>Appetizers & Soups</b>
      <ul>
Grandma’s Chicken Noodle Soup
Hearty Beef & Vegetable Stew
Fresh Garden Salad
Savory Stuffed Mushrooms</ul>
<b>Main Courses</b><ul>
Classic Roast Chicken Dinner
Traditional Meatloaf with Glazed Ketchup
Garden Vegetable Lasagna
Slow-Cooked Pot Roast with Carrots & Potatoes
Comforting Chicken Pot Pie</ul>
<b>Sides</b><ul>
Creamy Mac & Cheese
Herb-Roasted Brussels Sprouts
Buttery Corn on the Cob
Garlic Butter Bread</ul>
<b>Desserts</b><ul>
Old-Fashioned Apple Pie
Decadent Chocolate Brownies
Zesty Lemon Drizzle Cake
Warm Bread Pudding with Caramel Sauce</ul>
<b>Beverages</b><ul>
Homemade Iced Tea
Freshly Brewed Coffee
Refreshing House-Made Lemonade</ul>
</p>
        </>
    )
}
export default Homes;
