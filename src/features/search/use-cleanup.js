import { useDispatch } from "react-redux"
import { resetSearch } from "./search-slice"
import { resetWeather } from "../currentWeather/currentWeather-slice"

export const useCleanup = () => {
    const dispatch = useDispatch();
    
    const cleanUp = () => dispatch(resetSearch(), dispatch(resetWeather()));

    return cleanUp;
}