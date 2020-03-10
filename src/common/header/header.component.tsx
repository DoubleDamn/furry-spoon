import * as React from "react";
import "./header.scss";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { CITIES_NAMES } from "../../typing/enam";

type P = {
  onClick(cityName: string): void;
};

export const Header: React.FC<P> = p => {
  const getData = (e: any) => {
    const name = e.currentTarget.id as keyof typeof CITIES_NAMES;
    p.onClick(`${CITIES_NAMES[name]}`);
  };

  return (
    <header className="header_container">
      <Button color="secondary" id="spb" onClick={getData}>
        <NavLink
          to={`/${CITIES_NAMES.spb}`}
          className="header_link"
          activeClassName="header_link--active"
          data-marker="menu-item"
        >
          Saint-Petersburg
        </NavLink>
      </Button>
      <Button color="secondary" id="rostov" onClick={getData}>
        <NavLink
          to={`/${CITIES_NAMES.rostov}`}
          className="header_link"
          activeClassName="header_link--active"
          data-marker="menu-item"
        >
          Rostov-On-Don
        </NavLink>
      </Button>
      <Button color="secondary" id="barcelona" onClick={getData}>
        <NavLink
          to={`/${CITIES_NAMES.barcelona}`}
          className="header_link"
          activeClassName="header_link--active"
          data-marker="menu-item"
        >
          Barcelona
        </NavLink>
      </Button>
    </header>
  );
};
