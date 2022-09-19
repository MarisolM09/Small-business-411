import { connect } from "react-redux";
import ProtectedListings from "../components/ProtectedListings";
import { removeListing } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index))
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedListings);