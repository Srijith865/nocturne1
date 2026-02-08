import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ProductAccordionProps {
  productDetails: string;
  fabricCare: string;
  sizeGuide: string;
  shippingReturns: string;
}

const ProductAccordion = ({
  productDetails,
  fabricCare,
  sizeGuide,
  shippingReturns,
}: ProductAccordionProps) => {
  const sections = [
    { id: 'details', title: 'Product Details', content: productDetails },
    { id: 'fabric', title: 'Fabric & Care', content: fabricCare },
    { id: 'size', title: 'Size Guide', content: sizeGuide },
    { id: 'shipping', title: 'Shipping & Returns', content: shippingReturns },
  ];

  return (
    <Accordion type="single" collapsible className="w-full border-t border-border">
      {sections.map((section) => (
        <AccordionItem 
          key={section.id} 
          value={section.id}
          className="border-b border-border"
        >
          <AccordionTrigger className="text-sm font-medium tracking-wider uppercase hover:no-underline py-5 [&>svg]:text-muted-foreground">
            {section.title}
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ProductAccordion;
