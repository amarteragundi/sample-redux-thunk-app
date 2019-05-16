import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class User extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }
  render() {
    const user = this.props.users.find(user => user.id === this.props.id);

    if (!user) return null;
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  {
    fetchUser
  }
)(User);
