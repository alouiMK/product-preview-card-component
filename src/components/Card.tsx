import ProductDesktop from "../assets/image-product-desktop.jpg";
import ProductMobile from "../assets/image-product-mobile.jpg";
import CartIcon from "../assets/icon-cart.svg?react";

const Card = () => {
  return (
    <div className="min-[480px]:flex justify-center items-center h-dvh bg-Cream overflow-hidden">
      <div className="min-[480px]:flex bg-White rounded-xl m-5 overflow-hidden ">
        <div className="min-[480px]:h-[450px] min-[480px]:w-[300px] max-[480px]:hidden bg-cover">
          <img
            src={ProductDesktop}
            alt="Perfume Desktop"
            className="w-full h-full rounded-tl-xl rounded-bl-xl object-cover bg-DarkCyan"
          />
        </div>
        <div className="min-[480px]:hidden ">
          <img
            src={ProductMobile}
            alt="Perfume Mobile"
            className="w-full h-full object-cover rounded-t-xl bg-DarkCyan"
          />
        </div>

        <div className="min-[480px]:h-[450px] min-[480px]:w-[300px] px-8 py-5">
          <p className="font-montserrat text-DarkGrayishBlue font-medium tracking-[0.3em] text-sm">
            PERFUME
          </p>
          <h2 className="font-fraunces font-bold text-3xl min-[480px]:my-5 my-2 min-[480px]:pr-5">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="font-montserrat font-medium text-sm text-DarkGrayishBlue">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex min-[480px]:my-7 my-4">
            <p className="font-fraunces text-DarkCyan font-bold text-3xl">
              $149.99
            </p>
            <p className="font-montserrat line-through font-light text-sm text-DarkGrayishBlue my-auto mx-5">
              $169.99
            </p>
          </div>
          <button className="w-full bg-DarkCyan flex justify-center hover:bg-VeryDarkBlue p-4 rounded-lg">
            <CartIcon className="my-auto" />
            <p className="font-montserrat text-White font-bold text-sm px-2">
              Add to Cart
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
