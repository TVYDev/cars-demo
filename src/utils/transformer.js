import camelcaseKeys from 'camelcase-keys';

export const transformFetchingData = (data) => {
  return camelcaseKeys(data, { deep: true });
};
