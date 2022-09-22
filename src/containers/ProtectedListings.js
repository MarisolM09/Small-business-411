import { connect } from "react-redux";
import ProtectedListings from "../components/ProtectedListings";
import { removeListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    listings: state.listings,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index))
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedListings);