import './MainContainer.css'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../../redux/actions/index.js';
import ReactPaginate from 'react-paginate';
import CharactersPage from '../CharactersPage/CharactersPage.jsx';
import Loader from '../Loader/Loader';

export default function MainContainer({ charactersPerPage }) {

    const dispatch = useDispatch();
    const allCharacters = useSelector(state => state.characters);

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        dispatch(getCharacters());
      }, [dispatch]);    
  
    useEffect(() => {
      const endOffset = itemOffset + charactersPerPage;
      setCurrentItems(allCharacters.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(allCharacters.length / charactersPerPage));
    }, [itemOffset, allCharacters , charactersPerPage]);
  
    const handlePageClick = (e) => {
      const newOffset = (e.selected * charactersPerPage) % allCharacters.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        {
          allCharacters && allCharacters.length === 0 ?
          <Loader/> :
          <>
            <CharactersPage currentCharacters={currentItems}/>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              className="pagination"
            />
          </>
        }
      </>
    )
}