/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { API_HOST } from "../../setting";
import axios from "axios";
import { GComtext } from "../../App";
import { getUserData } from "../../State/Actions/adminDataAction";
import {RiFileSettingsFill} from "react-icons/ri"


export default function PropertySetting() {

    

    let [inputs,setInputs] = useState({
        Property_name:"",
        Property_status:true,
        Property_url:"",
        Property_profile_url:"",
        Forwarded_email:"",
        Property_ID:""
    })
    const admindata = useSelector(state => state.adminData.data);
    const userdata = useSelector(state => state.adminData);
    const dispacher =useDispatch();
    const showMessage = useContext(GComtext);
    const urldata = new URLSearchParams(window.location.search);

    useEffect(()=>{
        if (urldata.get("property_id") != null && Object.keys(admindata).length >0) {
            console.log('+++++++++++',admindata.property[urldata.get("property_id")]);
            setInputs({
                ...inputs,
                Property_name:admindata.property[urldata.get("property_id")].Property_name,
                Property_status:admindata.property[urldata.get("property_id")].Property_status,
                Property_url:admindata.property[urldata.get("property_id")].Property_url,
                Property_profile_url:admindata.property[urldata.get("property_id")].Property_profile_url,
                Forwarded_email:admindata.property[urldata.get("property_id")].Forwarded_email,
                Property_ID:urldata.get("property_id")
            });

            // admindata.property[urldata.get("property_id")]
            
        }
    },[dispacher])

    // console.log(admindata.property[urldata.get("property_id")]);

    
    async function handleFormEvent(e){
        e.preventDefault();

        let response = await axios.post(`${API_HOST}/client/updateproperty`, {id: urldata.get("property_id"), data: inputs})

        if (response.data.message == "Property updated") {

            showMessage("Property data updated");
            dispacher(getUserData(userdata.loggedin_user));

        }
        if (response.data.message == "Failed to update property") {
            showMessage("Failed to update property data");
        }

    }


    return (
        <div className="col-span-5 h-full p-5">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3 flex my-auto dark:text-slate-300"><RiFileSettingsFill className="h-7 w-7 text-blue-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-600 mr-3 my-auto" /> Property Setting</h2>
            <hr></hr>
            <form onSubmit={(e)=>{handleFormEvent(e)}}>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div>
                        <label className="font-medium text-blue-900 dark:text-slate-300">Property Name</label>
                        <input type="text" value={inputs.Property_name} onChange={(e)=>{setInputs({...inputs,Property_name:e.target.value})}} placeholder="Property Name" className="w-full py-2 my-2 ring-1 ring-slate-300 text-blue-900 outline-none px-3 shadow-md rounded-md dark:ring-slate-600 dark:text-slate-300 dark:bg-slate-800" required />
                    </div>


                    <div>
                        <label className="font-medium text-blue-900 dark:text-slate-300">Property Image URL</label>
                        <input type="url" value={inputs.Property_profile_url} onChange={(e)=>{setInputs({...inputs,Property_profile_url:e.target.value})}} placeholder="Property Image URL" className="w-full py-2 my-2 ring-1 text-blue-900 ring-slate-300 outline-none px-3 shadow-md rounded-md dark:ring-slate-600 dark:text-slate-300 dark:bg-slate-800" required />
                    </div>

                    <div>

                        <label className="font-medium text-blue-900 dark:text-slate-300">Property Status</label>
                        <select value={(inputs.Property_status == true)?"Active" :"Inactive"} onChange={(e)=>{setInputs({...inputs,Property_status:(e.target.value == "Active")? true: false})}} className="w-full py-2 my-2 ring-1 text-blue-900 ring-slate-300 outline-none px-3 shadow-md rounded-md dark:ring-slate-600 dark:text-slate-300 dark:bg-slate-800">
                            <option >Active</option>
                            <option>Inactive</option>
                        </select>

                    </div>

                    <div>
                        <label className="font-medium text-blue-900 dark:text-slate-300">Property ID</label>
                        <input type="text" value={inputs.Property_ID}  placeholder="Property ID" className="w-full py-2 my-2 ring-1 ring-slate-300 text-blue-900 outline-none px-3 shadow-md rounded-md dark:ring-slate-600 dark:text-slate-300 dark:bg-slate-800" readOnly />
                    </div>

                    <div>
                        <label className="font-medium text-blue-900 dark:text-slate-300">Property URL</label>
                        <input type="url" value={inputs.Property_url} onChange={(e)=>{setInputs({...inputs,Property_url:e.target.value})}} placeholder="Property URL" className="w-full text-blue-900 py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md dark:ring-slate-600 dark:text-slate-300 dark:bg-slate-800" required />
                    </div>

                    <div>
                        <label className="font-medium text-blue-900 dark:text-slate-300">Ticket Forwarding Email</label>
                        <input type="email" value={inputs.Forwarded_email} onChange={(e)=>{setInputs({...inputs,Forwarded_email:e.target.value})}} placeholder="Ticket Forwarding Email" className="w-full py-2 my-2 ring-1 text-blue-900 ring-slate-300 outline-none px-3 shadow-md rounded-md dark:ring-slate-600 dark:text-slate-300 dark:bg-slate-800" required />
                    </div>
                </div>
                <input type="submit" className="bg-blue-900 py-2 text-white w-1/6 font-bold rounded-md shadow-lg mt-6 hover:bg-blue-950" value="Save" />
            </form>
        </div>
    )
}
