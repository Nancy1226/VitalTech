import styled from "styled-components";

function Button({name}) {
    return ( 
    <>
    {/* <StyledContainer> */}
        <StyledButton type={"submit"}>
            {name}
        </StyledButton>
    {/* </StyledContainer> */}
    </>
     );
}

export default Button;

// const StyledContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 85%;
// `;

const StyledButton = styled.button`
    width: 446px;
    height: 58px;
    color: white;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    background: #075BBB;
    text-align: center;
    font-family: 'Inter';
    font-size: 1.6rem;
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