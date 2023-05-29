/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


export default function AlertMessageCom({message}) {
  return (
    <div className="bg-blue-600 w-auto text-white font-semibold fixed py-5 px-3 my-10 mx-10 right-0 bottom-0 border-l-4 shadow-lg drop-shadow-lg rounded-lg text-left border-blue-900">
        {message}
    </div>
  )
}
