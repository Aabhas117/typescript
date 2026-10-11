
import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit({ name, cups });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chaiName">Chai Name</label>
      <input
        id="chaiName"
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <label htmlFor="cups">Cups</label>
      <input
        id="cups"
        type="number"
        min="1"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
      />

      <button type="submit">Place Order</button>
    </form>
  );
}

export default OrderForm;