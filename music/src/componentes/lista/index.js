import React from 'react';
import { connect } from 'react-redux';


import { bindActionCreators } from 'redux';
import * as MusicaAction from '../../store/action/index';

const Lista = ({ musicas, tocarMusica,pararMusica }) => {
  return (
    <section>
        <div className='container'>
            <h1  className="text-light bg-primary">Lista de Música</h1>
            </div>
      <ul className="container ">
        {musicas.map((musica) => (
          <li className="navbar text-dark" key={musica.id}>
            {musica.titulo} <br/> {musica.cantor} | {musica.ano}
            <button className=" btn btn-outline-primary" onClick={() => tocarMusica(musica)}> Play </button>
            <button className="btn btn-outline-danger" onClick={() => pararMusica(musica)}> STOP </button>
          </li>
        ))}
      </ul>
    
    </section>
  );
};

const mapStateToProps = (state) => ({
  musicas: state.musicas.lista,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(MusicaAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Lista);