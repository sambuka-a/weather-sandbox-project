/*

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getSuggestions, selectSuggstions } from "./suggestions-slice";
import { selectSearch } from "../search/search-slice";

export const useGetSuggestions = () => {
    const dispatch = useDispatch();
    const town = useSelector(selectSearch);
    console.log(town);
    const {status, error, list} = useSelector(selectSuggstions); 

    useEffect(() => {
        dispatch(getSuggestions(town));

      }, [town, dispatch]);
    
      return [{status, error, list}];
    
}
*/