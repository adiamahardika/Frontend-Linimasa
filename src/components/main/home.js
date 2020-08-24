import React, { Component } from "react"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import Layout from "./layout/layout"
class Home extends Component {
    render() {
        return (
            <Layout>
                <div>Ini Home</div>
            </Layout>
        );
    }
}
export default withRouter(connect()(Home))