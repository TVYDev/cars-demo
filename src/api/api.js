import cars from './data/cars.json';

export const getCars = (page = 1) => {
  return new Promise((resolve) => {
    const perPage = 4;
    const offset = (page - 1) * perPage;
    const totalPages = Math.ceil(cars.length / perPage);
    const data = cars.slice(offset, offset + perPage);

    resolve({
      data,
      pagination: {
        per_page: perPage,
        current_page: page,
        total_pages: totalPages,
      },
    });
  });
};

export const getCar = (id) => {
  return new Promise((resolve) => {
    resolve(cars.filter((car) => car.id === id));
  });
};
