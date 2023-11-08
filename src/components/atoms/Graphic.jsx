import { ComposedChart,ResponsiveContainer,BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line } from 'recharts';
const data = [
    {
        name: 'Lunes', 
        ppm: 120,
        DesviaciónEstandar: 120
    },
    {
        name: 'Martes', 
        ppm: 100,
        DesviaciónEstandar:100
    },
    {
        name: 'Miercoles', 
        ppm: 110,
        DesviaciónEstandar:110
    },
    {
        name: 'Jueves', 
        ppm: 104,
        DesviaciónEstandar:104
    },
    {
        name: 'Viernes', 
        ppm: 98,
        DesviaciónEstandar:98
    },
    {
        name: 'Sábado', 
        ppm: 99,
        DesviaciónEstandar:99
    }

];

function Graphic({color, datos}) {
    console.log(color);
    return ( 
        <>
        <ComposedChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
        >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name"  padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ppm" barSize={30} fill={color} />
        <Line type="monotone" dataKey="DesviaciónEstandar" stroke="#009dff" />

        </ComposedChart>
        </>

     );
}

export default Graphic;