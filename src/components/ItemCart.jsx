import CancelIcon from '@mui/icons-material/Cancel';

export const ItemCart = ({ id, img, name, quantity, price, onClick }) => {
  return(
    <article 
      key={id} 
      className="flex py-5 justify-center border-b-2"
    >
      <div className="flex w-full max-md:flex-col relative">
        <div className="max-md:w-11/12 max-md:mx-auto lg:w-4/12 w-3/12">
          <img 
            src={img} 
          />
          <div className="max-lg:w-3/12 w-1/12 flex absolute -top-5 -left-5">
            <button 
                onClick={onClick}
                className="text-white m-auto px-4 py-2 text-2xl"
              >
                <CancelIcon className="text-myred scale-150 hover:opacity-85" />
            </button>
          </div>
        </div>
        <div 
          className="ms-3 w-9/12 justify-between flex flex-col 
            max-md:ms-0 max-md:w-full max-md:text-center max-md:mt-4"
        >
          <div>
            <h2 className="text-2xl font-semibold">
              {name}
            </h2>
            <p className="text-xl">
              Cantidad: {quantity}
            </p>
            <p className="text-xl">
              {price}€ c/u
            </p>
          </div>
          <div>
            <p className="text-xl">
              Subtotal: {(quantity * price).toFixed(2)}€
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}