const HeroSecondaryLeft = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/imeretian-khachapuri-cheese-lemon-side-view_140725-11276.jpg?w=996&t=st=1708694076~exp=1708694676~hmac=6f6f11de927617a14a88919c84d5ea7305ad27d963794e9761b5c4ce18c9962b)'}}>
         <div className="hero-content flex-col lg:flex-row-reverse gap-12">
            <img src="https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
            <div className="glass p-7 rounded-md">
            <h1 className="text-5xl font-bold">Epic Crust: Crafting Pizza Excellence</h1>
            <p className="py-6">At Epic Crust, we don't just make pizza; we craft culinary masterpieces that redefine the art of pizza-making. Our mission is to elevate your pizza experience to new heights, one delectable slice at a time. From handcrafted crusts to mouthwatering toppings, we take pride in delivering a symphony of flavors that will tantalize your taste buds and leave you craving for more.</p>
            <button className="btn btn-primary">Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSecondaryLeft
