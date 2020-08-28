import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../helpers/routes.json";
import { readAllNewsCategory } from "../../redux/action/news_category";
import "../../css/main/layout/layout.css";
import "../../css/main/layout/navbar.css";
class Navbar extends Component {
  data = {
    news_category_id: {},
  };
  componentDidMount() {
    this.props.dispatch(readAllNewsCategory());
  }
  render() {
    const { news_category } = this.props;
    if (news_category.length > 1) {
      news_category &&
        news_category.map((item) => {
          return (this.data.news_category_id[item.news_category_name] =
            item.id);
        });
    }
    return (
      <nav className="navbar navbar-expand-lg container-main-navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="main-navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: "/",
                  data: "",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: routes.news,
                  data: "",
                }}
              >
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: routes.hype,
                  data: this.data.news_category_id.Hype,
                }}
              >
                Hype
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: routes.peristiwa,
                  data: this.data.news_category_id.Peristiwa,
                }}
              >
                Peristiwa
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Finance
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link
                  className="navbar dropdown-item"
                  to={{
                    pathname: routes.business,
                    data: this.data.news_category_id.Business,
                  }}
                >
                  Business
                </Link>
                <Link
                  className="navbar dropdown-item"
                  to={{
                    pathname: routes.economy,
                    data: this.data.news_category_id.Economy,
                  }}
                >
                  Economy
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: routes.humaniora,
                  data: this.data.news_category_id.Humaniora,
                }}
              >
                Humaniora
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: routes.ragam,
                  data: this.data.news_category_id.Ragam,
                }}
              >
                Ragam
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: routes.techno,
                  data: this.data.news_category_id.Techno,
                }}
              >
                Techno
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: routes.entertainment,
                  data: this.data.news_category_id.Entertainment,
                }}
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Lifestyle
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link
                  className="navbar dropdown-item"
                  to={{
                    pathname: routes.food,
                    data: this.data.news_category_id.Food,
                  }}
                >
                  Food
                </Link>
                <Link
                  className="navbar dropdown-item"
                  to={{
                    pathname: routes.sport,
                    data: this.data.news_category_id.Sport,
                  }}
                >
                  Sport
                </Link>
                <Link
                  className="navbar dropdown-item"
                  to={{
                    pathname: routes.business,
                    data: this.data.news_category_id.Health,
                  }}
                >
                  Health
                </Link>
                <Link
                  className="navbar dropdown-item"
                  to={{
                    pathname: routes.outgoing,
                    data: this.data.news_category_id.Outgoing,
                  }}
                >
                  Outgoing
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news_category: state.news_category.news_category,
  };
};
export default withRouter(connect(mapStateToProps)(Navbar));
