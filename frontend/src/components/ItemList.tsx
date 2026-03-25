import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Item } from "../types/Item";

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");

  const fetchItems = async () => {
    const res = await api.get("/items");
    setItems(res.data);
  };

  const addItem = async () => {
    if (!name) return;
    await api.post("/items", { name });
    setName("");
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Items</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}