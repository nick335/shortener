import { useState } from 'react';

const filterDataByPeriod = (data, period) => {
  const currentDate = new Date();
  let startDate = new Date();

  if (period === 'This week') {
    startDate.setHours(0, 0, 0, 0);
    startDate.setDate(currentDate.getDate() - currentDate.getDay());
  } else if (period === 'This Month') {
    startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  } else if (period === 'This Year') {
    startDate = new Date(currentDate.getFullYear(), 0, 1);
  }

  const filteredData = data.filter((item) => {
    const createdAtDate = new Date(item.createdAt);
    return createdAtDate >= startDate;
  });

  return filteredData;
};

const useDataFilter = () => {

  const filterData = (data, period) => {
    const filteredData = filterDataByPeriod(data, period);
    return filteredData;
  };

  return {  filterData };
};

export default useDataFilter;
