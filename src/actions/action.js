"use server"

const postRecipe = async (prevState, formData) => {
//console.log(formData)
const recipeName = formData.get("recipename"); 
console.log(recipeName)
try {
const response = await fetch('https://dummyjson.com/recipes/add', {
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
         return {
  success: true,
 message:"den blev uploadet",}; 
  } catch (error) {
     return {
  success: false,
 message:"den blev ikke uploadet",}; 
    console.log(error.message);
  }
};
export default postRecipe; 