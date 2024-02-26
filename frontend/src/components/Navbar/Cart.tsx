type OrderDataProps = {
    id: number;
    order_id: string;
    pizza_id: number;
    quantity: number;
    pizza: PizzaDataProps;
    length: number;
    size: string;
    };

    type PizzaDataProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    size: string;
    is_available: boolean;
    };

type CartProps = {
    orderData: OrderDataProps[];
    };
const Cart: React.FC<CartProps> = ({ orderData }) => {
    console.log("typed",orderData)
    return (
        <>
            <div className="flex flex-col">
            <span className="font-bold text-lg">Your Cart</span>
            <div className="overflow-x-auto">
                {orderData && Array.isArray(orderData) && orderData.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody className="mr-5">
                            {orderData.map((orderItem) => (
                                <tr key={orderItem.id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={orderItem.pizza.image} alt="Pizza Image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{orderItem.pizza.name}</div>
                                                <div className="text-sm opacity-50">{orderItem.size}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{orderItem.quantity}</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{`${
                                            orderItem.pizza.price
                                        }`}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No Orders</p>
                )}
            </div>
            {orderData && Array.isArray(orderData) && orderData.length > 0 && (
            <>
                <span className="text-info font-bold m-2">{`Subtotal: P${orderData.reduce(
                    (total, orderItem) => total + orderItem.pizza.price * orderItem.quantity,
                    0
                )}`}</span>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                </div>
            </>
            )}
            </div>
        </>
    )
}

export default Cart
