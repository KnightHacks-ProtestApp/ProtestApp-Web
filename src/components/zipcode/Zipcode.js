import React from 'react';
import {Formik, Field, Form} from "formik";
import './zipcode.css';

const Zipcode = ({click}) => {
    return (
        <Formik
            initialValues={{zip: ""}}
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                let {zip} = values
                click(zip)
            }}
        >   
            <Form className='zip-form pa5'>
                <label className='zip f2'>
                    {'Enter your Zip Code'}
                </label>
                <Field className='input-zip f3 pa2 w-10 br-pill' type='text' name="zip"/>
                <button type="submit"
                    className='zip-button w9 grow f3 link ph3 pv2 dib white bg-black'>
                    Detect
                </button>
                <p className='p-zip f4'>
                    {'To find a movement worth getting involved in near you.'}
                </p>
            </Form>
        </Formik>
    );
}

export default Zipcode;