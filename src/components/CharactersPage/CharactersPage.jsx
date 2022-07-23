import Cards from '../Cards/Cards.jsx';
import NotFound from '../NotFound/NotFound.jsx';

export default function CharactersPage({ currentCharacters}) {
    return (
      <>
        {
          currentCharacters?.length === 0 ? 
          <NotFound/> :
          <div className='mainContainer'>
          {
            currentCharacters?.map(c => {
              return(
                  <Cards key={c.id} name={c.name} id={c.id} image={c.image} />
              )
            })
          }
        </div>
        }
      </>
    );
  }