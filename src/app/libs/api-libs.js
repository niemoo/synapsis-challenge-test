export const getDataResponse = async (resource, query) => {
  const response = await fetch(`https://gorest.co.in/public/v2${resource}?${query}`);
  const data = response.json();
  return data;
};
