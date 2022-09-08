const urlApi = "https://https://frasesmotivacion.net/frase/1"
export default async()=>{
  const fetchApi = await fetch(urlApi)
  const data = await fetchApi.json()
  return data
}
