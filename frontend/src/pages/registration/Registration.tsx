import { Link } from "react-router-dom"
import { RegistrationInput } from '../../constants/Inputs';


const Registration = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
            <div className="text-center lg:text-left glass bg-base-100 rounded-md p-5">
            <h1 className="text-5xl font-bold text-primary">Register now!</h1>
            <p className="py-6 text-neutral">"Elevate your taste experience with Epic Crust – where passion meets perfection in every pizza. Indulge in a symphony of flavors, from our artisanal crust to premium toppings, crafting a culinary journey that defines excellence. At Epic Crust, we don't just make pizza; we create extraordinary moments of delight in every slice. Join us on a flavor adventure that transcends the ordinary – because your cravings deserve nothing less than epic!"</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
            {Object.keys(RegistrationInput()).map((inputKey: string) => (
                <label key={inputKey} className="input input-bordered flex items-center gap-2 text-sm">
                    {RegistrationInput()[inputKey].label}
                    <input type={RegistrationInput()[inputKey].type} className="grow" placeholder={RegistrationInput()[inputKey].label} name={RegistrationInput()[inputKey].value} />
                </label>
            ))}
                <Link to="/login">
                    <label className="label">
                        <a className="label-text-alt link link-hover">Already Registered? Login here!</a>
                    </label>
                </Link>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Registration
