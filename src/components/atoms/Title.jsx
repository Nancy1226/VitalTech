import styled from "styled-components";

function Title({msn}) {
    return ( 
    <>
        <StyledH1>{msn}</StyledH1>
    </> 
    );
}

export default Title;

const StyledH1 = styled.h1`
    color: #000;
    font-family: 'Inter';
    font-size: 2.4em;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
