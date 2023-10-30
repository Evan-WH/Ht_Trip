import HTRequest from '../request/index.js'

export function getHotSuggests () {
  return HTRequest.get({
    url: "/home/hotSuggests"
  })
}
export function getCategories () {
  return HTRequest.get({
    url: "/home/categories"
  })
}
export function getHouses (pages) {
  return HTRequest.get({
    url: "/home/houselist",
    params: {
      page: pages
    }
  })
}