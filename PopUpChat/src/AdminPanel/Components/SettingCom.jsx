

export default function SettingCom() {
    return (
        <div className="h-full p-5">
            <h2 className="text-2xl font-semibold text-slate-700 mb-3 flex my-auto"><img className="h-7 w-7 mr-2" src="https://img.icons8.com/ios/50/fine-print--v1.png" alt="fine-print--v1" /> Property Overview</h2>
            <hr></hr>
            <form>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div>
                        <label className="font-medium text-slate-600">Property Name</label>
                        <input type="text" placeholder="Property Name" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    </div>


                    <div>
                        <label className="font-medium text-slate-600">Property Image URL</label>
                        <input type="url" placeholder="Property Image URL" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    </div>

                    <div>

                        <label className="font-medium text-slate-600">Property Status</label>
                        <select className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md">
                            <option selected>Active</option>
                            <option>Inactive</option>
                        </select>

                    </div>

                    <div>
                        <label className="font-medium text-slate-600">Property ID</label>
                        <input type="url" placeholder="Property ID" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" readOnly />
                    </div>

                    <div>
                        <label className="font-medium text-slate-600">Property URL</label>
                        <input type="url" placeholder="Property URL" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" readOnly />
                    </div>

                    <div>
                        <label className="font-medium text-slate-600">Ticket Forwarding Email</label>
                        <input type="url" placeholder="Ticket Forwarding Email" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" readOnly />
                    </div>
                </div>
                <input type="submit" className="bg-blue-900 py-2 text-white w-1/6 font-bold rounded-md shadow-lg mt-6 hover:bg-blue-950" value="Save" /> 
            </form>





            <h2 className="text-2xl font-semibold text-slate-700 mb-3 flex my-auto"><img className="h-7 w-7 mr-2" src="https://img.icons8.com/ios/50/fine-print--v1.png" alt="fine-print--v1" /> Widget Overview</h2>
            <hr></hr>
            <form>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div>
                        <label className="font-medium text-slate-600">Property Name</label>
                        <input type="text" placeholder="Property Name" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    </div>


                    <div>
                        <label className="font-medium text-slate-600">Property Image URL</label>
                        <input type="url" placeholder="Property Image URL" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    </div>

                    <div>

                        <label className="font-medium text-slate-600">Property Status</label>
                        <select className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md">
                            <option selected>Active</option>
                            <option>Inactive</option>
                        </select>

                    </div>

                    <div>
                        <label className="font-medium text-slate-600">Property ID</label>
                        <input type="url" placeholder="Property ID" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" readOnly />
                    </div>

                    <div>
                        <label className="font-medium text-slate-600">Property URL</label>
                        <input type="url" placeholder="Property URL" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" readOnly />
                    </div>

                    <div>
                        <label className="font-medium text-slate-600">Ticket Forwarding Email</label>
                        <input type="url" placeholder="Ticket Forwarding Email" className="w-full py-2 my-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" readOnly />
                    </div>
                </div>
                <input type="submit" className="bg-blue-900 py-2 text-white w-1/6 font-bold rounded-md shadow-lg mt-6 hover:bg-blue-950" value="Save" /> 
            </form>



        </div>
    )
}

export function SettingSideBar() {
    return <div className="bg-blue-100 shadow-md p-3 h-full">
        <p className="text-lg font-semibold text-slate-700">Administration</p>
        <hr></hr>
        <button className="flex py-3"><img className="h-5 w-5 mr-2" src="https://img.icons8.com/ios/50/fine-print--v1.png" alt="fine-print--v1" />Overview</button>
        <button className="flex py-3"><img className="h-5 w-5 mr-2" src="https://img.icons8.com/ios/50/fine-print--v1.png" alt="fine-print--v1" />Chat Widget</button>

    </div>
}
