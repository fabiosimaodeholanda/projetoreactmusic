import React from 'react';
import { connect } from 'react-redux';


const Musica = ({musica}) => {
  return (
    <div className="container">
      <h1 className="text-light bg-primary">Tocando agora</h1>
      <div className="cardPrincipal">
        {musica.titulo == null?<marquee direction='right' className="text-warning bg-dark">Sem musica tocando agora...</marquee>:''}
        <div >
            <img src={musica.img}/>
        </div>
        <br/>
        <div className="container" >
          <h2 className="text-primary text-center" id='title'>{musica.titulo}</h2>
          <span className="text-dark " id='subtitle'>{musica.cantor != null ? 'Cantor:':''} {musica.cantor}  {musica.ano != null ? '| Ano:':''}  {musica.ano}</span> 
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
    musica: state.musicas.musica
}))(Musica);