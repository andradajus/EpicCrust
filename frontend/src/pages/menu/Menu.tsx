import { addToCart, indexAllPizza } from "@/lib/utils";
import { useState, useEffect } from "react";
import axios from "axios";
type PizzaDataProps = {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  is_available: boolean;
  description: string;
  data: any
  order_id: number;
  res: any
}

type MenuProps = {
  setCartFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<MenuProps> = ({ setCartFlag }) => {
  const [pizzaData, setPizzaData] = useState<PizzaDataProps[]>([]);
  const [selectedPizzaId, setSelectedPizzaId] = useState<number>(0);

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
    const initiateAuthorization = () => {
      const token = document.cookie.split("token=")[1];
      if (token) {
        axios.defaults.headers.common["Authorization"] = token;
      }
    };
    initiateAuthorization();
  }, []);

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
            id: pizza.id,
            size: pizza.size,
            price: pizza.price,
            is_available: pizza.is_available,
        });
        return acc;
    }, {} as Record<string, { name: string; image: string; description: string; sizes: { id: number, size: string; price: number; is_available: boolean }[] }>);
  };

  useEffect(() => {
    console.log("selected pizza id", selectedPizzaId);
  }, [selectedPizzaId]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPizzaId(Number(event.target.value));
  };

  const handleAddToCart = async (id: number) => {
    try {
      const res: any = await addToCart(id);
      localStorage.setItem('OrderId', res.data.order_id)
      setCartFlag(true);
      setSelectedPizzaId(0);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };


  const groupedPizzaData = groupByName(pizzaData);
  console.log('Group Pizza Data', groupedPizzaData)

  return (
    <>
      <div className="flex flex-row justify-around mx-5 my-3">
        {Object.values(groupedPizzaData).slice(0,3).map((pizza) =>
        (
          <div key={pizza.name} className="card-body w-96 bg-base-100 shadow-xl">
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
                        value={size ? size.id : ''}
                        aria-label={size ? `${size.size}: ₱${size.price}` : ''}
                        disabled={!size?.is_available}
                        onChange={handleRadioChange}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="btn btn-primary" onClick={() => handleAddToCart(selectedPizzaId)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-around mx-5 my-3">
        {Object.values(groupedPizzaData).slice(3,6).map((pizza) =>
        (
          <div key={pizza.name} className="card-body w-96 bg-base-100 shadow-xl">
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
                        value={size ? size.id : ''}
                        aria-label={size ? `${size.size}: ₱${size.price}` : ''}
                        disabled={!size?.is_available}
                        onChange={handleRadioChange}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="btn btn-primary" onClick={() => handleAddToCart(selectedPizzaId)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Menu
