import AddPizzas from "./AddPizzas"
import PizzaTable from "./PizzaTable"
import { useRef, useState } from "react";
import UploadData from "./UploadData";


const EmployeePizza = () => {
  const addPizzaModalRef = useRef<HTMLDialogElement>(null);
  const uploadDataModalRef = useRef<HTMLDialogElement>(null);
  const [flag, setFlag] = useState<boolean>(false)

  const openAddPizzaModal = () => {
    const modal = addPizzaModalRef.current;
    if (modal) {
      modal.showModal();
    }
  };

  const closeAddPizzaModal = () => {
    const modal = addPizzaModalRef.current;
    if (modal) {
      modal.close();
      setFlag(true)
    }
  };

  const openUploadDataModal = () => {
    const modal = uploadDataModalRef.current;
    if (modal) {
      modal.showModal();
    }
  };

  const closeUploadDataModal = () => {
    const modal = uploadDataModalRef.current;
    if (modal) {
      modal.close();
      setFlag(true)
    }
  };

  return (
    <>
        <dialog id="AddPizza" className="modal" ref={addPizzaModalRef}>
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeAddPizzaModal}>✕</button>
            </form>
            <div className="flex justify-center">
              <AddPizzas closeAddPizzaModal={closeAddPizzaModal}/>
            </div>
          </div>
        </dialog>

        <dialog id="UploadData" className="modal" ref={uploadDataModalRef}>
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeUploadDataModal}>✕</button>
            </form>
            <div className="flex justify-center">
              <UploadData />
            </div>
          </div>
        </dialog>

      <div className="join m-2">
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="Add Pizza"
          onClick={openAddPizzaModal}
        />
       <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="Upload Data"
          onClick={openUploadDataModal}
          disabled
        />
      </div>

      <div className="grid lg:grid-cols-9 lg:grid-rows-7 gap-4 sm:grid-cols-2 sm:grid-rows-12">
        <div className="lg:col-span-7 lg:row-span-7 sm:col-span-2 sm:row-span-8 bg-base-100 shadow-xl">
          <PizzaTable flag={flag} setFlag={setFlag} />
        </div>
        <div className="col-span-2 lg:row-span-7 lg:col-start-8 sm:row-span-4 sm:row-start-9 bg-blue-500"></div>
      </div>
    </>
  );
};

export default EmployeePizza;
