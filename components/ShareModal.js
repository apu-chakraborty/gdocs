import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TelegramShareButton,
    InstapaperShareButton,
InstagramShareButton,
    InstagramIcon,

    PinterestIcon,
    TelegramIcon,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon
} from 'react-share'

function ShareModal({ showShare, setShowShare }) {
    console.log(setShowShare, "setShowShare")


    return (
        <div>

            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">


                                <div className="mt-3 text-left sm:mt-0 sm:ml-4 ">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                        Share Now
                                    </h3>

                                    <div className="mt-6">

                                        <div className="flex gap-6 justify-between item-center">
                                            <FacebookShareButton
                                                className="network__share-button"
                                                url={window?.location?.href}
                                                quote="fb"

                                            >
                                                <FacebookIcon
                                                    size={64}
                                                    round={true}
                                                />
                                            </FacebookShareButton>


                                            <TwitterShareButton
                                                className="network__share-button"
                                                url={window?.location?.href}
                                                quote="fb"
                                            >
                                                <TwitterIcon
                                                    size={64}
                                                    round={true}

                                                />
                                            </TwitterShareButton>


                                            <WhatsappShareButton
                                                className="network__share-button"
                                                url={window?.location?.href}
                                                quote="fb"
                                            >
                                                <WhatsappIcon
                                                    size={64}
                                                    round={true}

                                                />
                                            </WhatsappShareButton>

                                            <TelegramShareButton
                                                className="network__share-button"
                                                url={window?.location?.href}
                                                quote="fb"
                                            >
                                                <TelegramIcon
                                                    size={64}
                                                    round={true}

                                                />
                                            </TelegramShareButton>


                                            <PinterestShareButton
                                                className="network__share-button"
                                                url={window?.location?.href}
                                                quote="fb"
                                            >
                                                <PinterestIcon
                                                    size={64}
                                                    round={true}

                                                />
                                            </PinterestShareButton>


                                            {/* <InstagramShareButton
                                                className="network__share-button"
                                                url={window?.location?.href}
                                                quote="fb"
                                            >
                                                <InstagramIcon
                                                    size={64}
                                                    round={true}

                                                />
                                            </InstagramShareButton> */}



                                        </div>

                                        {/* <h1>sdfsdfsdf</h1> */}
                                        <div className="mt-8">
                                            <button
                                                onClick={() => setShowShare(false)}
                                                type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShareModal
