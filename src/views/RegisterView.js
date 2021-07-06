import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../redux/auth/auth.operations";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state)
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Страница регистрации</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <lable>
            Имя пользователя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </lable>
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
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
