"use server"

const postRecipe = async (formData) => {
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
})
if (!response.ok)

 console.log("Success:", response);
}

catch (error) {
     console.error("Error:", error);
}

};
export default postRecipe; 