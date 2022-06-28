import React from 'react';
import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";
import {registration} from "../http/userAPI";


const Registration = () => {

    return (
        <main>
            <RegistrationForm/>
        </main>
    );
};

export default Registration;