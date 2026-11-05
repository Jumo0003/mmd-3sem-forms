"use server"

const postRecipe = async (formData) => {
//console.log(formData)
const recipeName = formData.get("recipename"); 
console.log(recipeName)
await fetch('https://dummyjson.com/recipes/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Tasty Pizza'
    /* other recipe data evt change^^ til noget async await, som vi før har gjort*/
  }),
})};
export default postRecipe; 