import { useDispatch } from "react-redux"
import { resetSearch } from "./search-slice";

export const useCleanup = () => {
    const dispatch = useDispatch();
    
    const cleanUp = () => dispatch(resetSearch());

    return cleanUp;
}