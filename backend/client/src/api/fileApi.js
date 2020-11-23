/* eslint-disable linebreak-style */
import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/upload';
//import axios from 'axios';

export function getFile(formData) {
  return fetch(baseUrl, {
    method: 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'multipart/form-data' },
    body: formData,
  })
    .then(handleResponse)
    .catch(handleError);
}

/* 
export function getUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);

  // Upload Endpoint
  axios.post(baseUrl, (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });
}
*/
