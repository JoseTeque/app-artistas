import React, {Fragment, useState, useEffect}from 'react';
import Formulario from './componentes/Formulario';
import Cancion from './componentes/Cancion';
import Info from './componentes/Info'
import axios from 'axios';


function App() {

  // DEFINIR EL STATE
  const [busquedaLetra, setbusquedaLetra] = useState({});
  const [Letra, setLetra] = useState('');
  const [info, setInformacion] = useState({});

  useEffect(() => {

    const consultarApi = async() => {

      if(Object.keys(busquedaLetra).length === 0) return;

      const {artista, cancion} = busquedaLetra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ])

      setLetra(letra.data.lyrics);
      setInformacion(informacion.data.artists[0]);

      setbusquedaLetra({});
    }

    consultarApi();
    
  }, [busquedaLetra,setLetra, setInformacion, setbusquedaLetra])

  return (
   <Fragment>
     <Formulario
       setbusquedaLetra = {setbusquedaLetra}
     />

     <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
                info={info}
            />
          </div>
          <div className="col-md-6">
              <Cancion 
                letra = {Letra}
              />
          </div>
        </div>
     </div>
   </Fragment>
  );
}

export default App;
