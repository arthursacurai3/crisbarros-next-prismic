
export async function getCategoryTree(id: number){
  await fetch(`https://www.crisbarros.com.br/api/catalog_system/pub/category/tree/${id}`, {
  mode: 'no-cors',
  'headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
  .then(response => {
    return response.text()
  })
  .then((data) => {
    Promise.resolve(data ? JSON.parse(data) : {})
  })
  .catch((error) => {
    Promise.reject(error)
  })
}