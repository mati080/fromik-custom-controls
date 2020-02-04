import React, { useEffect } from 'react';
import { useField } from 'formik';

interface INumberInput {
    label: string;
    name: string;
    onChange?: (value: any) => void,
    validate?: (value: string) => any;
}

const NumberInput: React.FC<INumberInput> = ({ label, onChange, ...props }) => {
    const [field, meta, helpers] = useField(props);

    const handleChange = (event) => {
        onChange({
            value: event.target.value,
            fieldName: props.name,
            error: meta.error
        });
        field.onChange(event)
    }

    return (
        <div>
            <label>
                {label}
                <input {...field} type="number" onChange={handleChange}/>
            </label>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
        ) : null}
        </div>
  );
};

export default NumberInput;