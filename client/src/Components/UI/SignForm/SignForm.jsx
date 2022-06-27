import React from 'react';


const SignForm = () => {
    return (
        <div>
            <h2> Login </h2>
            <input
                placeholder="Login..."
            />
            <input
                placeholder="Password..."
            />
            <p> Don't have an account? <b> Sign in here </b> </p>
        </div>
    );
};

export default SignForm;