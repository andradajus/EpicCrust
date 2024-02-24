import PizzaTable from "./PizzaTable"

const EmployeePizza = () => {
  return (
    <div className="grid lg:grid-cols-9 lg:grid-rows-7 gap-4 sm:grid-cols-2 sm:grid-rows-12">
      <div className="lg:col-span-7 lg:row-span-7 sm:col-span-2 sm:row-span-8 bg-green-300">
        <PizzaTable />
      </div>
      <div className="col-span-2 lg:row-span-7 lg:col-start-8 sm:row-span-4 sm:row-start-9 bg-blue-500"></div>
    </div>
  )
}

export default EmployeePizza
