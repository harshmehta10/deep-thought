import React from "react";

function Head() {
  return (
    <div
      className="mt-6"
      style={{
        marginLeft: "calc(10% + 36px)",
        marginRight: "calc(10% + 36px)",
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#0029FF] text-2xl font-bold">
          Technical Project Management
        </h1>
        <button className="bg-[#0029FF] text-white text-sm p-2 rounded-xl">
          Submit task
        </button>
      </div>
      <div className="bg-[#E9ECEF] p-4 ">
        <h3 className="font-semibold">Explore the world of management</h3>
        <p>
          As a project manager, you play an important reole in leading a project
          through initiation, planning, execution, monitoring, controlling and
          completion. How? Do you want to manage each and every step of your
          life?
        </p>
      </div>
    </div>
  );
}

export default Head;
