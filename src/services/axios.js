import axios from "axios";
import { parseCookies } from "nookies";

import config from '../../config/config.json'

export function getAPIClient(ctx) {
  const { 'psychometrika.token': token} = parseCookies(ctx);

  const api = axios.create({
    baseURL: config.apiServer
  })

  if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api;
}