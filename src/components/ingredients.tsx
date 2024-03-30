import React from "react";
// tailwindcssのスタイルを適用するためのimport
// import "../index.css";

const Ingredients: React.FC = () => {
  return (
    <div>
      <div className="mb-4 bg-red-600">
        <div className="">
          <span className="font-semibold mr-2">材料:</span>
          <span>6個分</span>
        </div>
        <ul>
          <li>強力粉(80%) 160g</li>
          <li>薄力粉(20%) 40g</li>
          <li>塩(1%)2g</li>
          <li>イースト(1.5%) 3g</li>
          <li>砂糖(6%) 12g</li>
          <li>水(38%) 76g</li>
          <li>牛乳(25%) 50g</li>
          <li>バター(15%) 30g</li>
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
