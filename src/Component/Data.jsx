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
          <tr>
            <td className="py-2 border-white text-center">1</td>
            {/* URL */}
            <td className="py-2 pr-2 border-white text-center">
              <div className="max-w-[400px] overflow-x-auto whitespace-nowrap">
                https://www.youtube.com/
              </div>
            </td>

            {/* Username */}
            <td className="py-2 px-4 border-white text-center">
              <div className="flex items-center justify-center gap-1">
                <div className="max-w-[300px] overflow-x-auto whitespace-nowrap">
                  yuvraj-508
                </div>
                <lord-icon
                  src="https://cdn.lordicon.com/iykgtsbt.json"
                  trigger="hover"
                  style={{ width: "25px", height: "30px" }}
                  className="cursor-pointer"
                ></lord-icon>
              </div>
            </td>

            {/* Password */}
            <td className="py-2 px-4 border-white text-center">
              <div className="flex items-center justify-center gap-1">
                <div className="max-w-[200px] overflow-x-auto whitespace-nowrap">
                  786786786
                </div>
                <lord-icon
                  src="https://cdn.lordicon.com/iykgtsbt.json"
                  trigger="hover"
                  style={{ width: "25px", height: "30px" }}
                  className="cursor-pointer"
                ></lord-icon>
              </div>
            </td>

            <td className="py-2 border-white text-center">
              <lord-icon
                src="https://cdn.lordicon.com/gwlusjdu.json"
                trigger="hover"
                style={{ width: "30px", height: "50px" }}
                className="mr-3 cursor-pointer"
              ></lord-icon>
              <lord-icon
                src="https://cdn.lordicon.com/wpyrrmcq.json"
                trigger="hover"
                style={{ width: "30px", height: "50px" }}
                className="ml-1 cursor-pointer"
              ></lord-icon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Data;
