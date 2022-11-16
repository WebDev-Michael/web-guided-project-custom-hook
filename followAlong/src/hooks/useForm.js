import {useLocalStorage} from "./useLocalStorage";

export const useForm = (initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue)
    
    const clearForm = () => {
        setValue(initialValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cb()
    }

    const handleChanges = e => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    return [value, clearForm, handleChanges, handleSubmit]
    }
    
