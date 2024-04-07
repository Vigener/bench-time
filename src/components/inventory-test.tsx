import React from "react";

// オブジェクトの定義
const InventoryItem = {
  強力粉: 2900,
  薄力粉: 0,
  HM: 200,
  ドライイースト: 80,
  ベーキングパウダー: 25,
  米粉: 500,
  グラニュー糖: 600,
  片栗粉: 100,
};

const InventoryTest: React.FC = () => {
  return (
    <div className="">
      <table className="border border-black">
        <thead>
          <tr>
            <th className="border border-black">品目</th>
            <th className="border border-black">残量</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(InventoryItem).map(([item, quantity]) => (
            <tr>
              <td className="border border-black">{item}</td>
              <td className="border border-black">{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTest;
