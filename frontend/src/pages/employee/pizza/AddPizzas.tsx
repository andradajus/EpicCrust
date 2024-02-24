import React from 'react'
import { AddPizzaInput } from '@/constants/Inputs';
import { addPizza } from '@/lib/utils';
import { useState } from 'react';
const AddPizzas = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleAddPizza = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        event.preventDefault
        try {
        await addPizza(event);
        setIsLoading(false);
        } catch (error) {
        console.log("Error retrieving your bookings. Please try again.");
        }
    };
  return (
    <>
        <div className="card shrink-0 w-full max-w-sm bg-base-100">
            <form className="card-body" onSubmit={handleAddPizza}>
            <span className="flex justify-center text-2xl mb-1">Add Pizza</span>
            {Object.keys(AddPizzaInput()).map((inputKey: string) => (
                <label key={inputKey} className="input input-bordered flex items-center gap-2 text-sm">
                    {AddPizzaInput()[inputKey].label}
                    <input type={AddPizzaInput()[inputKey].type} className="grow" placeholder={AddPizzaInput()[inputKey].label} name={AddPizzaInput()[inputKey].value} required />
                </label>
            ))}
                <div className="form-control mt-6">
                {!isLoading ? (
                <button className="btn btn-primary">Add Pizza</button>
                ) : (
                <button className="btn" disabled>
                    <span className="loading loading-spinner"></span>
                    Loading
                </button>
                    )
                }

                </div>
            </form>
        </div>

    </>
  )
}

export default AddPizzas
