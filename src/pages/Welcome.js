import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Welcome = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        navigate("/");
    };

    return (
        <>
            <FormContainer>
                <form>
                    <div className="brand">
                        <h1>Welcome</h1>
                    </div>

                    <button type="submit" onclick={handleLogout}>Log out</button>
                </form>
            </FormContainer>

        </>
    );
}

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
.brand{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img{
        height: 5rem;
    }
    h1{
        color: white;
        text-transform: uppercase;
    }
}
form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
}

button{
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover{
        background-color: #4e0eff;
    }
}

`;

export default Welcome;