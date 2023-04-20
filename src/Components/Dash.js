import React from 'react';
import DashboardStas from './utility/DashboardStas';
import ActivityChart from './utility/ActivityChart';
import ProductsChart from './utility/ProductsChart';
import Schedule from './utility/Schedule';


const Dash = () => {
  return (
      <div className='flex  flex-col gap-7 mr-10 md:flex-wrap'>
      <DashboardStas />
      <ActivityChart />
      <div className='flex gap-10'>
        <ProductsChart />
        <Schedule/>
      </div>
    </div>
  );
};

export default Dash;