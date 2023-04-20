import React from 'react'
import {ResponsiveContainer} from 'recharts'
import { LineChart, Line, CartesianGrid, XAxis,Legend, YAxis, Tooltip } from 'recharts';

const data = [
	{
		name: 'Week-1',
		Expense: 9000,
		Income: 2000
	},
	{
		name: 'Week-2',
		Expense: 6000,
		Income: 5000
	},
	{
		name: 'Week-3',
		Expense: 5000,
		Income: 2000
	},
	{
		name: 'Week-4',
		Expense: 9000,
		Income: 9000
    }
]
const ActivityChart = () => {
  return (
    <div>
        <div className='h-[22rem] bg-white p-4 rounded-xl border border-gray-200 flex flex-col flex-1 text-xs' >
            <div className='flex justify-between'>
            <div className='ml-6 mb-5'>
            <strong className=' text-2xl text-gray-700 font-bold'>Activity</strong>
            <p>May-June 2021</p>
            </div>
            <div className='flex gap-10 mr-10'>
                <div className=''><span className='w-4 h-4 mr-5 rounded-full text-[#E9A0A0] bg-[#E9A0A0] '>00</span>Guest</div>
                <div><span className='w-4 h-4 mr-5 rounded-full text-[#9BDD7C] bg-[#9BDD7C]'>00</span>Users</div>
            </div>
            </div>
                        <div className='w-full mt-3 flex-1'>
            <ResponsiveContainer width='100%' height='100%'>
            <LineChart width={600} height={600} data={data} margin={{ top: 10, right: 20, bottom: 6, left: 0 }}>
            <Line type="monotone" dataKey="Expense" strokeWidth={3} stroke="#E9A0A0" dot={false} />
            <Line type="monotone" dataKey="Income" strokeWidth={3} stroke="#9BDD7C" dot={false}/>

    <CartesianGrid stroke="#ccc"  horizontal='true' vertical='' />
    <XAxis dataKey="name" />
    <YAxis ticks={[0, 2000, 4000, 6000,8000,10000 ]}/>
    <Tooltip />
  </LineChart>
        </ResponsiveContainer>
            </div>

        </div>
    </div>
  )
}

export default ActivityChart
