import React from 'react';
import './InputForm.scss';

const InputForm = ({ request }) => {
    return(
        <>
            <form onSubmit={request}>
                <label>
                Name: 
                <input type="text" name="name" id="mainInput" />
                </label>
                <input type="submit" value="Submit" id="button" />
            </form>
        </>
    )
}

export default InputForm;