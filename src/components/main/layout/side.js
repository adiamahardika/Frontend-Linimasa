import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readAds } from "../../redux/action/ads";
class Side extends Component {
  componentDidMount() {
    this.props.dispatch(readAds());
  }
  render() {
    return (
      <div className="side">
        <img />
        <img />
        Ini Side
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ads: state.ads.ads,
  };
};
export default withRouter(connect(mapStateToProps)(Side));
