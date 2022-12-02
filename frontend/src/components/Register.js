import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
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
    this.props.handleRegist(this.state.password, this.state.email);
  }
  render() {
    return (
      <section className="register">
        <form
          name="register"
          className="field__form"
          onSubmit={this.handleSubmit}
        >
          <p className="field__welcome">Регистрация</p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="field__input"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            id="password"
            type="password"
            placeholder="Пароль"
            name="password"
            className="field__input"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button
            name="submit"
            className="field__submit"
            type="submit"
            aria-label="Зарегестрироваться"
          >
            Зарегистрироваться
          </button>
          <p className="field__text">
            Уже зарегистрированы?
            <Link to="/sign-in" className="field__link">
              {" "}
              Войти{" "}
            </Link>
          </p>
        </form>
      </section>
    );
  }
}

export default Register;
