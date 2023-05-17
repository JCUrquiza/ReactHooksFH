import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        console.log({ name, value });
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return {
        ...formState,
        formState,
        onInputChange
    }
    
}


