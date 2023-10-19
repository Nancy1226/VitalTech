import styled from "styled-components";

function Img({src}) {
    return ( 
    <>
    <StyledImg src={src} />
    </> 
    
    );
}

export default Img;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`;