

export function CarteLocalObjet({key, metier}){
  return (
      <>
        <h2 className="titre"> {metier.nom}</h2>
        <p>Capacité : {metier.capacite} </p>
        <p>Disponibilité : {metier.disponibilite} </p>
        <p>Prix : {metier.prix *5} </p>
        <br/>
      </>
  );
}