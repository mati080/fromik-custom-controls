import React, { useState, useEffect } from 'react';
import {
  Formik,
  Form,
  FormikProps,
} from 'formik';
import NumberInput from '../atoms/NumberInput';
import SelectInput from '../atoms/SelectInput';
import PhoneInput from '../molecules/PhoneInput';

interface MyFormValues {
    phonePrefix: number;
    phoneNumber: number;
}

function validateUsername(value) {
    let error;
    if (value === 'admin') {
      error = 'Nice try!';
    }
    return error;
  }

const FormExample: React.FC<{}> = () => {
    const [initialValues, setInitialValues] = useState<MyFormValues>({ phonePrefix: 0, phoneNumber: 0 });
    
    useEffect(() => {
        getData()
            .then(() => {
                setInitialValues({ phonePrefix: 33, phoneNumber: 432432 });
            })
    }, []);

    const getData = (): Promise<null> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }

    return (
        <div>
            <h1>Phone input example</h1>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    actions.setSubmitting(false);
                }}
                render={(formikBag: FormikProps<MyFormValues>) => (
                <Form>
                    <PhoneInput />

                    <button type="submit">Submit</button>
                </Form>
                )}
            />
        </div>
  );
};

export default FormExample;