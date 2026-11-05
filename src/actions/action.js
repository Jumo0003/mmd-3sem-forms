"use server"

const postRecipe = async (formData) => {
//console.log(formData)
const recipeName = formData.get("recipename"); 
console.log(recipeName)
try {
const response = await fetch('https://dummyjson.com/recipes/addd', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: recipeName, 
    /* other recipe data evt change^^ til noget async await, som vi før har gjort*/
  }),
});
if (!response.ok)
throw new Error (`Response status: ${response.status}`);
 

    console.log(`Response status: ${response.status}`);
  } catch (error) {
    console.log(error.message);
  }
};
export default postRecipe; 