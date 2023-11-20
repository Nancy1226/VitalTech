import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";
import Title from "../atoms/Title";
import Label from "../atoms/Label";
import Img from "../atoms/Img";
import {images} from '../../images/images.js'
import GroupInput from "../molecules/GroupInput";
import Button from "../atoms/Button";
import "../../components/styles/Forms.css"
import GroupLink from "../molecules/GroupLink.jsx";



function FormRegister() {
  const captcha = useRef(null);
  const navigate = useNavigate();

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
                name: " ",
                email: " ",
                password: "",
                confirmPassword: "",
              }}
              validate={(valores) => {
                //funcion para validar el forumario
                let errores = {};

                //validacion nombre
                if (!valores.name) {
                  errores.name = "Por favor ingresa un nombre";
                  } 
                

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
                 if(!valores.confirmPassword){
                   errores.confirmPassword = "Por favor ingresa una contraseña";
                 }
                 
                 // Validación para confirmar contraseña
                if (valores.password !== valores.confirmPassword) {
                  errores.confirmPassword = 'Las contraseñas no coinciden';
                }

                //validacion para ambos

                return errores;
              }}
              onSubmit={async (valores, { resetForm  }) => {
                //funcion para enviar el forumario
                if(captcha.current.getValue()){
                  console.log("El usuario no es un robot")
                }else{
                  console.log("Por favor acepta el captcha")
                }

                const apiKey = "at_zflcKeL04C6TIHqOakfltmZ62ApzQ";
                const emailAddress = valores.email;

                const apiUrl = `https://emailverification.whoisxmlapi.com/api/v3?apiKey=${apiKey}&emailAddress=${emailAddress}`;
                axios.get(apiUrl).then((response) => {
                  const responseData = response.data;

                  console.log(
                    "-----------imprimiendo el response del api correo-------------"
                  );
                  console.log(responseData);

                  if (responseData.smtpCheck === "true") {
                    console.log("La verificación de formato es verdadera");

                    const objectDataFront = {
                      name: valores.name,
                      email: valores.email,
                      password: valores.password
                    }
                    
                    axios
                      .post("http://localhost:4000/api/signup", objectDataFront)

                      .then((signupResponse) => {
                        console.log(
                          "***********************Viendo el estatus de la API de registro*****************************"
                        );
                        console.log(signupResponse.status);


                          resetForm();

                          if (signupResponse.status === 201) {
                            Swal.fire({
                              icon: "success",
                              title: "Usuario registrado exitosamente",
                              showConfirmButton: false,
                              timer: 1500,
                            });
                            navigate("/");
                          }

                      })
                      .catch((signupError, signupResponse) => {
                        console.log(
                          "***********************Viendo el estatus de la API de registro*****************************"
                        );
                        console.log(signupResponse.status);
                        
                        if (signupResponse.status === 400) {
                          Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "El correo electronico ya está registrado!",
                          });
                        }

                        Swal.fire({
                          icon: "error",
                          title: "Oops...",
                          text: "Intente de nuevo!",
                          footer: 'Si el problema persiste intentelo mas tarde'
                        });
                      });
                  } else if (responseData.smtpCheck === "false") {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "El correo electrónico no existe!",
                    });
                  }
                });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange,
                handleBlur,
                isSubmitting
              }) => (
                <form onSubmit={handleSubmit}>
                  <Title msn={"Registro"} />
                  <Label
                    txt={"Signos vitales"}
                    estilo={true}
                    color={true}
                    grosor={true}
                    aling={true}
                  />

                  <StyledContainerIcon>
                    <Img src={images.heart} />
                  </StyledContainerIcon>

                  <GroupInput
                    txt={"Nombre"}
                    type={"name"}
                    name="name"
                    dato={values.name}
                    valor={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name && (
                    <div className="error">{errors.name}</div>
                  )}

                  <GroupInput
                    txt={"Correo"}
                    type={"email"}
                    name="email"
                    dato={values.email}
                    valor={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className="error">{errors.email}</div>
                  )}

                  <GroupInput
                    txt={"Contraseña"}
                    type={"password"}
                    name="password"
                    dato={values.password}
                    valor={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <div className="error">{errors.password}</div>
                  )}

                  <GroupInput
                    txt={"Confirmar contraseña"}
                    type={"password"}
                    name="confirmPassword"
                    dato={values.confirmPassword}
                    valor={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className="error">{errors.confirmPassword}</div>
                  )}

                  <ReCAPTCHA 
                  ref={captcha}
                  sitekey="6Lc6YA8pAAAAAPIEg8YBkmffcCSzporvrtNWyXb1" onChange={onChange}
                  />

                  <StyledButton type='submit' disabled={isSubmitting}>
                            {isSubmitting ? "Registrando.." : "Registrarse"}
                  </StyledButton>


                  <GroupLink
                    to={"/"}
                    txt={"¿Ya tienes una cuenta?"}
                    msn={"Inicia Sesion"}
                  />
                </form>
              )}
            </Formik>
          </StyledContainerForm>

          <StyledContainerImg>
            <Img src={images.register} />
          </StyledContainerImg>
        </StyledContainer>
      </>
    );
}

export default FormRegister;

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
    flex-direction: row-reverse;
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