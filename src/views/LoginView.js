import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/auth/auth.operations";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Страница логина</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <lable>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </lable>
          <lable>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </lable>
          <button type="submit">
            {this.props.location.pathname === "/registration"
              ? "register"
              : "login"}
          </button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginView);

