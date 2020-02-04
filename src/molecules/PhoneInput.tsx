import React, { useEffect } from 'react';
import NumberInput from '../atoms/NumberInput';
import SelectInput from '../atoms/SelectInput';
import Validation from '../helpers/Validation';
import { useField } from 'formik';

const PhoneInput: React.FC = () => {
    const [phoneNumberField, meta, helpers] = useField('phoneNumber');
    useEffect(() => {
        console.log(meta.error);
    }, [phoneNumberField, meta.error]);
    
    return (
        <div>
            <SelectInput name='phonePrefix' onChange={(value) => {
                console.log(value);
            }} />
            <NumberInput name='phoneNumber' validate={(value) => Validation.required(value)} label='first' onChange={(data) => {
                console.log(data);
            }} />
        </div>
    )
}

export default PhoneInput;