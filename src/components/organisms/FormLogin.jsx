import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useContext, useRef} from 'react';
import { loginUser } from '../../api/routes';
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';
import axios from "axios";
import Title from "../atoms/Title";
import Label from "../atoms/Label";
import Img from "../atoms/Img";
import {images} from '../../images/images.js'
import GroupInput from "../molecules/GroupInput";
import Button from "../atoms/Button";
import "../../assets/styles/Forms.css";
import GroupLink from "../molecules/GroupLink.jsx";
import UserContext from '../../context/UserContext.js';

function FormLogin() {
  const { setIsLoged } = useContext(UserContext);
  const { setUserName } = useContext(UserContext);
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const captcha = useRef(null);

  const onChange = () =>{
    if(captcha.current.getValue()){
      console.log("El usuario no es un robot")
    }
  }

    return (
      <>
        <StyledContainer>
          <StyledContainerForm>
            <Formik
              initialValues={{
                email: " ",
                password: "",
              }}

              validate={(values)=>{ //funcion para validar el forumario
                let errores = {};

                //validacion correo
                if (!values.email) {
                  errores.email = "Por favor ingresa un correo";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    values.email
                  )
                ) {
                  errores.email =
                    "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
                }

                //validacion contraseña
                if (!values.password) {
                  errores.password = "Por favor ingresa una contraseña";
                } 

                //validacion para ambos
                

                return errores;
              }}

              onSubmit={ async(values, actions) => { //funcion para enviar el forumario      
                try {
                if(captcha.current.getValue()){
                  console.log("El usuario no es un robot")
                }else{
                  console.log("Por favor acepta el captcha")
                }
              
                const response = await loginUser(values);
                  if(response.status === 200){
                    Swal.fire({
                      icon: "success",
                      title: "Bienvenido",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                await new Promise((resolve) => {
                  window.localStorage.setItem( "loggedUser", JSON.stringify(response.data.userName));
                  resolve();
                });
                setIsLoged(true);
                setUserName(response.data.userName);
                navigate("/dashboard");
                } catch (error) {
                  Swal.fire({
                    icon: "error",
                    title: "Error...",
                    text: "Intente de nuevo",
                    footer: 'Si el problema persiste intentelo mas tarde'
                  });
                  console.log(error);
                  if (error.response) {
                    console.log(error.response.data);
                  }
                }
                
              }}

            >
              {({ values, errors, touched,handleSubmit, handleChange, handleBlur, isSubmitting }) => (

                  <Form onSubmit={handleSubmit}>
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

                <ReCAPTCHA 
                  ref={captcha}
                  sitekey="6Lc6YA8pAAAAAPIEg8YBkmffcCSzporvrtNWyXb1" onChange={onChange}
                  />

                  <StyledButton type='submit' disabled={isSubmitting}>
                            {isSubmitting ? "Iniciando.." : "Iniciar Sesión"}
                  </StyledButton>

                  <GroupLink to={'/register'} txt={"¿No tienes una cuenta?"} msn={"Regístrate"} /> 
                </Form>
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
    width: 100%;
  height: 100vh;
  form {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  @media (min-width: 1024px) { 
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
    display: none;
    @media (min-width: 1024px) {
    display: flex;
    width: 50%;
    height: 100%;    
  }
`;

const StyledButton = styled.button`
    width: 446px;
    height: 58px;
    color: white;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    background: #075BBB;
    text-align: center;
    font-family: 'Inter';
    font-size: 1.6em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    margin-top: 2%;
    /* padding: 1vh 3%; */
    &:hover {
        cursor: pointer;
        transition: background-color 0.7s;
    }

`;