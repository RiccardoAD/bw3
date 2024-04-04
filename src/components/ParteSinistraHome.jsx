import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa lo stile di Bootstrap

function ParteSinistraHome() {
  return (
    <div className="container position-relative">
      {/* Prima card */}
      <div className="card bg-white border border-secondary" >
        <img
          src="https://cdn.create.vista.com/downloads/b2be2cb4-8abc-452e-b2a4-df3189cc2756_640.jpeg"
          className="card-img-top"
          alt="Immagine di copertina"
        />

        {/* Altri contenuti della card */}
        <div className="card-body">
          <h5 className="card-title text-center">Nome e Cognome</h5>
          <p className="card-text text-center">Ruolo Professionale</p>
          <hr className="bg-light" /> {/* Riga grigia */}
          {/* Scritta "Collegamenti" e numero "500" */}
          <div className="d-flex justify-content-between">
            <p className="text-left text-muted mb-0">Collegamenti</p>
            <p className="text-right text-primary mb-0">500</p>
          </div>
          {/* Scritta "Espandi la tua rete" */}
          <p className="text-left font-weight-bold mt-0">Espandi la tua rete</p>
          <hr className="bg-light" /> {/* Riga grigia */}
          {/* Accedi a strumenti e info */}
          <p className="text-left text-muted mb-0">Accedi a strumenti e informazioni in esclusiva</p>
          <p className="text-left font-weight-bold mt-0">Riattiva Premium con il 50 % di sconto </p>
          <hr className="bg-light" /> {/* Riga grigia */}
          <p className="text-left font-weight-bold mt-0">I miei elementi</p>
        </div>
      </div>

      {/* Seconda card con contenuti diversi */}
      <div className="card bg-white border border-secondary mt-4 d-none d-lg-block " >
        {/* Contenuti della seconda card */}
        <div className="card-body ">
          <p className="text-left font-weight-bold mt-0">Recenti</p>
          <p className="text-left text-muted mb-0">Start up & PMI</p>
          <p className="text-left text-muted mb-0">Reti di imprese</p>
          <p className="text-left text-muted mb-0">digichamps</p>
          <p className="text-left text-muted mb-0">Digital marketing</p>
          <p className="text-left -bold mt-4 text-primary">Gruppi</p>
          <p className="text-left text-muted mb-0">Start up & PMI</p>
          <p className="text-left text-muted mb-0">Reti di imprese</p>
          <p className="text-left text-muted mb-0">digichamps</p>
          <p className="text-left text-muted mb-0">Digital marketing</p>
          <p className="text-left -bold mt-4 text-primary">Eventi</p>
          <p className="text-left -bold mt-0 text-primary">Hastag seguiti</p>
          <p className="text-left text-muted mb-0">marketing</p>
          <p className="text-left text-muted mb-0">sviluppo web</p>
          <p className="text-left text-muted mb-0">digital marketing</p>
          <hr className="bg-light" /> {/* Riga grigia */}
          <p className="card-text text-center text-muted">Scopri di più</p>
        </div>
      </div>
    </div>
  );
}

export default ParteSinistraHome;
