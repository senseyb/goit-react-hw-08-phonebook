import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div>
    <NavLink to="/" exact>
      Главная страница
    </NavLink>
    <NavLink to="/contacts" exact>
      Страница контактов
    </NavLink>
  </div>
);

export default Navigation;
