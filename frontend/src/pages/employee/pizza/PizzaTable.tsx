import { useState, useEffect } from 'react'
import { indexAllPizza } from '../../../lib/utils';

type PizzaDataProps = {
    id: number;
    name: string;
    size: string;
    price: number;
    image: string;
    is_available: boolean;
}
const PizzaTable = ({flag, setFlag}: {flag: boolean, setFlag: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [pizzaData, setPizzaData] = useState<PizzaDataProps[]>([]);


    const fetchPizzaData = async (): Promise<void> => {
        try {
            const res = await indexAllPizza();
            setPizzaData(res)
            console.log(res)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPizzaData()
        setFlag(false)
    }, [flag, setFlag])

  return (
    <div className="overflow-x-auto">
        <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {pizzaData?.map((pizza) => (
                <tr key={pizza.id}>
                    <th>{pizza.id}</th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={pizza.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{pizza.name}</div>
                                <div className="text-sm opacity-50">{pizza.size}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {pizza.name}
                        <br />
                        <span className="badge badge-ghost badge-sm">{pizza.is_available.toString()}</span>
                    </td>
                    <td>{pizza.price}</td>
                    <th>
                        <button className="btn btn-ghost btn-xs">Actions</button>
                    </th>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default PizzaTable
