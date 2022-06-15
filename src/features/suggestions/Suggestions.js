//import { useGetSuggestions } from './use-get-suggestions'
//import { selectSearch } from '../search/search-slice'
//import { useSelector } from 'react-redux'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setSearch } from '../search/search-slice'

import { List } from 'antd';

import { getSuggestions, selectSuggestions } from "./suggestions-slice";
import { selectSearch } from "../search/search-slice";
    

const Suggestions = () => {

  const dispatch = useDispatch();
  const town = useSelector(selectSearch);
  const {status, error, list} = useSelector(selectSuggestions); 
  let checked = false;

    useEffect(() => {
      dispatch(getSuggestions(town));

    }, [town, dispatch]);
    
  //const {status, error, list} = useGetSuggestions();
  //const data = useSelector(selectSearch)
  //console.log(data);

  const handleSuggestion = (suggestion) => {
    checked = !checked;
    dispatch(setSearch(suggestion))
  }

  let locale = {
    emptyText: true,
  };

  return (
    <>
      {error && 'error'}
      {list.length > 1 && checked === false && 
        <List
        size="small"
        locale={locale}
        loading={status === 'loading'}
        bordered
        dataSource={list}
        renderItem={(i) => 
          <List.Item onClick={() => handleSuggestion(i.name)}>
            {i.name} - {i.country}
          </List.Item>}
      />
      }
    </>
  )
}

export default Suggestions