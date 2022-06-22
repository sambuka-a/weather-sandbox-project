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
  let display = useSelector(selectSuggestionTrigger)
  let trigger = false;
  const {status, error, list} = useSelector(selectSuggestions);  

    useEffect(() => {
      dispatch(getSuggestions(town));

    }, [town, dispatch]);
    
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
        <List
        size="small"
        locale={locale}
        loading={status === 'loading'}
        bordered
        dataSource={list}
        renderItem={(i) => 
          <List.Item onClick={() => handleSuggestion(i.name)}>
            {i.name} - {i.admin1}
          </List.Item>}
      />
      }
    </>
  )
}

export default Suggestions