import React from 'react';

const InputForm = () => {
    return(
        <>
            <form>
                <label>
                Name: 
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default InputForm;