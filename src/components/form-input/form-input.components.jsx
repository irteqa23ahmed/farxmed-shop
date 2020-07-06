import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label ,...othProps }) => {
    return (
        <div className='group'>
        <input className='form-input' onChange={handleChange} {...othProps} />
        {
            label ?
            (<label className={`${othProps.value.length ? 'shrink' : ''} form-input-label` }>
            {label}
            </label>)
            : null
        }
        </div>
    );
}

export default FormInput;