import * as React from "react";
import PizzaPic from "../images/Pizza.png"

export default function PizzaListing() {
  return (
    <div className="place-listing">
      <h2>Home Slice Pizza</h2>
      <h3>1415 S Congress Ave, Austin, TX 78704</h3>
      <h4>11AM - 11PM</h4>
      <p>
        Home Slice Pizza is an independent neighborhood pizza joint serving
        authentic NY-style pizza--by the slice--to nice people like you. We
        offer our homemade, hand tossed, bona fide pies for either dine in or
        carry out.
      </p>
      <img src={PizzaPic} alt="pizza location" width={500} />
    </div>
  );
}
