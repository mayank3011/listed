import React from 'react'
import { PieChart, Pie , Cell, ResponsiveContainer } from 'recharts';
const data = [
    {name:'Basic Tees',value:550},
    {name:'Custom Short Pants',value:310},
    {name:'Super Hoodies',value:140}


]
const COLORS = ['#0088FE', '#00C49F', '#F7DC7D'];
const ProductsChart = () => {
  return (
    <div className='w-[50%] h-[18rem] bg-white p-4 rounded-xl border border-gray-200 flex '>
      <strong className='text-gray-700 h-4 font-bold '>Top Products</strong>
      <div className='w-full mt-10 flex-1 text-xs '>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                // Calculate label position
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                // Return a custom text element as tooltip content
                return (
                  <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                  </text>
                );
              }}
          >
            
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='absolute float-right mt-10'>
        <h1 className=''><span className='rounded-full text-[#EE8484] bg-[#EE8484] '>00</span>Basic Tees</h1>
        <h1 className='mt-5'><span className='rounded-full text-[#98D89E] bg-[#98D89E]'>00</span>Custom Short Pants</h1>
        <h1 className='mt-5'><span className='rounded-full gap-5 text-[#F7DC7D] bg-[#F7DC7D]'>00</span>Super Hoodies</h1>
      </div>
    </div>
  )
}

export default ProductsChart
