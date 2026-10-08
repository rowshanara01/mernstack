import axios from 'axios';

const ServiceModal = ({openModal , setOpenModal}:any) => {

    const {photo, name, description, price} = openModal;
    const handleBookingInfo = (e:any) => {
        e.preventDefault();

        const productName = name;
        axios.post("https://agile-cove-82104.herokuapp.com/booking",{
            productName:productName,
            phone:e.target.phone.value,
            email:e.target.email.value,
            userName:e.target.userName.value,
            photo:photo,
            description:description,
            price:price,

        })
        .then(res => {
            setOpenModal(null)
            console.log(res)
        })
    
      };
    return (
        <div>
      <input type="checkbox" id="service-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="service-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-4">Please fill up the form</h3>
          <form
            onSubmit={handleBookingInfo}
            className="flex flex-col gap-2 justify-center items-center"
          >     
            <input
              value={name}
              readOnly
              disabled
              name="name"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <input
            required
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              readOnly
              value="jhondany@mail.com"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="userName"
              readOnly
              value="jhon doe"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
    );
};

export default ServiceModal;