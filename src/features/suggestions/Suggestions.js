//import { useGetSuggestions } from './use-get-suggestions'
//import { selectSearch } from '../search/search-slice'
//import { useSelector } from 'react-redux'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getSuggestions, selectSuggestions } from "./suggestions-slice";
import { selectSearch } from "../search/search-slice";
    

const Suggestions = () => {

  const dispatch = useDispatch();
    const town = useSelector(selectSearch);
    let count = town.length;
    const {status, error, list} = useSelector(selectSuggestions); 

    useEffect(() => {
        if(count > 2) {
          dispatch(getSuggestions(town));
        }
      }, [count, town, dispatch]);
    
      console.log(list);
  //const {status, error, list} = useGetSuggestions();
  //const data = useSelector(selectSearch)
  //console.log(data);

  return (
    <>
      <h2>Status: {status}</h2>
      <h3>Error: {error}</h3>
      <p>List: {typeof(list)}</p>
      <p>Length: {Object.keys(list).length}</p>
      {Object.keys(list).length > 0 && (
        list.results.map((i) => (
          <li>{i.name} - {i.country}</li>
        ))
      )} 
    </>
  )
}

export default Suggestions