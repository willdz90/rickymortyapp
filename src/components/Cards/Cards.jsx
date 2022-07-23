import './Cards.css';
import React from 'react';
import portal from '../../assets/portal.png';
import { Link } from 'react-router-dom';


function Cards({name, image, id}) {

    let srcImage = image;

    return (
        <div>
            <div className='nameCharacter'>#{id}-{name}</div>
            <div className='cardsContainer'>
                <div className='imgContainer'>
                    <Link to={`/${id}`}>
                        <img src={srcImage} alt={name} className="imgCharacter"/>   
                    </Link>
                </div>
                <div>
                    <div className="contenedorBack">
                        <img src={portal} alt={name} className="spinner"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;