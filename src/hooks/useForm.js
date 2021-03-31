import _ from 'lodash';
import { useCallback, useState } from 'react';

function useForm(initialState, onSubmit) {
    const [form, setForm] = useState(initialState);

    const handleChange = useCallback(event => {
        console.log('formhandle')
        event.persist();
        setForm(_form =>
            _.setIn(
                { ..._form },
                event.target.name,
                event.target.type === 'checkbox' ? event.target.checked : event.target.value
            )
        );
    }, []);

    const resetForm = useCallback(() => {
        console.log('formhandle-reset')
        if (!_.isEqual(initialState, form)) {
            setForm(initialState);
        }
    }, [form, initialState]);

    const setInForm = useCallback((name, value) => {
        console.log('formhandle-setIn')
        setForm(_form => _.setIn(_form, name, value));
    }, []);

    const handleSubmit = useCallback(
        event => {
            console.log('formhandle-submit')
            if (event) {
                event.preventDefault();
            }
            if (onSubmit) {
                onSubmit();
            }
        },
        [onSubmit]
    );

    return {
        form,
        handleChange,
        handleSubmit,
        resetForm,
        setForm,
        setInForm
    };
}

export default useForm;
