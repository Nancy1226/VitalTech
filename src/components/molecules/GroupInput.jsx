import styled from "styled-components";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

function GroupInput({ type, name, dato, pattern, valor, txt, onBlur}) {
    return (     
    <>
    <StyledContainerInput>

        <Label txt={txt} color={false} grosor={false} aling={false} />

        <Input type={type}
        name={name}
        value={dato}
        onChange={valor}
        onBlur={onBlur}
        />

    </StyledContainerInput>

    </>
    );
}

export default GroupInput;

const StyledContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* border: 2px solid rebeccapurple; */
`;