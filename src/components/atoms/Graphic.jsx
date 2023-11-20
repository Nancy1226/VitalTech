import { ComposedChart,ResponsiveContainer,Label, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line } from 'recharts';
const data = [
    {
        name: 'Lunes', 
        ppm: 120,
        sistolica:110,
        distolica:69,
        temp:31,
        oxigeno: 120
    },
    {
        name: 'Martes', 
        ppm: 100,
        sistolica:112,
        distolica:67,
        temp:33,
        oxigeno:100
    },
    {
        name: 'Miercoles', 
        ppm: 110,
        sistolica:121,
        distolica:70,
        temp:30,
        oxigeno:110
    },
    {
        name: 'Jueves', 
        ppm: 104,
        sistolica:120,
        distolica:65,
        temp:33,
        oxigeno:104
    },
    {
        name: 'Viernes', 
        ppm: 98,
        sistolica:115,
        distolica:50,
        temp:30,
        oxigeno:98
    },
    {
        name: 'Sábado', 
        ppm: 99,
        sistolica:120,
        distolica:68,
        temp:30,
        oxigeno:99
    }

];

function Graphic({color1, color2, datos,columnas, variable, dataKey1, dataKey2, name1, name2}) {
    console.log(columnas);
    
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
            width={600}
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
        <XAxis dataKey="fechaPromedio" padding={{ left: 10, right: 10 }} tick={{ fontSize: 11 }} />
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