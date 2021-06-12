import { useState, useEffect } from 'react';
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

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Stocks</th>
          <th>Price</th>
          <th>Released Year</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr>
            <td>{car.model}</td>
            <td>{car.stocks}</td>
            <td>{formatCurrency(car.price)}</td>
            <td>{car.releasedYear}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarsTable;
