import { useState } from "react"
import { db, serverTimestamp } from "../firebase";
import toast, { Toaster } from 'react-hot-toast';

function Modal({ showmodal, setShowModal, user }) {
  const [doc, setDoc] = useState("")


  const createDoc = () => {
    if (!doc){
      toast.error("Please Enter Your Document Title")
      return
    };

    db.collection("userDocs").doc(user.email).collection("docs").add({
      fileName: doc,
      timestamp: serverTimestamp,
    });

    setDoc("")
    setShowModal(false)
  }


  return (
    <div>
      {showmodal &&
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
<Toaster />

          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">



                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>




                  </div> */}
                  <div className="mt-3 text-left sm:mt-0 sm:ml-4  w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Create Docs
                    </h3>
                    <div className="mt-2">

                      <form >
                        <div class="mb-4 mt-5">

                          <input onChange={(e) => setDoc(e.target.value)} value={doc}
                            class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Enter your Doc title" />
                        </div>


                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setShowModal(false)}
                  type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>

                <button onClick={() => createDoc()} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Submit
                </button>


              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Modal
