import React, { useState } from "react";

interface InventoryItem {
  name: string;
  quantity: number;
  quantityType: "used" | "add";
}

interface InventoryManagerProps {
  items: {
    name: string;
    quantity: number;
    unit: string;
  }[];
}

export const InventoryManager: React.FC<InventoryManagerProps> = ({
  items,
}) => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>(
    items.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      quantityType: "add",
    }))
  );

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, checked } = event.target;
    const newInventoryItems = [...inventoryItems];
    newInventoryItems[index] = {
      ...newInventoryItems[index],
      [name]: value === "true" ? true : false,
    };
    setInventoryItems(newInventoryItems);
  };

  const handleAddButtonClick = () => {
    const newInventoryItems = [...inventoryItems];
    newInventoryItems.push({ name: "", quantity: 0, quantityType: "add" });
    setInventoryItems(newInventoryItems);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedInventoryItems: InventoryItem[] = [];
    for (let i = 0; i < inventoryItems.length; i++) {
      const item = inventoryItems[i];
      if (item.quantityType === "add") {
        updatedInventoryItems.push({
          name: item.name,
          quantity:
            parseInt(String(item.quantity), 10) +
              item.quantity * inventoryItems[i + 1]?.quantity ?? 0,
          quantityType: "add",
        });
      } else {
        updatedInventoryItems.push({
          name: item.name,
          quantity:
            parseInt(String(item.quantity), 10) -
              item.quantity * inventoryItems[i + 1]?.quantity ?? 0,
          quantityType: "used",
        });
      }
    }
    setInventoryItems(updatedInventoryItems);
  };

  return (
    <div>
      <h1>Inventory Manager</h1>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map((item, index) => (
            <tr key={item.name}>
              <td>
                <select
                  value={item.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(index, e)
                  }
                >
                  {items.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>{items.find((i) => i.name === item.name)?.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddButtonClick}>Add Item</button>
      <button type="submit" onSubmit={() => handleFormSubmit}>
        Submit
      </button>
    </div>
  );
};
