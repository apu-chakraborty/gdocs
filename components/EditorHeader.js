import Icon from "@material-tailwind/react/Icon"
import Link from 'next/link'
import Button from "@material-tailwind/react/Button";
import Image from 'next/image'
import ShareModal from "./ShareModal";

import { useState } from "react"
import { auth } from "../firebase";
function EditorHeader({ fileName, timestamp }) {
    const [showShare, setShowShare] = useState(false)

    const handleSignout = () => {
        auth.signOut().then(function() {
            // Sign-out successful.
            alert("succes")
          }).catch(function(error) {
            // An error happened.
            alert(error)
    
          });
       }

    return (
        <header className="flex justify-between items-center p-3 pb-1">
            <Link href="/">
                <a className="flex items-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-10 flex-no-shrink fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path color="#3b82f6" height="70" fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                    </svg>

                </a>
            </Link>
            <div className="flex-grow px-2">
                <div className="flex space-x-5">
                    <h2 className="text-lg font-bold">{fileName ?? "loading"}</h2>
                    {/* <div className="text-gray-500 flex items-center">
                   {isSaved !== "Saving ..." ? (
                       <img
                           src="/saved.svg"
                           alt="Save Icon"
                           className="h-5 w-5"
                       />
                   ) : (
                       <Icon name="cached" size="regular" />
                   )}
                   <p className="ml-2">saved</p>
               </div> */}
                </div>
                <div className="hidden md:flex flex items-center space-x-1 text-gray-600 text-sm -ml-1 h-8">
                    <p className="option">File</p>
                    <p className="option">Edit</p>
                    <p className="option">Insert</p>
                    <p className="option">View</p>
                    <p className="option">Format</p>
                    <p className="option">Tools</p>
                    {timestamp && (
                        <p className="text-gray-500 underline ml-3">
                            Last edit was
                            {/* {moment(state?.timestamp).calendar()} */}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex items-center">

                
                <Button
                    color="blue"
                    buttonType="filled"
                    onClick={() => setShowShare(true)}
                    className="hidden md:inline-flex h-10 mr-4"
                    size="regular"
                    rounded={false}
                    iconOnly={false}
                    ripple="light">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                </Button>
                <Image
                    src='/img/nopic.png'
                    alt="Picture of the user"
                    width={35}
                    height={35}
                    className="cursor-pointer rounded-full ml-4"
                onClick={() => handleSignout()}
                />
            </div>

            {showShare ?
                <ShareModal showShare setShowShare={setShowShare} /> : ""
            }
        </header>
    )
}

export default EditorHeader
