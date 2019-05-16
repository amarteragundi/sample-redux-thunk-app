import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class User extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return <div />;
  }
}

export default connect(
  null,
  {
    fetchUser
  }
)(User);
