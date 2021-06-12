import { useState, useEffect } from 'react';
import Table from './common/table';
import { getCars } from '../api/api';
import { formatCurrency } from '../utils/formatter';
import { transformFetchingData } from '../utils/transformer';

const CarsTable = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const cars = await getCars();
      setCars(transformFetchingData(cars));
    }

    fetchCars();
  }, []);

  const tableHeaders = [
    {
      name: 'Model',
      key: 'model',
    },
    {
      name: 'Stocks',
      key: 'stocks',
    },
    {
      name: 'Price',
      key: 'price',
      formatter: (value) => formatCurrency(value),
    },
    {
      name: 'Released Year',
      key: 'releasedYear',
    },
  ];

  return <Table headers={tableHeaders} items={cars} isIncludedNo />;
};

export default CarsTable;
