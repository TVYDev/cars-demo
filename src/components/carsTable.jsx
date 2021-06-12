import { useState, useEffect } from 'react';
import Table from './common/table';
import { getCars } from '../api/api';
import { formatCurrency } from '../utils/formatter';
import { transformFetchingData } from '../utils/transformer';

const CarsTable = () => {
  const [cars, setCars] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async (page) => {
    const response = await getCars(page);
    const { data, pagination } = transformFetchingData(response);
    setCars(data);
    setPagination(pagination);
  };

  const handlePageChange = (page) => {
    fetchCars(page);
  };

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

  return (
    <Table
      headers={tableHeaders}
      items={cars}
      isIncludedNo
      pagination={pagination}
      onPageChange={handlePageChange}
    />
  );
};

export default CarsTable;
