import productHoodie from '@/assets/product-hoodie.png';
import productTshirt from '@/assets/product-tshirt.png';
import productShirt from '@/assets/product-shirt.png';
import productPants from '@/assets/product-pants.png';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  images: string[];
  isNew: boolean;
  inStock: boolean;
  category: string;
  description: string;
  sizes: { size: string; inStock: boolean }[];
  details: {
    productDetails: string;
    fabricCare: string;
    sizeGuide: string;
    shippingReturns: string;
  };
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Shadow Oversized Hoodie',
    price: 145,
    originalPrice: null,
    image: productHoodie,
    images: [productHoodie, productHoodie, productHoodie],
    isNew: true,
    inStock: true,
    category: 'Tops',
    description: 'A statement piece for those who walk in shadows. This oversized hoodie features a relaxed silhouette, dropped shoulders, and premium heavyweight cotton for an uncompromising blend of comfort and darkness.',
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: false },
      { size: 'XL', inStock: true },
      { size: 'XXL', inStock: true },
    ],
    details: {
      productDetails: '• Oversized fit with dropped shoulders\n• Heavyweight 400gsm cotton\n• Ribbed cuffs and hem\n• Front kangaroo pocket\n• Embroidered logo on chest\n• Model is 6\'1" wearing size L',
      fabricCare: '• 100% Premium Cotton\n• Machine wash cold\n• Tumble dry low\n• Do not bleach\n• Iron on low heat if needed',
      sizeGuide: 'XS: Chest 44" / Length 27"\nS: Chest 46" / Length 28"\nM: Chest 48" / Length 29"\nL: Chest 50" / Length 30"\nXL: Chest 52" / Length 31"\nXXL: Chest 54" / Length 32"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 2,
    name: 'Void Essential Tee',
    price: 65,
    originalPrice: null,
    image: productTshirt,
    images: [productTshirt, productTshirt, productTshirt],
    isNew: false,
    inStock: true,
    category: 'T-shirts',
    description: 'The foundation of every dark wardrobe. Our essential tee delivers clean lines and a refined fit, crafted from soft premium cotton that moves with you through day and night.',
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: true },
      { size: 'XXL', inStock: false },
    ],
    details: {
      productDetails: '• Regular fit\n• Crew neck\n• Short sleeves\n• Screen printed graphic\n• Reinforced shoulders\n• Model is 6\'0" wearing size M',
      fabricCare: '• 100% Cotton\n• Machine wash cold\n• Tumble dry low\n• Do not bleach\n• Iron on medium heat',
      sizeGuide: 'XS: Chest 36" / Length 26"\nS: Chest 38" / Length 27"\nM: Chest 40" / Length 28"\nL: Chest 42" / Length 29"\nXL: Chest 44" / Length 30"\nXXL: Chest 46" / Length 31"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 3,
    name: 'Eclipse Button-Up',
    price: 120,
    originalPrice: null,
    image: productShirt,
    images: [productShirt, productShirt, productShirt],
    isNew: true,
    inStock: true,
    category: 'Shirts',
    description: 'Where darkness meets sophistication. This button-up shirt combines structured tailoring with relaxed proportions, perfect for those who command attention without seeking it.',
    sizes: [
      { size: 'XS', inStock: false },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: true },
      { size: 'XXL', inStock: true },
    ],
    details: {
      productDetails: '• Relaxed fit\n• Button-front closure\n• Chest pocket\n• Long sleeves with button cuffs\n• Curved hem\n• Model is 6\'2" wearing size L',
      fabricCare: '• 100% Cotton Poplin\n• Machine wash cold\n• Hang dry recommended\n• Iron on medium heat\n• Dry clean safe',
      sizeGuide: 'XS: Chest 38" / Length 28"\nS: Chest 40" / Length 29"\nM: Chest 42" / Length 30"\nL: Chest 44" / Length 31"\nXL: Chest 46" / Length 32"\nXXL: Chest 48" / Length 33"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 4,
    name: 'Phantom Cargo Pants',
    price: 165,
    originalPrice: null,
    image: productPants,
    images: [productPants, productPants, productPants],
    isNew: false,
    inStock: true,
    category: 'Pants',
    description: 'Utility meets the underground. These cargo pants feature a tapered silhouette with functional pockets and adjustable details, designed for those who carry their own weight.',
    sizes: [
      { size: '28', inStock: true },
      { size: '30', inStock: true },
      { size: '32', inStock: true },
      { size: '34', inStock: false },
      { size: '36', inStock: true },
      { size: '38', inStock: true },
    ],
    details: {
      productDetails: '• Tapered fit\n• Elastic waistband with drawstring\n• Multiple cargo pockets\n• Adjustable ankle cuffs\n• YKK zippers\n• Model is 6\'1" wearing size 32',
      fabricCare: '• 98% Cotton, 2% Elastane\n• Machine wash cold\n• Tumble dry low\n• Do not bleach\n• Iron on low heat',
      sizeGuide: '28: Waist 28" / Inseam 30"\n30: Waist 30" / Inseam 31"\n32: Waist 32" / Inseam 32"\n34: Waist 34" / Inseam 32"\n36: Waist 36" / Inseam 33"\n38: Waist 38" / Inseam 33"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 5,
    name: 'Obsidian Layered Hoodie',
    price: 175,
    originalPrice: null,
    image: productHoodie,
    images: [productHoodie, productHoodie, productHoodie],
    isNew: true,
    inStock: true,
    category: 'Tops',
    description: 'Layers of darkness. This double-layered hoodie creates visual depth with contrasting panels and an architectural silhouette that redefines casual luxury.',
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: false },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: true },
      { size: 'XXL', inStock: false },
    ],
    details: {
      productDetails: '• Layered construction\n• Oversized fit\n• Double-layer hood\n• Contrast panel details\n• Heavy 450gsm cotton blend\n• Model is 6\'0" wearing size L',
      fabricCare: '• 80% Cotton, 20% Polyester\n• Machine wash cold\n• Hang dry recommended\n• Do not bleach\n• Do not iron directly on print',
      sizeGuide: 'XS: Chest 46" / Length 28"\nS: Chest 48" / Length 29"\nM: Chest 50" / Length 30"\nL: Chest 52" / Length 31"\nXL: Chest 54" / Length 32"\nXXL: Chest 56" / Length 33"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 6,
    name: 'Midnight Graphic Tee',
    price: 75,
    originalPrice: null,
    image: productTshirt,
    images: [productTshirt, productTshirt, productTshirt],
    isNew: false,
    inStock: false,
    category: 'T-shirts',
    description: 'Art meets attitude. Featuring an exclusive graphic design, this tee speaks volumes without saying a word. Limited quantities available.',
    sizes: [
      { size: 'XS', inStock: false },
      { size: 'S', inStock: false },
      { size: 'M', inStock: false },
      { size: 'L', inStock: false },
      { size: 'XL', inStock: false },
      { size: 'XXL', inStock: false },
    ],
    details: {
      productDetails: '• Regular fit\n• Crew neck\n• Exclusive graphic print\n• Premium soft cotton\n• Limited edition\n• Model is 5\'11" wearing size M',
      fabricCare: '• 100% Combed Cotton\n• Machine wash cold inside out\n• Tumble dry low\n• Do not bleach\n• Do not iron on graphic',
      sizeGuide: 'XS: Chest 36" / Length 26"\nS: Chest 38" / Length 27"\nM: Chest 40" / Length 28"\nL: Chest 42" / Length 29"\nXL: Chest 44" / Length 30"\nXXL: Chest 46" / Length 31"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 7,
    name: 'Nocturne Overshirt',
    price: 135,
    originalPrice: null,
    image: productShirt,
    images: [productShirt, productShirt, productShirt],
    isNew: false,
    inStock: true,
    category: 'Shirts',
    description: 'The perfect layer for nocturnal adventures. This heavyweight overshirt bridges the gap between jacket and shirt, offering versatility without compromise.',
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: false },
      { size: 'XXL', inStock: true },
    ],
    details: {
      productDetails: '• Oversized fit\n• Button-front with snap buttons\n• Two chest pockets\n• Side pockets\n• Heavyweight construction\n• Model is 6\'1" wearing size L',
      fabricCare: '• 100% Cotton Twill\n• Machine wash cold\n• Tumble dry low\n• Iron on medium heat\n• Dry clean safe',
      sizeGuide: 'XS: Chest 42" / Length 29"\nS: Chest 44" / Length 30"\nM: Chest 46" / Length 31"\nL: Chest 48" / Length 32"\nXL: Chest 50" / Length 33"\nXXL: Chest 52" / Length 34"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 8,
    name: 'Dark Matter Trousers',
    price: 155,
    originalPrice: null,
    image: productPants,
    images: [productPants, productPants, productPants],
    isNew: true,
    inStock: true,
    category: 'Pants',
    description: 'Tailored for the modern shadow. These trousers combine clean lines with subtle technical details, creating a silhouette that moves from studio to street.',
    sizes: [
      { size: '28', inStock: true },
      { size: '30', inStock: true },
      { size: '32', inStock: true },
      { size: '34', inStock: true },
      { size: '36', inStock: false },
      { size: '38', inStock: true },
    ],
    details: {
      productDetails: '• Straight fit with tapered leg\n• Hidden elastic waistband\n• Side seam pockets\n• Back welt pockets\n• Subtle logo detail\n• Model is 6\'0" wearing size 32',
      fabricCare: '• 65% Polyester, 33% Viscose, 2% Elastane\n• Machine wash cold\n• Hang dry\n• Iron on low heat\n• Dry clean recommended',
      sizeGuide: '28: Waist 28" / Inseam 31"\n30: Waist 30" / Inseam 31"\n32: Waist 32" / Inseam 32"\n34: Waist 34" / Inseam 32"\n36: Waist 36" / Inseam 32"\n38: Waist 38" / Inseam 33"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 9,
    name: 'Abyss Long Sleeve',
    price: 85,
    originalPrice: 110,
    image: productTshirt,
    images: [productTshirt, productTshirt, productTshirt],
    isNew: false,
    inStock: true,
    category: 'T-shirts',
    description: 'Dive deeper. This long sleeve tee features extended proportions and subtle branding, perfect for layering or standing alone in the darkness.',
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: true },
      { size: 'XXL', inStock: true },
    ],
    details: {
      productDetails: '• Relaxed fit\n• Long sleeves\n• Crew neck\n• Extended back hem\n• Subtle embroidered logo\n• Model is 6\'1" wearing size L',
      fabricCare: '• 100% Cotton\n• Machine wash cold\n• Tumble dry low\n• Do not bleach\n• Iron on medium heat',
      sizeGuide: 'XS: Chest 40" / Length 27"\nS: Chest 42" / Length 28"\nM: Chest 44" / Length 29"\nL: Chest 46" / Length 30"\nXL: Chest 48" / Length 31"\nXXL: Chest 50" / Length 32"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 10,
    name: 'Wraith Cargo Shorts',
    price: 95,
    originalPrice: null,
    image: productPants,
    images: [productPants, productPants, productPants],
    isNew: false,
    inStock: true,
    category: 'Shorts',
    description: 'Summer shadows. These cargo shorts bring the same utilitarian spirit to warmer months, with a relaxed fit and functional pockets for everyday carry.',
    sizes: [
      { size: '28', inStock: true },
      { size: '30', inStock: true },
      { size: '32', inStock: true },
      { size: '34', inStock: true },
      { size: '36', inStock: true },
      { size: '38', inStock: false },
    ],
    details: {
      productDetails: '• Relaxed fit\n• Above-knee length\n• Multiple cargo pockets\n• Elastic waistband with drawstring\n• Reinforced seams\n• Model is 6\'0" wearing size 32',
      fabricCare: '• 100% Cotton Ripstop\n• Machine wash cold\n• Tumble dry low\n• Do not bleach\n• Iron on low heat',
      sizeGuide: '28: Waist 28" / Inseam 9"\n30: Waist 30" / Inseam 9"\n32: Waist 32" / Inseam 10"\n34: Waist 34" / Inseam 10"\n36: Waist 36" / Inseam 10"\n38: Waist 38" / Inseam 11"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 11,
    name: 'Specter Vest',
    price: 130,
    originalPrice: null,
    image: productShirt,
    images: [productShirt, productShirt, productShirt],
    isNew: true,
    inStock: true,
    category: 'Vests',
    description: 'Hauntingly versatile. This utility vest adds dimension to any outfit with its structured silhouette and thoughtful pocket placement.',
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: true },
      { size: 'XXL', inStock: true },
    ],
    details: {
      productDetails: '• Regular fit\n• Button and zip closure\n• Multiple front pockets\n• Adjustable side tabs\n• Quilted lining\n• Model is 6\'1" wearing size L',
      fabricCare: '• Shell: 100% Nylon\n• Lining: 100% Polyester\n• Spot clean recommended\n• Machine wash cold if needed\n• Hang dry',
      sizeGuide: 'XS: Chest 38" / Length 24"\nS: Chest 40" / Length 25"\nM: Chest 42" / Length 26"\nL: Chest 44" / Length 27"\nXL: Chest 46" / Length 28"\nXXL: Chest 48" / Length 29"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
  {
    id: 12,
    name: 'Phantom Tank',
    price: 55,
    originalPrice: 70,
    image: productTshirt,
    images: [productTshirt, productTshirt, productTshirt],
    isNew: false,
    inStock: true,
    category: 'Tank tops',
    description: 'Minimal presence, maximum impact. This tank top strips away the excess while maintaining the quality and fit that defines the brand.',
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: false },
      { size: 'XXL', inStock: true },
    ],
    details: {
      productDetails: '• Relaxed fit\n• Dropped armholes\n• Curved hem\n• Subtle side logo\n• Extra soft cotton\n• Model is 6\'0" wearing size M',
      fabricCare: '• 100% Pima Cotton\n• Machine wash cold\n• Tumble dry low\n• Do not bleach\n• Iron on low heat',
      sizeGuide: 'XS: Chest 36" / Length 26"\nS: Chest 38" / Length 27"\nM: Chest 40" / Length 28"\nL: Chest 42" / Length 29"\nXL: Chest 44" / Length 30"\nXXL: Chest 46" / Length 31"',
      shippingReturns: '• Free shipping on orders over $150\n• Standard shipping: 5-7 business days\n• Express shipping: 2-3 business days\n• 30-day return policy\n• Items must be unworn with tags attached',
    },
  },
];

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getRelatedProducts = (currentProductId: number, limit: number = 4): Product[] => {
  const currentProduct = getProductById(currentProductId);
  if (!currentProduct) return allProducts.slice(0, limit);
  
  // Get products from the same category first, then fill with others
  const sameCategory = allProducts.filter(
    p => p.id !== currentProductId && p.category === currentProduct.category
  );
  const otherProducts = allProducts.filter(
    p => p.id !== currentProductId && p.category !== currentProduct.category
  );
  
  return [...sameCategory, ...otherProducts].slice(0, limit);
};
