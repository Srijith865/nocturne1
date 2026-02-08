import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  max?: number;
}

const QuantitySelector = ({ quantity, onQuantityChange, max = 10 }: QuantitySelectorProps) => {
  const decrease = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  const increase = () => {
    if (quantity < max) onQuantityChange(quantity + 1);
  };

  return (
    <div className="space-y-3">
      <span className="text-sm font-medium tracking-wider uppercase">Quantity</span>
      <div className="flex items-center border border-border w-fit">
        <button
          onClick={decrease}
          disabled={quantity <= 1}
          className="p-3 transition-colors hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-12 text-center text-sm font-medium">{quantity}</span>
        <button
          onClick={increase}
          disabled={quantity >= max}
          className="p-3 transition-colors hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
