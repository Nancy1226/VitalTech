import Graphic from "../atoms/Graphic";

function GraphicGroup({ graphicName, color1, color2, data, columnas, variable, datakey1, datakey2}) {

    return (  
        <>
            <h2>{graphicName}</h2>
            <Graphic color1={color1} color2={color2} columnas={columnas} variable={variable} dataKey1={datakey1} dataKey2={datakey2}/>
        </>

    );
}

export default GraphicGroup;