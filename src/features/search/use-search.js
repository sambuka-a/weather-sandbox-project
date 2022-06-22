import { useDispatch, useSelector } from "react-redux"
import { selectSearch, setSearch, setSuggestionTrigger } from "./search-slice";

export const useSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch);
    let trigger = true
    console.log(trigger);
    
    const handleSearch = (e) => {
        dispatch(setSuggestionTrigger(trigger));    
        dispatch(setSearch(e.target.value))};

    return [search, handleSearch];
}