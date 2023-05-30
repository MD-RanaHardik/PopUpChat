/* eslint-disable no-unused-vars */
import { useState } from "react"


export default function WidgetSetting() {

    let [inputs,setInput] = useState({
        Widget_name:"text",
        Widget_status:true,
        Widget_color:""
        
    });

    function handleFormEvent(e){
        e.preventDefault();

    }


  return (
    <div className="col-span-5 p-5">
        <h2 className="text-2xl font-semibold text-slate-700 mb-3 flex my-auto"><img className="h-7 w-7 mr-2" src="https://img.icons8.com/ios/50/fine-print--v1.png" alt="fine-print--v1" /> Widget Setting</h2>
            <hr></hr>
            <form onSubmit={(e)=>{handleFormEvent(e)}}>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div>
                        <label className="font-medium text-slate-600">Widget Name</label>
                        <input type="text" placeholder="Widget Name" value={inputs.Widget_name} onChange={(e)=>{setInput({...inputs,Widget_name:e.target.value})}} className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    </div>

                    <div>

                        <label className="font-medium text-slate-600">Widget Status</label>
                        <select value={(inputs.Widget_status == true)?"Active" :"Inactive"} onChange={(e)=>{setInput({...inputs,Widget_status:(e.target.value == "Active")? true: false})}} className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md">
                            <option >Active</option>
                            <option>Inactive</option>
                        </select>

                    </div>


                    <div>

                        <label className="font-medium text-slate-600">Widget Color</label>
                        <div className="flex justify-between py-2 my-2 ring-1 ring-slate-300 px-3 shadow-md rounded-md">
                            <p>Select Color</p><input onChange={(e)=>{setInput({...inputs,Widget_color:e.target.value})}} type="color" className="" />
                        </div>
                        
                        

                    </div>
                    
                </div>
               
                <input type="submit" onClick={()=>{console.log(inputs)}} className="bg-blue-900 py-2 text-white w-1/6 font-bold rounded-md shadow-lg mt-6 hover:bg-blue-950" value="Save" /> 
            </form>

             <button onClick={()=>{console.log(inputs)}}>Text</button>
    </div>
  )
}
