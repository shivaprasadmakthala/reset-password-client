import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetRoute } from "../utils/APIRoutes";

export default function Register() {
    const navigate = useNavigate();
    const { token } = useParams();
    const toastOptions = { 
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const [values, setValues] = useState({
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { password, confirmPassword } = values;
        if (password !== confirmPassword) {
            toast.error(
                "Password and confirm password sholud be same,",
                toastOptions
            );
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const { password } = values;
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",
                    },
                };
                const { data } = await axios.put(
                    `${resetRoute}/${token}`,
                    {
                        password,
                    },
                    config
                );
                toast.success(data.msg, toastOptions);
                setTimeout(() => {
                    navigate("/");
                }, 5000);
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    toast.error(error.response.data.msg, toastOptions);
                }
            }
        }
    };

    return (
        <>
            <FormContainer>
                <form action="" onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">

                        <h1>Reset Password</h1>
                    </div>

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={(e) => handleChange(e)}
                    />
                    <button type="submit">Reset</button>
                    <span>
                        Already have an account ? <Link to="/">Login.</Link>
                    </span>
                </form>
            </FormContainer>
            <ToastContainer />
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
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  img {
    height: 5rem;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }
}
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #00000076;
  border-radius: 2rem;
  padding: 3rem 5rem;
}
input {
  background-color: transparent;
  padding: 1rem;
  border: 0.1rem solid #4e0eff;
  border-radius: 0.4rem;
  color: white;
  width: 100%;
  font-size: 1rem;
  &:focus {
    border: 0.1rem solid #997af0;
    outline: none;
  }
}
button {
  background-color: #4e0eff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    background-color: #4e0eff;
  }
}
span {
  color: white;
  text-transform: uppercase;
  a {
    color: #4e0eff;
    text-decoration: none;
    font-weight: bold;
  }
}
`;