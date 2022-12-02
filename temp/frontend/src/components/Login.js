import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAuthorization(this.state.password, this.state.email);
  }
  render() {
    return (
      <section className="login">
        <form
          name="register"
          className="field__form"
          onSubmit={this.handleSubmit}
        >
          <p className="field__welcome">Вход</p>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
            name="email"
            placeholder="Email"
            className="field__input"
            required
          />
          <input
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
            type="password"
            placeholder="Пароль"
            name="password"
            className="field__input"
            required
          />
          <button
            name="submit"
            className="field__submit"
            type="submit"
            aria-label="Войти"
          >
            Войти
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
