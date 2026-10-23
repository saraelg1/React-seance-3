import React from "react";
import {local} from "./local.js"
export default function Test() {
  return (
      <>
        <h2 className="titre"> {local.nom}</h2>
        <p>Capacité : {local.capacite} </p>
        <p>
          {local.disponible ? "Disponible" : "Indisponible"}
        </p>
        <p>
          {!local.disponible ? "Ceci est false" : "Ceci est true"}
        </p>

        <br/>
      </>
  );
}