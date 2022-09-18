import { useState } from "react";

export function useFormInput (initialValue){
    const [value, setValue] = useState(initialValue);

    function handlechange (e){
        setValue(e.target.value);
    }

    return{
        value,
        onChange: handlechange,
    }
}