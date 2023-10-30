import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config.js";
class HTRequest {
  constructor(base_url, timeout = 1000) {
    this.instance = axios.create({
      baseURL: base_url,
      timeout: timeout,
    })
  }
  request (config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  get (config) {
    return this.request({ ...config, method: 'GET' })
  }
  post (config) {
    return this.request({ ...config, method: 'POST' })
  }
}
export default new HTRequest(BASE_URL, TIMEOUT)