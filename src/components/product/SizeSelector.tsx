import { cn } from '@/lib/utils';

interface SizeSelectorProps {
  sizes: { size: string; inStock: boolean }[];
  selectedSize: string | null;
  onSelectSize: (size: string) => void;
}

const SizeSelector = ({ sizes, selectedSize, onSelectSize }: SizeSelectorProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium tracking-wider uppercase">Size</span>
        <button className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map(({ size, inStock }) => (
          <button
            key={size}
            onClick={() => inStock && onSelectSize(size)}
            disabled={!inStock}
            className={cn(
              "min-w-[3rem] h-11 px-4 text-sm font-medium tracking-wider uppercase transition-all duration-200 border",
              inStock && selectedSize === size
                ? "bg-foreground text-background border-foreground"
                : inStock
                  ? "bg-transparent text-foreground border-border hover:border-foreground"
                  : "bg-transparent text-muted-foreground/40 border-border/40 cursor-not-allowed line-through"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
