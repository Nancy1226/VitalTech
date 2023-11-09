import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import Title from "../atoms/Title";
import Label from "../atoms/Label";
import Img from "../atoms/Img";
import {images} from '../../images/images.js'
import GroupInput from "../molecules/GroupInput";
import Button from "../atoms/Button";
import "../../components/styles/Forms.css"

function FormRegister({dato, valor}) {
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
                } else if (
                  !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
                    valores.password
                  )
                ) {
                  errores.password =
                    "La contraseña debe de tener minimo 8 caracteres, maximo 15, al menos una letra mayúscula, al menos una letra minucula, al menos un dígito, No espacios en blanco, al menos 1 caracter especial";
                }

                //validacion para ambos
                

                return errores;
              }}

              onSubmit={(valores, {resetForm}) => { //funcion para enviar el forumario
                resetForm();
                  console.log(valores)
                console.log("Formulario enviado");
              }}
            >
              {({ values, errors, touched,handleSubmit, handleChange, handleBlur }) => (

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

                  <Button name={"Registrarse"} />
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