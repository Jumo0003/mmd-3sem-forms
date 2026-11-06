"use client";
import postRecipe from "@/actions/action"; 
import { useActionState } from "react";
import { success } from "zod";

const RecipeForm = () => {
const [formField,setFormFields]

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
          placeholder="Opskriftens titel"
          className="border"
          defaultValue=""
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



