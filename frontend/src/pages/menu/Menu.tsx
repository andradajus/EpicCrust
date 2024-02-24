import { indexAllPizza } from "@/lib/utils";
import { useState, useEffect } from "react";
type PizzaDataProps = {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  is_available: boolean;
  description: string;
}
const Menu = () => {
  const [pizzaData, setPizzaData] = useState<PizzaDataProps[]>([]);

  const fetchPizzaData = async (): Promise<void> => {
    try {
      const res = await indexAllPizza();
      console.log("pizza data", res)
      setPizzaData(res)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPizzaData()
  }, [])

  const groupByName = (arr: PizzaDataProps[]) => {
    return arr.reduce((acc, pizza) => {
        acc[pizza.name] = acc[pizza.name] || {
            name: pizza.name,
            image: pizza.image,
            description: pizza.description,
            sizes: [],
        };
        acc[pizza.name].sizes.push({
            size: pizza.size,
            price: pizza.price,
            is_available: pizza.is_available,
        });
        return acc;
    }, {} as Record<string, { name: string; image: string; description: string; sizes: { size: string; price: number; is_available: boolean }[] }>);
};

  const groupedPizzaData = groupByName(pizzaData);

  return (
    <>
      <div className="flex flex-row justify-between mx-5">
        {Object.values(groupedPizzaData).map((pizza) => (
            <div key={pizza.name} className="card w-80 bg-base-100 shadow-xl hover:shadow-xl hover:shadow-primary">
                <figure>
                    <img src={pizza.image} alt={pizza.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {pizza.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{pizza.description}</p>
                    <div className="card-actions justify-end">
                        {pizza.sizes.map((size) => (
                            <div key={`${pizza.name}_${size.size}`} className="badge badge-outline">
                                {`${size.size}: ${size.price}, Availability: ${size.is_available}`}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default Menu
