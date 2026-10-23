import {useState} from "react";

export function CarteLocal({nom, capacite, disponibilite, prix}){

    const classe = disponibilite ? "libre" : "occupe";
    const [duree, setDuree]=useState(1);
  return (
      <>
        <h2 className="titre"> {nom}</h2>
        <p>Capacité : {capacite} </p>
        <p className={classe}>Disponibilité : {disponibilite ? "Disponible" : "Indisponible"} </p>
        <p>Prix : {prix} </p>
        <p>Prix total : {prix*duree} </p>
        <button onClick={()=>alert("Tarif : "+prix)}>Voir le tarif</button>
        <button onClick={()=>setDuree(d=>d+1)}>+</button>
        <button onClick={()=>setDuree(d=>d-1)}>-</button>
        <br/>
      </>



  );
}