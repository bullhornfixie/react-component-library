import React from 'react';
import { Field } from 'formik';

const Checkbox = (id, name, className) => { 
  return (
    <> 
     <Field 
       name={name}
       render={({ field, form }) => {
         return (
           <input
             style={{ marginLeft: '20px' }}
             type="checkbox"
             id={id}
             className={className}
             checked={field.value}
             {...field}
             />
           );
         }}
       />
       <label style={{ color: 'black', marginLeft: '15px'}} htmlFor="agree"> I agree to terms and conditions*</label>
    </>
  )
}
   
export default Checkbox

