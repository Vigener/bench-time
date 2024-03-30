import React from "react";

const Method: React.FC = () => {
  return (
    <div>
      <div className="mb-4 bg-red-600">
        <div className="">
          <span className="font-semibold mr-2">手順:</span>
        </div>
        <ol>
          <li>材料を混ぜる</li>
          <li>こねる</li>
          <li>一次発酵</li>
          <li>成形</li>
          <li>二次発酵</li>
          <li>焼成</li>
        </ol>
      </div>
    </div>
  );
};

export default Method;
