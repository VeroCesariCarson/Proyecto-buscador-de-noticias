import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoDeNoticias from './components/ListadoDeNoticias';

function App() {

  // definir la categoría y noticias

  const [categoria, guardarCategoria] = useState('');

  const [noticias, guardarNoticias] = useState([]);
  // Una vez que el usuario selecciona una categoría y envía el formulario
// tenemos que hacer las consultas para traernos esa categoría
//importamos useEffect para que cuando detecte un cambio en categoría se vuelva
// a ejecutar el componente

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=6028e0feb6da425aa9efccd8f751ca42`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles); // cuando el usuario busque una categría y le de submit el state de noticias va a estar lleno
    }

    consultarAPI();
  }, [categoria]);




return (
    <Fragment>
      <Header 
      titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario 
        guardarCategoria={guardarCategoria}
        />
        <ListadoDeNoticias
           noticias={noticias}
        />
     
      </div>
    </Fragment>
  );
}

export default App;
