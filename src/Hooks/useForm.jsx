import { useState } from "react";

function useForm (intitialForm = {}) {
    const [formState, setFormState] = useState(intitialForm);
    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const onResetForm = () => (
        setFormState(intitialForm)
    );
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,  
    }
}

export { useForm }
