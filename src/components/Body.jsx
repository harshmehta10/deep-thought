import React, { useEffect } from "react";
import { useState } from "react";

function Body() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json",
      // {
      { mode: "no-cors" }
      // headers: new Headers({
      //   "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
      //   "Access-Control-Allow-Methods": "GET",
      //   "Access-Control-Allow-Headers": "application/json",
      // }),
      // }
    );
    console.log(response);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        marginLeft: "calc(10% + 46px)",
        marginRight: "calc(10% + 46px)",
      }}
    >
      {/* <div>
        {data.map((item, index) => (
          <div className="grid grid-cols-2" key={index}>
            <div>
              <h1>{data.assets}</h1>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Body;
