import axios from "axios";
import { parseCookies } from "nookies";

import config from '../../config/config.json'

export function getAPIClient(ctx) {
  const { 'psychometrika.token': token} = parseCookies(ctx);
  const baseUrl = ctx ? 'http://node:3080' : config.apiServer

  const api = axios.create({
    baseURL: baseUrl
  })

  if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api;
}