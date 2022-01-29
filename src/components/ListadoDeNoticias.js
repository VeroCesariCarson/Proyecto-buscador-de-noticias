import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListadoDeNoticias = ({noticias}) => (
    

        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}

        </div>
    
);

ListadoDeNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListadoDeNoticias;