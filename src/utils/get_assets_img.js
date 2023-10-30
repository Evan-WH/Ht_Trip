const getAssetUrl = (url) => {
  return new URL(`../assets/img/${url}`, import.meta.url).href
}
export default getAssetUrl