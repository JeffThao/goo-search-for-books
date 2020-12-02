import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand" href="/">
        Goo Search for Books
      </a>
      <a href="/"> Search </a>
      <a href="/saved-books"> Saved </a>
    </nav>
  );
}

export default Nav;
