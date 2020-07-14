import React, {useState} from 'react';

const Formulario = ({setbusquedaLetra}) => {
    
    const [busqueda, setbusqueda] = useState({
        artista:'',
        cancion:''
    });

    const [error, seterror] = useState(false)

    const {artista, cancion} = busqueda;

    const handleChange = e => {
        setbusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
       if(artista.trim() === '' || cancion.trim() === ''){

        setTimeout(() => {
            seterror(true);
            setTimeout(() => {
                seterror(false);
            },4000)
        },50)
           
            return;
       }

       setbusquedaLetra(busqueda)
    }
    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form onSubmit= {handleSubmit}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                         <fieldset>
                             <legend className="text-center">Buscador Letras canciones</legend>
                             {error ? <p className="alert alert-danger">Todos los campos son obligatorios</p>: null}
                             <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista"
                                            onChange={handleChange}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de Cancion"
                                            onChange={handleChange}
                                            value={cancion}
                                        />
                                    </div>
                                </div>

                             </div>
                             <button type="submit" className="btn btn-primary float-right">
                                 Buscar
                             </button>
                         </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;