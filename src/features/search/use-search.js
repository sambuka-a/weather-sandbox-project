import { useDispatch, useSelector } from "react-redux"
import { selectSearch, selectCoordinates , setSearch, setSuggestionTrigger } from "./search-slice"; 
import { getCurrentWeather } from '../currentWeather/currentWeather-slice'

export const useSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch);
    const coordinates = useSelector(selectCoordinates)
    let trigger = true
    
    const handleSearch = (e) => { 
        dispatch(setSuggestionTrigger(trigger));    
        dispatch(setSearch({name: e.target.value}))};

    const handleGetweather = () => {
        if (coordinates.length >= 3) {
            dispatch(getCurrentWeather(coordinates));
        }
    }

    return [search, handleSearch, handleGetweather];
}