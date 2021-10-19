import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <div className="flex top-0 z-50 items-center px-4 py-2 shadow-md bg-white full-width">
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="h-10 w-10 border-0">
                <Icon name="menu"
                    size="3xl" />
            </Button>

            <Icon color="blue" name="description" size="5xl" />

            <h1 className="ml-2 text-gray-700 text-2xl">
                Docs
            </h1>


            {/* search part */}

            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-900 focus-within:shadow-md">
                <Icon color="gray" name="search" size="3xl" />
                <input type="text" 
                placeholder="search" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>


            {/* right button */}

            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="h-10 w-10 border-transparent">
                <Icon name="apps"
                    size="3xl" />
            </Button>


            <img
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                loading="lazy"
                src="https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg_400x400.png"
                alt="" />

        </div>


    )
}

export default Header
