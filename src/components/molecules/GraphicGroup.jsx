import Graphic from "../atoms/Graphic";

function GraphicGroup({ graphicName, color, data}) {

    return (  
        <>
            <h2>{graphicName}</h2>
            <Graphic color={color}/>
        </>

    );
}

export default GraphicGroup;