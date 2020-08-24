import React, { Component } from "react";
import { withRouter } from "react-router"
import {connect } from "react-redux"
import { readAds } from "../../redux/action/ads";
class Top extends Component {
  componentDidMount() {
    this.props.dispatch(readAds());
  }
  render() {
    const { ads, loading } = this.props;
    return (
      <>
        <div><img src={ads.ads_image}/></div>
      </>
    );
  }
}
export default withRouter(connect()(Top));
