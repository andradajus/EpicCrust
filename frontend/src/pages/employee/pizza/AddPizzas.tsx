import React from 'react'
import { AddPizzaInput } from '@/constants/Inputs';
const AddPizzas = () => {
    const handleAddPizza = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
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
                <button className="btn btn-primary">Add Pizza</button>
                </div>
            </form>
        </div>

    </>
  )
}

export default AddPizzas
