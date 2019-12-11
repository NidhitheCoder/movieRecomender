export const baseUrl =
  process.env.REACT_APP_BACKEND_URI ||
  'https://atkearney-portfolio-backend.herokuapp.com';

export const apiEndPoints = {
  login: () => `${baseUrl}/users/login`,
  getContentfulList: () => `${baseUrl}/contentful/entries`,
  getContentfulHomeVideo: () => `${baseUrl}/contentful/entries`,
  getContentfulDetails: () => `${baseUrl}/contentful/entry`
};