import styled from "styled-components";

function Label({txt, color, grosor, aling}) {
    return ( 
    <>
        <StyledLabel color={color} grosor={grosor} aling={aling} >{txt}</StyledLabel>
    </>
     );
}

export default Label;

const StyledLabel = styled.p`
    color: ${props => props.color ? '#625A5A' : '#000'};
    font-family: 'Inter';
    font-size: 1.4em;
    font-style: normal;
    font-weight:${props => props.grosor ? '400' : '400'};
    line-height: normal;
    text-align:${props => props.aling ? 'center' : 'left'};
`;