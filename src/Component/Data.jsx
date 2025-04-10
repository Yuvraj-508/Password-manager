import React, { useContext, useEffect } from "react";
import { DataContext } from "../Manager/Context";
import { ToastContainer, toast } from 'react-toastify';
function Data() {
  const { setForm, form, setPasswordArray, passwordArray } =
    useContext(DataContext);
  const copyText=(text)=>{
    toast("Copy to Clipboard");
    navigator.clipboard.writeText(text)
  }

  const handleDelete=(id)=>{
  console.log("deleting icon",id)
  setPasswordArray(passwordArray.filter((item)=>item.id!=id));
  localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item)=>item.id!=id)));

  }

  const handleEdit=(id)=>{
    console.log("edit the icon",id)
    const password = passwordArray.find((item) => item.id === id);
    setForm(password);
    // setPasswordArray(passwordArray.filter((item)=>item.id!=id));
    // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item)=>item.id!=id)));

  }

  return (
    <div className="mt-20 shadow px-2 py-2">
        <ToastContainer />
      {passwordArray.length === 0 && <div>No password to show</div>}
      {passwordArray.length != 0 && (
        <table className="table-auto w-full rounded-md overflow-hidden">
          <colgroup>
            <col className="w-32" /> {/* SNo */}
            <col className="w-[300px]" /> {/* URL */}
            <col className="w-32" /> {/* Username */}
            <col className="w-32" /> {/* Password */}
            <col className="w-32" /> {/* Actions */}
          </colgroup>

          <thead className="bg-gray-500 text-white">
            <tr>
              <th className="py-1">SNo</th>
              <th className="py-1">Url</th>
              <th className="py-1">Username</th>
              <th className="py-1">Password</th>
              <th className="py-1">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-gray-200">
            {passwordArray.map((item, index) => {
              return (
              <tr key={index}>
              <td className="py-1 border-white text-center">{index+1}</td>
              {/* URL */}
              <td className=" pr-2.3 border-white text-center">
                <div className="max-w-[400px] overflow-x-auto whitespace-nowrap">
                  {item.url}
                </div>
              </td>

              {/* Username */}
              <td className=" px-4 border-white text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="max-w-[300px] overflow-x-auto whitespace-nowrap">
                    {item.username}
                  </div>
                  <lord-icon
                    src="https://cdn.lordicon.com/iykgtsbt.json"
                    trigger="hover"
                    style={{ width: "25px", height: "30px" }}
                    className="cursor-pointer"
                   onClick={()=>{copyText(item.username)}}
                  ></lord-icon>
                </div>
              </td>

              {/* Password */}
              <td className=" px-4 border-white text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="max-w-[200px] overflow-x-auto whitespace-nowrap">
                    {item.password}
                  </div>
                  <lord-icon
                    src="https://cdn.lordicon.com/iykgtsbt.json"
                    trigger="hover"
                    style={{ width: "25px", height: "30px" }}
                    className="cursor-pointer"
                    onClick={()=>{copyText(item.password)}}
                  ></lord-icon>
                </div>
              </td>

              <td className=" border-white text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/gwlusjdu.json"
                  trigger="hover"
                  style={{ width: "30px", height: "50px" }}
                  className="mr-3 cursor-pointer"
                  onClick={()=>handleEdit(item.id)}
                ></lord-icon>
                <lord-icon
                  src="https://cdn.lordicon.com/wpyrrmcq.json"
                  trigger="hover"
                  style={{ width: "30px", height: "50px" }}
                  className="ml-1 cursor-pointer"
                  onClick={()=>handleDelete(item.id)}
                ></lord-icon>
              </td>
            </tr>
              )
            })}   
            </tbody> 
        </table>
      )}
    </div>
  )
}

export default Data;
