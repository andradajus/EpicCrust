import { useNavigate } from "react-router-dom"
const HeroMain = () => {
    const navigate = useNavigate()

  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Epic Crust</h1>
            <p className="mb-5 text-xl">"Epic Crust: Where Every Slice Tells a Flavorful Tale!"</p>
            <button 
            className="btn btn-primary"
            onClick={() => navigate("/order")}
            >
            Order Now
            </button>
            </div>
        </div>
    </div>
  )
}

export default HeroMain
