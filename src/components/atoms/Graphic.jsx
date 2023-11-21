import { ComposedChart,ResponsiveContainer,Label, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line } from 'recharts';

function Graphic({color1, color2, datos,columnas, variable, dataKey1, dataKey2, name1, name2}) {
    
    const renderBars = () => {
        if (columnas === 2) {
          return (
            <>
              <Bar key="bar-distolica" dataKey={dataKey1} barSize={30} fill={color1} name={name1}/>
              <Bar key="bar-sistolica" dataKey={dataKey2} barSize={30} fill={color2} name={name2}/>
            </>
          );
        } else if (columnas === 1) {
          return(
          <>
          <Bar key="bar-distolica" dataKey={dataKey1} barSize={30} fill={color1} name={name1}/>;
          <Line type="monotone" dataKey={dataKey1} stroke="#009dff"  name='Desviacion'/>
          </>) 
         
        }
        return null;
      };


    return ( 
        <>
        <ComposedChart
            width={750}
            height={300}
            data={datos}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
        >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="fecha" padding={{ left: 10, right: 10 }} tick={{ fontSize: 11 }} />
        <YAxis>
        <Label
              value={variable}
              angle={-90}
              position="left"
              dy="-10"
            />
        </YAxis>
        <Tooltip />
        <Legend />
        {renderBars()}
        </ComposedChart>
        </>

     );
}

export default Graphic;