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
  console.log('Group Pizza Data', groupedPizzaData)

  return (
    <>
      <div className="flex flex-row justify-around mx-5">
        {Object.values(groupedPizzaData).slice(0,3).map((pizza) =>
        (
          <div key={pizza.name} className="card w-96 bg-base-100 shadow-xl hover:shadow-xl hover:shadow-primary">
            <figure>
              <img src={pizza.image} alt={pizza.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {pizza.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{pizza.description}</p>
              <div className="card-actions justify-center">
                {['S', 'M', 'L', 'XL'].map((sizeKey) => {
                  const size = pizza.sizes.find((pizzaSize) => pizzaSize.size === sizeKey);

                  return (
                    <div key={`${pizza.name}_${sizeKey}`} className="join">
                      <input
                        className="join-item btn px-1"
                        type="radio"
                        name="options"
                        id={`${pizza.name}_${sizeKey}`}
                        aria-label={size ? `${size.size}: ₱${size.price}` : ''}
                        disabled={!size?.is_available}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-around mx-5">
        {Object.values(groupedPizzaData).slice(3,6).map((pizza) =>
        (
          <div key={pizza.name} className="card w-96 bg-base-100 shadow-xl hover:shadow-xl hover:shadow-primary">
            <figure>
              <img src={pizza.image} alt={pizza.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {pizza.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{pizza.description}</p>
              <div className="card-actions justify-center">
                {['S', 'M', 'L', 'XL'].map((sizeKey) => {
                  const size = pizza.sizes.find((pizzaSize) => pizzaSize.size === sizeKey);

                  return (
                    <div key={`${pizza.name}_${sizeKey}`} className="join">
                      <input
                        className="join-item btn px-1"
                        type="radio"
                        name="options"
                        id={`${pizza.name}_${sizeKey}`}
                        aria-label={size ? `${size.size}: ₱${size.price}` : ''}
                        disabled={!size?.is_available}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Menu
