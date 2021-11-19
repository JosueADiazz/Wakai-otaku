import React from "react";
import { NavLink } from "react-router-dom";
import Kaneki from "../../Assets/images/Kaneki.png";
import IconButton from "@mui/material/IconButton";
import HelpIcon from '@mui/icons-material/Help';

export const Header = () => {
  return (
    <header id="header">
      <div id="logo">
        <img src={Kaneki} className="app-logo" alt="Logotipo" />
      </div>

      <nav id="menu">
        <ul>
          <li>
            <NavLink to="/Inicio" activeClassName="activeLink">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Animes" activeClassName="activeLink">
              Animes
            </NavLink>
          </li>
          <li>
            <NavLink to="/Peliculas" activeClassName="activeLink">
              Peliculas
            </NavLink>
          </li>
          <li>
            <NavLink to="/Estrenos" activeClassName="activeLink">
              Estrenos
            </NavLink>
          </li>
          <li>
            <NavLink to="/Peticiones" activeClassName="activeLink">
              Peticiones
            </NavLink>
          </li>
          <li>
            <NavLink to="/Ayuda" activeClassName="activeLink">
              <IconButton   color="error">
                <HelpIcon />
              </IconButton>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
