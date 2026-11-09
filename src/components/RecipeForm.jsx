"use client";
import postRecipe from "@/actions/action"; 
import { useActionState } from "react";
import { success } from "zod";
import { useState, useEffect } from "react";

const RecipeForm = () => {
const [formFields,setFormFields]  = useState({ recipename: "" });

useEffect(() => {

})

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  }

   const [state, postRecipeAction, isPending] = useActionState(postRecipe, {
  success: null,
 message:"",
}); 

    return (
    <>
        <form action={postRecipeAction}>
        <input
          type="text"
          name="recipename"
          value={formFields.recipename}
          placeholder="Opskriftens titel"
          className="border"
          onChange={handleChange}
        />
        <button type="submit" className="border">
          {isPending ? "submitting" : "Opret opskrift"}
        </button>
      </form>

      {state.message && (
        <p
          className={
            state.success
              ? "text-green-500 bg-green-100 p-4 rounded-md"
              : "text-red-500 bg-red-100 p-4 rounded-md"
          }
        >
          {state.message}
        </p>
      )}
    </>
  );
}

export default RecipeForm



