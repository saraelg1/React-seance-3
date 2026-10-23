import React from "react";
import {local, locaux} from "./local.js"
import {CarteLocal} from "./CarteLocal.jsx"

import {CarteLocalObjet} from "./CarteLocalObjet.jsx"

locaux.map(local => local.id==3 ? console.log(local.capacite) : null);


export default function App() {
  return (
      <>
        <CarteLocal nom="Salle XYZ" capacite={50} disponibilite={true} prix={1000}/>

        <CarteLocal nom="Salle ABC" capacite={40} disponibilite={false} prix={2000} />

        <CarteLocal nom="Salle DEF" capacite={30} disponibilite={true} prix={3000} />

        <CarteLocalObjet metier={local} />

        {locaux.map(toto => (<CarteLocalObjet key={toto.id} metier={toto} />) )}

        <button onClick={() => alert('Local selectionné')} >Test</button>

      </>
  );
}
