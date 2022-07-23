import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getCharacterById } from '../../redux/actions/index.js';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './CardDetail.css';
import flecha from '../../assets/flecha-izquierda.png';
import Loader from '../../components/Loader/Loader.jsx';

export default function CardDetail() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const character = useSelector(state => state.infoCharacter);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setTimeout(()=> {
      setLoading(false)
    }, 1000)
  }, [loading])

  return (
    <>
      <Navbar/>
      {
        loading ?
        <Loader/> :
        <>
        <Link to="/">
          <div>
            <img src={flecha} alt="Flecha" className='arrow'/>
          </div>
        </Link>
        <div className='detailsContainer'>
          {
            !character ? 
            <Loader/> :
            <div className='details'>
              <div className="imgDetails">
                <img src={character.image} alt={"Imagen" + character.name}/>
              </div>
              <div className='infoDetails'>
                <div>ID: {id}</div>
                <div>Nombre: {character.name}</div>
                <div>Genero: {character.gender}</div>
                <div>Localización: {character.location.name}</div>
                <div>Especie: {character.species}</div>
                <div>Estado: {character.status}</div>
                <div>Origen: {character.origin.name}</div>
              </div>
            </div>
            }
          </div>
        </>
      }

      <Footer/>
    </>
  )
}
