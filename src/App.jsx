import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function App() {
const [vehicles,setVehicles]=useState(40);
const [cost,setCost]=useState(3000);

const current = vehicles * cost;
const optimized = current * 0.9;
const savings = current - optimized;

const data=[
{name:'Atual',valor:current},
{name:'Levoutec',valor:optimized},
];

const money=(v)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v);

return (
<div style={{padding:40,maxWidth:1200,margin:'0 auto'}}>
<div className='card'>
<h1 style={{color:'#00C853'}}>LEVOUTEC • ROI EXECUTIVO</h1>
<p>Simulador comercial Levoutec.</p>
</div>

<div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:20,marginTop:20}}>
<div className='card'>
<h2>Entradas</h2>

<p>Quantidade veículos</p>
<input type='number' value={vehicles} onChange={(e)=>setVehicles(Number(e.target.value))}/>

<p>Custo por veículo</p>
<input type='number' value={cost} onChange={(e)=>setCost(Number(e.target.value))}/>
</div>

<div style={{display:'grid',gap:20}}>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
<div className='card'>
<h3>Economia Mensal</h3>
<h2>{money(savings)}</h2>
</div>

<div className='card'>
<h3>Economia Anual</h3>
<h2>{money(savings*12)}</h2>
</div>

<div className='card'>
<h3>Redução</h3>
<h2>10%</h2>
</div>
</div>

<div className='card'>
<h2>Comparativo</h2>

<div style={{width:'100%',height:350}}>
<ResponsiveContainer>
<BarChart data={data}>
<XAxis dataKey='name'/>
<YAxis/>
<Tooltip/>
<Bar dataKey='valor' fill='#00C853'/>
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
</div>
</div>
);
}
