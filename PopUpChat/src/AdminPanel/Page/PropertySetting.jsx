/* eslint-disable no-unused-vars */
import { useState } from "react"


export default function PropertySetting() {

    let [inputs,setInputs] = useState({
        Property_name:"sdsd",
        Property_status:true,
        Property_url:"",
        Property_profile_url:"",
        Forwarded_email:"",
        Property_ID:""
    })

    
    function handleFormEvent(e){
        e.preventDefault();

    }


    return (
        <div className="col-span-5 h-full p-5">
            <h2 className="text-2xl font-semibold text-slate-700 mb-3 flex my-auto"><img className="h-7 w-7 mr-2" src="https://img.icons8.com/ios/50/fine-print--v1.png" alt="fine-print--v1" /> Property Setting</h2>
            <hr></hr>
            <form onSubmit={(e)=>{handleFormEvent(e)}}>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div>
                        <label className="font-medium text-slate-600">Property Name</label>
                        <input type="text" value={inputs.Property_name} onChange={(e)=>{setInputs({...inputs,Property_name:e.target.value})}} placeholder="Property Name" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    </div>


                    <div>
                        <label className="font-medium text-slate-600">Property Image URL</label>
                        <input type="url" value={inputs.Property_profile_url} onChange={(e)=>{setInputs({...inputs,Property_profile_url:e.target.value})}} placeholder="Property Image URL" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    </div>

                    <div>

                        <label className="font-medium text-slate-600">Property Status</label>
                        <select value={(inputs.Property_status == true)?"Active" :"Inactive"} onChange={(e)=>{setInputs({...inputs,Property_status:(e.target.value == "Active")? true: false})}} className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md">
                            <option selected>Active</option>
                            <option>Inactive</option>
                        </select>

                    </div>

                    <div>
                        <label className="font-medium text-slate-600">Property ID</label>
                        <input type="text" value={inputs.Property_ID}  placeholder="Property ID" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" readOnly />
                    </div>

                    <div>
                        <label className="font-medium text-slate-600">Property URL</label>
                        <input type="url" value={inputs.Property_url} onChange={(e)=>{setInputs({...inputs,Property_url:e.target.value})}} placeholder="Property URL" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    </div>

                    <div>
                        <label className="font-medium text-slate-600">Ticket Forwarding Email</label>
                        <input type="email" value={inputs.Forwarded_email} onChange={(e)=>{setInputs({...inputs,Forwarded_email:e.target.value})}} placeholder="Ticket Forwarding Email" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    </div>
                </div>
                <input type="submit" className="bg-blue-900 py-2 text-white w-1/6 font-bold rounded-md shadow-lg mt-6 hover:bg-blue-950" value="Save" />
            </form>
        </div>
    )
}
