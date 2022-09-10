import * as React from "react";
import CoffeePic from "../images/Coffee.png"


export default function CoffeeListing() {
  return (
    <div className="place-listing">
      <h2>Jo's Coffee</h2>
      <h3>242 W 2nd St, Austin, TX 78701</h3>
      <h4>7AM - 9PM</h4>
      <p>
        Stumptown coffee, baked goods and sandwiches in colorful digs with
        outdoor area for people-watching.
      </p>
      <img src={CoffeePic} alt="coffee location" width={500} />
    </div>
  );
}
