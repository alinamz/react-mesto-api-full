import logo from "../images/Vector.svg";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Header({ email, handleExit }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="header__info">
              {email}
              <button
                onClick={handleExit}
                className="header__link header__link_exit"
              >
                Выйти
              </button>
            </div>
          }
        />

        <Route
          path="/sign-up"
          element={
            <Link className="header__link header__link_entry" to="/sign-in">
              Войти
            </Link>
          }
        />

        <Route
          path="/sign-in"
          element={
            <Link className="header__link header__link_entry" to="/sign-up">
              Регистрация
            </Link>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
