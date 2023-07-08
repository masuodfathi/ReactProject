import React from 'react';
import { useField } from 'formik';
import { TextField } from '@mui/material';

export const Textbox = ({ label,className='text-input', ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
      
        <label htmlFor={props.id || props.name}>{label}</label>
        <TextField {...field} {...props}/>
        
        {/* <input className={meta.error && meta.touched ? "text-input inputerror" : "text-input"} {...field} {...props} /> */}
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
