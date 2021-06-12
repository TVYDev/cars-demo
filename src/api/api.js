import cars from './data/cars.json';

export const getCars = () => {
  return new Promise((resolve) => {
    resolve(cars);
  });
};

export const getCar = (id) => {
  return new Promise((resolve) => {
    resolve(cars.filter((car) => car.id === id));
  });
};
