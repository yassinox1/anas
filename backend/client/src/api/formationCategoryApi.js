/* eslint-disable linebreak-style */
import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/formationscategory';

export function getFormations() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
