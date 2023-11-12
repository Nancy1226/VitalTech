import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useContext} from 'react';
import Swal from 'sweetalert2';
import axios from "axios";
import Title from "../atoms/Title";
import Label from "../atoms/Label";
import Img from "../atoms/Img";
import {images} from '../../images/images.js'
import GroupInput from "../molecules/GroupInput";
import Button from "../atoms/Button";
import "../../components/styles/Forms.css"
import GroupLink from "../molecules/GroupLink.jsx";
import UserContext from '../../context/UserContext.js';

function FormLogin() {
  const { setIsLoged } = useContext(UserContext);
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();

    return (
      <>
        <StyledContainer>
          <StyledContainerForm>
            <Formik
              initialValues={{
                email: " ",
                password: " ",
              }}

              validate={(valores)=>{ //funcion para validar el forumario
                let errores = {};

                //validacion correo
                if (!valores.email) {
                  errores.email = "Por favor ingresa un correo";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.email
                  )
                ) {
                  errores.email =
                    "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
                }

                //validacion contraseña
                if (!valores.password) {
                  errores.password = "Por favor ingresa una contraseña";
                } 
                // else if (
                //   !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
                //     valores.password
                //   )
                // ) {
                //   errores.password =
                //     "La contraseña debe de tener minimo 6 caracteres, al menos una letra mayúscula, al menos una letra minucula, al menos un dígito, 1 caracter especial";
                // }

                //validacion para ambos
                

                return errores;
              }}

              onSubmit={ async(values, {resetForm}) => { //funcion para enviar el forumario
                
                try {
                  const response = await axios.post("http://localhost:4000/api/signin", values, { withCredentials: true });
                  //const allCookies = document.cookie;
        
                  console.log(response.data)
                  //actions.resetForm();
                } catch (error) {
                  console.log(error);
                }

              }}
            >
              {({ values, errors, touched,handleSubmit, handleChange, handleBlur }) => (

                  <form onSubmit={handleSubmit}>
                  <Title msn={"Inicio de sesion"} />
                  <Label
                    txt={"Signos vitales"}
                    color={true}
                    grosor={true}
                    aling={true}
                  />

                  <StyledContainerIcon>
                    <Img src={images.heart} /> 
                  </StyledContainerIcon>

                  <GroupInput
                    txt={"Correo"}
                    type={"email"}
                    name="email"
                    dato={values.email}
                    valor={handleChange}
                    onBlur={handleBlur}
                  />
                {touched.email && errors.email && <div className="error">{errors.email}</div>}

                  <GroupInput 
                    txt={"Contraseña"}
                    type={"password"}
                    name="password"
                    dato={values.password}
                    valor={handleChange}
                    onBlur={handleBlur}
                  />
                {touched.password && errors.password && <div className="error">{errors.password}</div>}

                  <Button name={"Iniciar sesion"} />

                  <GroupLink to={'/register'} txt={"¿No tienes una cuenta?"} msn={"Regístrate"} /> 
                </form>
              )}
            </Formik>
          </StyledContainerForm>

          <StyledContainerImg>
            <Img src={images.login} />
          </StyledContainerImg>
        </StyledContainer>
      </>
    );
}

export default FormLogin;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @media (min-width: 1024px) { 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }
`;

const StyledContainerForm = styled.div`
  width: 50%;
  height: 100vh;
    form {
    /* border: 2px solid red; */
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
`;


const StyledContainerIcon = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    /* height: 100%; */
    img{
        width: 88px;
        height: 69px;
    }
`;




const StyledContainerImg = styled.div`
    /* border: 2px solid rebeccapurple;} */
    display: flex;
    width: 50%;
    height: 100%;    
`;