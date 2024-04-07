import React from "react";
import { InventoryManager } from "../src/components/InventoryManager";
import InventoryTest from "@/components/inventory-test";

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

const InventoryManagePage: React.FC = () => {
  return (
    <div>
      <h1 className="">Inventory Management Page</h1>
      <InventoryTest />
      <InventoryManager items={[]} />
    </div>
  );
};

export default InventoryManagePage;
