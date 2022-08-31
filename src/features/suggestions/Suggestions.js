//import { useGetSuggestions } from './use-get-suggestions'
//import { selectSearch } from '../search/search-slice'
//import { useSelector } from 'react-redux'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setSearch, setSuggestionTrigger } from '../search/search-slice'

import { List } from 'antd';

import { getSuggestions, selectSuggestions } from "./suggestions-slice";
import { selectSearch, selectSuggestionTrigger } from "../search/search-slice";
    

const Suggestions = () => {

  const dispatch = useDispatch();
  const town = useSelector(selectSearch);
  let townLength = town.length
  let display = useSelector(selectSuggestionTrigger)
  let trigger = false;
  const {status, error, list} = useSelector(selectSuggestions);

    useEffect(() => {
      (townLength === 0 || townLength > 2) && 
      dispatch(getSuggestions(town));

    }, [town, townLength, dispatch]);
    
  //const {status, error, list} = useGetSuggestions();
  //const data = useSelector(selectSearch)
  //console.log(data);

  const handleSuggestion = (suggestion) => {
    dispatch(setSuggestionTrigger(trigger))
    dispatch(setSearch(suggestion))
  }

  let locale = {
    emptyText: true,
  };

  return (
    <>
      {error && 'error'}
      {display && list.length > 1 && 
        <List className="suggestionsList"
        size="small"
        locale={locale}
        loading={status === 'loading'}
        bordered
        dataSource={list}
        renderItem={(i) => 
          <List.Item onClick={() => handleSuggestion({name: i.name, lat: i.latitude, lon: i.longitude})}>
            {i.name} {<small>{i.admin1}</small>}
          </List.Item>}
      />
      }
    </>
  )
}

export default Suggestions