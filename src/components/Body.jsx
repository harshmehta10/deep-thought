import React, { useEffect } from "react";
import { useState } from "react";
import ThreadBuilder from "../components/ThreadBuilder";

function Body() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        // "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json",
        "https://api.npoint.io/73457976e1c61291a230"
        // { mode: "no-cors" },
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
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
      {
        // Check if data and tasks exist
        data && data.tasks ? (
          <div>
            {data.tasks.map((task, taskIndex) => (
              <div key={taskIndex}>
                <div className="grid grid-cols-2 gap-4 p-5 bg-[#FDFDFD]">
                  {task.assets.map((asset, assetIndex) => (
                    <div
                      key={assetIndex}
                      className="mb-4 border border-black rounded-t-2xl overflow-hidden h-[580px] w-[480px] shadow-lg"
                    >
                      <h3 className="bg-black text-white px-5  text-center p-3">
                        {asset.asset_title}
                      </h3>
                      <p className="border-b border-black py-4 px-2 font-OpenSans-Medium">
                        Description: {asset.asset_description}
                      </p>
                      {/* Conditionally render asset content based on type */}
                      {asset.asset_content_type === "video" && (
                        <iframe
                          width="480"
                          height="315"
                          src={asset.asset_content.trim()} // Ensure the URL is trimmed
                          title={asset.asset_title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="py-10 "
                        ></iframe>
                      )}
                      {asset.asset_content_type === "article" && (
                        <a
                          href={asset.asset_content.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* {asset.asset_title} */}
                        </a>
                      )}
                      {asset.asset_content_type === "threadbuilder" && (
                        <ThreadBuilder />
                      )}
                      {asset.asset_title === "4SA Method" && (
                        <div>
                          <div>
                            <h6 className="border border-gray text-black bg-[#F2F2F2] mx-3 pl-3 py-3">
                              Introduction
                            </h6>
                            <p className=" mx-3 pl-3 my-2">
                              The 4SA Method , How to bring a idea into progress
                              ?
                            </p>
                            <p className="flex justify-end text-[#606161] my-2 mx-2">
                              See More
                            </p>
                          </div>
                          <div>
                            <h6 className="bg-[#FCFCFC] border border-[#D9D7D7]  mx-3 pl-3 py-3">
                              Thread A
                            </h6>
                            <p className=" mx-3 pl-3 my-2">
                              How are you going to develop your stratergy ?
                              Which method are you going to use to develop a
                              stratergy ? What if the project is lengthy?
                            </p>
                            <p className="flex justify-end text-[#606161] mx-2 my-2">
                              See More
                            </p>
                          </div>
                          <div>
                            <h6 className="bg-[#FCFCFC]  border border-[#D9D7D7] ml-8 mr-3 py-3 px-2">
                              Example 1
                            </h6>
                            <p className="my-2 ml-8">
                              You have a concept , How will you put into
                              progress?
                            </p>
                          </div>
                        </div>
                      )}
                      {asset.asset_title === "Structure you pointers " && (
                        <div>
                          <div className="mx-4 my-4">
                            <h6 className="my-2">Title</h6>
                            <textarea className="resize-none w-full border rounded-lg shadow-lg h-15 my-1" />
                          </div>
                          <div className="mx-4 my-4">
                            <h6 className="my-2">Content</h6>
                            <textarea className="resize-none w-full border rounded-lg shadow-lg h-40 my-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
}

export default Body;
