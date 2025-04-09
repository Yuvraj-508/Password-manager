import React from "react";

function Data() {
  return (
    <div className="mt-20">
      {/* <div className="border px-8 py-4 flex items-center gap-4">
        <input
          type="text"
          name=""
          id=""
          value={1}
          readOnly
          className="max-w-8 text-lg rounded border text-center"
        />
        <input
          type="text"
          value={"url"}
          readOnly
          className=" text-lg rounded border px-2 "
        />
        <input
          type="text"
          value={"nanu"}
          readOnly
          className=" text-lg rounded border px-2 "
        />
        <input
          type="password"
          value={123456}
          readOnly
          className=" text-lg rounded border px-2 "
        />
        <div className="flex items-center gap-5">
          <p className="cursor-pointer">
          <lord-icon
              src="https://cdn.lordicon.com/gwlusjdu.json"
              trigger="hover"
            ></lord-icon>
          </p>
          <p className="cursor-pointer"> 
              <lord-icon
              src="https://cdn.lordicon.com/wpyrrmcq.json"
              trigger="hover"
              state="in-trash-empty"
            ></lord-icon>
          </p>
        </div>
      </div> */}
      <table className="table-auto w-full rounded-md overflow-hidden">
        <thead className="bg-gray-500 text-white ">
          <tr>
            <th className="py-1">SNo</th>
            <th className="py-1">Url</th>
            <th className="py-1">Username</th>
            <th className="py-1">Password</th>
            <th className="py-1">Actions</th>

          </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr>
            <td className="py-2 border-white text-center w-32">1</td>
            <td className="py-2 border-white text-center w-32">https://www.youtube.com/</td>
            <td className="py-2 border-white text-center w-32">yuvraj-508</td>
            <td className="py-2 border-white text-center w-32">1235678</td>
            <td className="py-2 border-white text-center w-32">
            <lord-icon
              src="https://cdn.lordicon.com/gwlusjdu.json"
              trigger="hover"
              style={{ width: "30px", height: "50px" }}
              className="pr-5"
            ></lord-icon>
               <lord-icon
              src="https://cdn.lordicon.com/wpyrrmcq.json"
              trigger="hover"
              style={{ width: "30px", height: "50px" }}
              ></lord-icon>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Data;
