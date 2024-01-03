import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


interface CreateAccountProps {
  onAccountCreated: () => void;
}

interface UserData {
    username: string;
    email: string;
    password: string;
}

const CreateAccount: React.FC<CreateAccountProps> = ({onAccountCreated}) => {
    const [userData, setUserData] = useState<UserData>({
        username: '',
        email: '',
        password: '',
    });

    let navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/v0/account', userData);
            console.log('Account created: ', response.data);

            // Trigger the provided callback
            onAccountCreated();

            // Redirect to the success page
            navigate('/success');
        } catch (error){
            console.error('Error creating account:', error);
        }
    };

    return (
        <div>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={userData.username} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type="email" name="email" value={userData.email} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                </label>
                <br/>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;