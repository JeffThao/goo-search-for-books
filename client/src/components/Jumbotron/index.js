import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron">
  <h1 className="display-4">Goo search for Books!</h1>
  <p className="lead">A Google books search engine</p>
  <hr className="my-4" />
  <p>Search and Save your Books!</p>
</div>
  );
}

export default Jumbotron;
