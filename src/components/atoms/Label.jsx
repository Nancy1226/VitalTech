import styled from "styled-components";

function Label({txt, estilo, color, grosor, aling}) {
    return ( 
    <>
        <StyledLabel estilo={estilo} color={color} grosor={grosor} aling={aling} >{txt}</StyledLabel>
    </>
     );
}

export default Label;

const StyledLabel = styled.p`
    color: ${props => props.color ? '#625A5A' : '#000'};
    font-family: 'Inter';
    font-size: ${props => props.estilo ? '1.8em' : '1.8em'};
    font-style: normal;
    font-weight:${props => props.grosor ? '400' : '600'};
    line-height: normal;
    text-align:${props => props.aling ? 'center' : 'left'};
`;