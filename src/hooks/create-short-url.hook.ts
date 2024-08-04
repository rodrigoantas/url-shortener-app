import api from "../services";

async function createShortUrl(url: string, customAlias: string) {
  const requestResponse = await api.put(`/create?url=${url}&CUSTOM_ALIAS=${customAlias}`)
  return requestResponse

}

export default createShortUrl