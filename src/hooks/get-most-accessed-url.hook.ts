import api from "../services";

async function getMostAccessedUrls() {
  const requestResponse = await api.get("/top")
  return requestResponse

}

export default getMostAccessedUrls