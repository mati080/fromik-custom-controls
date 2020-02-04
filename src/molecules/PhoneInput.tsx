import React from 'react';
import NumberInput from '../atoms/NumberInput';
import SelectInput from '../atoms/SelectInput';
import Validation from '../helpers/Validation';
import { useField } from 'formik';



const PhoneInput: React.FC = () => {;
    return (
        <div>
            <SelectInput name='phonePrefix' onChange={(value) => {
                console.log(value);
            }} />
            <NumberInput name='phoneNumber' validate={(value) => Validation.minLength(value, 4)} label='first' onChange={(data) => {
                console.log(data);
            }} />
        </div>
    )
}

export default PhoneInput;