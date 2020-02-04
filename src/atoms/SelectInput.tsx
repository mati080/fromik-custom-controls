import React, { useEffect } from 'react';
import { useField } from 'formik';

interface ISelectInput {
    name: string;
    onChange?: (value: number) => void;
}

const options = [
    {
        value: 48,
        label: 'Polska +48'
    },
    {
        value: 49,
        label: 'Nimecy +49'
    },
    {
        value: 33,
        label: 'Francja +33'
    }
]

const SelectInput: React.FC<ISelectInput> = ({name, onChange}) => {
    const [field, meta, helpers] = useField(name);

    useEffect(() => {
        if (!field.value) {
            helpers.setValue(options[0].value);
        }
    }, [field.value, helpers]);

    const handleChange = (event) => {
        field.onChange(event);
        if (onChange) {
            onChange(event.target.value);
        }
    }

    return (
        <select {...field} onChange={handleChange}>
            {options.map((el) => {
                return <option key={el.value} value={el.value}>{el.label}</option>
            })}
        </select>
    )
}

export default SelectInput;