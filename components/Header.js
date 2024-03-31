import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { handleSignout } from "../services/common";
import { auth } from "../firebase";

function Header({ user }) {
  return (
    <div className="flex top-0 z-50 items-center  px-4 py-2 shadow-md bg-white full-width">
      {/* <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="hidden h-10 w-10 border-none mr-3">
                <Icon name="menu"
                    size="2xl" />
            </Button> */}

      <Icon color="blue" name="description" size="4xl" />

      <h1 className="ml-2 text-gray-700 text-2xl ">Gdox</h1>

      {/* search part */}

      <div className="hidden md:flex mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-900 focus-within:shadow-md">
        <Icon color="gray" name="search" size="3xl" />
        <input
          type="text"
          placeholder="search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>

      {/* right button */}

      <h3>Welcome {auth?.currentUser?.displayName} </h3>

      {/* <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-10 w-10 border-none"
      >
        <Icon name="apps" size="3xl" />
      </Button> */}

      <button
        onClick={(e) => handleSignout(e)}
        class="ml-6 inline-flex items-center bg-indigo-900 text-white border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
      >
        Signout
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* <img
        className="cursor-pointer h-10 w-10 rounded-full ml-2"
        loading="lazy"
        src={user?.photoURL ? user?.photoURL : "/img/nopic.png"}
        onClick={(e) => handleSignout(e)}
        alt=""
      /> */}
    </div>
  );
}

export default Header;
