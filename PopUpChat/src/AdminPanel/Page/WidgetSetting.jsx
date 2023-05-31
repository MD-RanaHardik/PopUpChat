/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { API_HOST } from "../../setting";
import axios from "axios";
import { GComtext } from "../../App";


export default function WidgetSetting() {

    const admindata = useSelector(state => state.adminData.data);
    const showMessage = useContext(GComtext);
    const [widgetid, setWidgetID] = useState("");

    let [inputs, setInput] = useState({
        Widget_name: "text",
        Widget_status: true,
        Widget_color: ""

    });

    const urldata = new URLSearchParams(window.location.search);

    useEffect(() => {

        // console.log("+++++++++",urldata.get("property_id"));

        if (urldata.get("property_id") != null) {

            setInput({
                ...inputs, Widget_name: admindata.property[urldata.get("property_id")]["Widget"].Widget_name,
                Widget_status: admindata.property[urldata.get("property_id")]["Widget"].Widget_status,
                Widget_color: admindata.property[urldata.get("property_id")]["Widget"].Widget_color
            });
            // console.log("--------------", admindata.property[urldata.get("property_id")]["Widget"]);
            // console.log("+++++++++",urldata.get("property_id"));
            setWidgetID(admindata.property[urldata.get("property_id")]["Widget"]._id);
        }


    }, [])

    async function handleFormEvent(e) {
        e.preventDefault();

        let response = await axios.post(`${API_HOST}/client/updatewidget`, { id: widgetid, data: inputs })

        if (response.data.message == "Widget updated") {

            showMessage("Widget data updated");

        }
        if (response.data.message == "Failed to update widget") {
            showMessage("Failed to update widget data");
        }

    }


    return (
        <div className="col-span-5 p-5">

            <h2 className="text-2xl font-semibold text-slate-700 mb-3 flex my-auto"><img className="h-7 w-7 mr-2" src="https://img.icons8.com/ios/50/fine-print--v1.png" alt="fine-print--v1" /> Widget Setting</h2>
            <hr></hr>
            <form onSubmit={(e) => { handleFormEvent(e) }}>
                <div className="grid grid-cols-2 gap-5 mt-5">

                    <div>

                        <div>
                            <label className="font-medium text-slate-600">Widget Name</label>
                            <input type="text" placeholder="Widget Name" value={inputs.Widget_name} onChange={(e) => { setInput({ ...inputs, Widget_name: e.target.value }) }} className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                        </div>

                        <div>

                            <label className="font-medium text-slate-600">Widget Status</label>
                            <select value={(inputs.Widget_status == true) ? "Active" : "Inactive"} onChange={(e) => { setInput({ ...inputs, Widget_status: (e.target.value == "Active") ? true : false }) }} className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md">
                                <option >Active</option>
                                <option>Inactive</option>
                            </select>

                        </div>


                        <div>

                            <label className="font-medium text-slate-600">Widget Color</label>
                            <div className="flex justify-between py-2 my-2 ring-1 ring-slate-300 px-3 shadow-md rounded-md">
                                <p>Select Color</p><input value={inputs.Widget_color} onChange={(e) => { setInput({ ...inputs, Widget_color: e.target.value }) }} type="color" className="" />
                            </div>

                        </div>

                        <input type="submit" onClick={() => { console.log(inputs) }} className="bg-blue-900 py-2 text-white w-1/6 font-bold rounded-md shadow-lg mt-6 hover:bg-blue-950" value="Save" />

                    </div>



                    <div className="flex flex-col">
                        <p className="font-medium text-slate-600">Widget Code</p>

                        <code className="bg-blue-100 ring-1 rounded-md text-blue-950 p-5 my-2">
                            <p className="text-blue-950 pb-2 font-semibold">Add this code to end of the head tag</p>
                            &lt;script src=&quot;https://cdn.tailwindcss.com&quot; /&gt;

                            &lt;style&gt;
                            <br></br>
                            {'{'}
                            <br></br>
                            #msg::-webkit-scrollbar
                            <br></br>
                            width: 0;
                            <br></br>
                            background: transparent;
                            <br></br>
                            {'}'}
                            <br></br>
                            &lt;/style&gt;


                            <p className="text-blue-950 pb-2 font-semibold mt-3">Add this code to end of the body tag</p>

                            &lt;script src=&quot;&quot; type=&quot;text/javascript&quot;&gt;
                            <br></br>
                            &lt;script &gt; StartChatIo(&quot;&quot;,&quot;{urldata.get("property_id")}&quot;) &lt;/script &gt;
                            {/* '<script src="test.js"></script><script >StartChatIo()</script>' */}

                        </code>
                    </div>







                </div>

                
            </form>


        </div>
    )
}
