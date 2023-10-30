import HTRequest from '../request/index.js'

export function getCityList () {
  return HTRequest.get({
    url: '/city/all'
  })
}