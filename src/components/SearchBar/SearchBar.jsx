import './SeachBar.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters, getCharactersByName, filterCharactersByStatus } from '../../redux/actions';
import { STATUS } from '../../constants/constants';

export default function SearchBar() {

  const dispatch = useDispatch();
  const [ characterName, setCharacterName ] = useState("");
  const [ errors, setErrors ] = useState({name : ''})

  const validateInput = (values) => {
    console.log(values)
    const errores = {};

    if(values === ''){
      errores.name = "Este campo es obligatorio"
    }

    return errores;
  }
  
  const handleChange = (e) => {
    setCharacterName(e.target.value);
    setErrors(validateInput(e.target.value))
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getCharacters())
  }
  
  const handleFilterStatus = (e) =>{
    dispatch(filterCharactersByStatus(e.target.value))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCharactersByName(characterName));
    setCharacterName("");
    setErrors({name : ''});
  }

  return (
    <div className='searchBar'>
      <form onSubmit={(e) => handleSubmit(e)} id="form">
        <input className='searchField' onChange={(e) => handleChange(e)} value={characterName}/>
        <input value="Buscar" type="submit" className='btnSubmitName' onClick={(e) => handleSubmit(e)} disabled={Object.keys(errors).length === 0 ? false : true}/>
        { errors && errors.name ? <span className="errores">{errors.name}</span> : null}
      </form>
      <div className='caja'>
        <select onChange={(e) => handleFilterStatus(e)}>
          {STATUS.map(s => {
            return(
              <option value={s} key={Math.random()}>{s}</option>
            )
          })}
        </select>
      </div>
      <button onClick={(e) => handleClick(e)} className="btnReload">Recargar personajes</button>
    </div>
  )
}
