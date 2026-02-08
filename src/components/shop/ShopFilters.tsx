import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterAccordion = ({ title, children, defaultOpen = false }: FilterAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-sm font-medium tracking-wider uppercase hover:text-muted-foreground transition-colors"
      >
        {title}
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'best-selling', label: 'Best Selling' },
  { value: 'alpha-asc', label: 'Alphabetically A–Z' },
  { value: 'alpha-desc', label: 'Alphabetically Z–A' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'date-asc', label: 'Date: Old to New' },
  { value: 'date-desc', label: 'Date: New to Old' },
];

const categories = [
  'Pants',
  'Vests',
  'T-shirts',
  'Jeans',
  'Shorts',
  'Tank tops',
  'Shirts',
  'Gift cards',
];

interface ShopFiltersProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  inStockOnly: boolean;
  setInStockOnly: (value: boolean) => void;
}

const ShopFilters = ({
  sortBy,
  setSortBy,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  inStockOnly,
  setInStockOnly,
}: ShopFiltersProps) => {
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-28 space-y-0">
        <h2 className="font-display text-lg font-semibold tracking-wide uppercase mb-4 pb-4 border-b border-border">
          Filters
        </h2>

        {/* Sort By */}
        <FilterAccordion title="Sort By" defaultOpen>
          <div className="space-y-2">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  sortBy === option.value 
                    ? 'text-foreground font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </FilterAccordion>

        {/* Category */}
        <FilterAccordion title="Category">
          <div className="space-y-3">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryToggle(category)}
                  className="border-muted-foreground data-[state=checked]:bg-foreground data-[state=checked]:border-foreground"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </FilterAccordion>

        {/* Price */}
        <FilterAccordion title="Price">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="text-xs text-muted-foreground mb-1 block">Min</label>
                <Input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="h-9 bg-background border-border text-sm"
                  placeholder="$0"
                />
              </div>
              <span className="text-muted-foreground mt-5">–</span>
              <div className="flex-1">
                <label className="text-xs text-muted-foreground mb-1 block">Max</label>
                <Input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="h-9 bg-background border-border text-sm"
                  placeholder="$500"
                />
              </div>
            </div>
            <Slider
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              min={0}
              max={500}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </FilterAccordion>

        {/* Availability */}
        <FilterAccordion title="Availability">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-muted-foreground">In stock only</span>
            <Switch
              checked={inStockOnly}
              onCheckedChange={setInStockOnly}
              className="data-[state=checked]:bg-foreground"
            />
          </label>
        </FilterAccordion>

        {/* Clear Filters */}
        <button
          onClick={() => {
            setSortBy('featured');
            setSelectedCategories([]);
            setPriceRange([0, 500]);
            setInStockOnly(false);
          }}
          className="w-full mt-6 py-3 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground border border-border/50 hover:border-border transition-all"
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  );
};

export default ShopFilters;
