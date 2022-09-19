const state = {
  user: null,
  loggedIn: null,
    
    listings: [
      {
        id: 1,
        name: "Home Slice Pizza",
        address: "1415 S Congress Ave, Austin, TX 78704",
        hours: {
          open: "11AM",
          close: "11PM"
        },
        description: "Home Slice Pizza is an independent neighborhood pizza joint serving authentic NY-style- pizza--by the pie or by the slice--to nice people like you. We offer our homemade, hand tossed, bona fide pies for either dine in or carry out."
      },
      {
        id: 2,
        name: "Jo's Coffee",
        address: "242 W 2nd St, Austin, TX 78701",
        hours: {
          open: "7AM",
          close: "9PM"
        },
        description: "Stumptown coffee, baked goods and sandwiches in colorful digs withoutdoor area for people-watching."
      }
    ]
  }

  export default state;