import Input from "./Input.jsx";

export default function NewProject(){
const inputStyle = "w-64 px-2 py-1 rounded-sm bg-stone-200";

    return <>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>

        <div>
        {/* <div className="w-[35rem] mt-16"> */}
        <Input className={inputStyle} label="Title"/>
        <Input className={inputStyle} label="Description" textarea/>
        <Input className={inputStyle} label="Due Date"/>
        </div>




    </div>

    {/* <div className="w-[35rem] mt-16">
    <Input className={inputStyle} label="Title"/>
    <Input className={inputStyle} label="Description" textarea/>
    <Input className={inputStyle} label="Due Date"/>
    </div> */}


    {/* <div className="flex items-center gap-4">
        <p className="text-stone-600 mb-4">
            <label>Title</label>
            <input  className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" />
        </p>
        <p className="text-stone-600 mb-4">
        <label>Description</label>
            <textarea/>
        </p>
        <p className="text-stone-600 mb-4">
        <label>Due Date</label>
            <input  className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" />
        </p>
    </div> */}
    </>
}