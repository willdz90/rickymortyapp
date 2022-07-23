const axios = require('axios');

export const getAllInfo = async () => {
  try {
    let page = 1;
    let allCharacters = [];
    while(page < 42){
      const promise = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      allCharacters = allCharacters.concat(promise.data.results)
      page++;
    }
    return allCharacters;
  } catch (error) {

    return [];
  }
};

export const getInfoCharacterById = async (id) => {
  try {

    const promise = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    let infoCharacter = promise.data;
    return infoCharacter;

  } catch (error) {

    return error;
  }
}