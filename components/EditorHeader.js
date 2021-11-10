import Icon from "@material-tailwind/react/Icon"
import Link from 'next/link'
import Button from "@material-tailwind/react/Button";
import Image from 'next/image'


function EditorHeader({fileName, timestamp}) {
    return (
       <header className="flex justify-between items-center p-3 pb-1">
       <Link href="/">
           <a className="flex items-center mr-3">
           <Icon color="blue" name="description" size="4xl" />
     
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
           <div className="flex items-center space-x-1 text-gray-600 text-sm -ml-1 h-8">
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
               className="hidden md:inline-flex h-10 mr-4"
               size="regular"
               rounded={false}
               iconOnly={false}
               ripple="light">
               <Icon name="people" size="md" /> Share
           </Button>
           <Image
               src='/img/nopic.png'
               alt="Picture of the user"
               width={35}
               height={35}
               className="cursor-pointer rounded-full ml-4"
               // onClick={signOut}
           />
       </div>
   </header>
    )
}

export default EditorHeader
