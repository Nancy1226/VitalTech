import styled from "styled-components";
import { Field } from "formik";

function Input({ type, name, dato, valor, onBlur}) {
    return ( 
    <>
        <StyledInput
        type={type}
        name={name}
        value={dato}
        onChange={valor}
        onBlur={onBlur}
        />
    </>
     );
}

export default Input;


const StyledInput = styled(Field)`
    width: 446px;
    height: 45px;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    font-size: 1.36em;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 250;
    padding: 0% 2%;
    &:focus {
        outline: 1px solid #5DADE2;
    }
`;