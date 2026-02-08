import { cn } from '@/lib/utils';

interface PantsIconProps {
  className?: string;
}

const PantsIcon = ({ className }: PantsIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn('w-6 h-6', className)}
  >
    {/* Waistband */}
    <path d="M4 4h16v2H4z" />
    {/* Left leg */}
    <path d="M4 6v14l3 0V6" />
    {/* Right leg */}
    <path d="M17 6v14l3 0V6" />
    {/* Crotch area */}
    <path d="M7 6v6l5 0v-6" />
    <path d="M12 6v6l5 0v-6" />
    {/* Left leg bottom */}
    <path d="M4 20h3" />
    {/* Right leg bottom */}
    <path d="M17 20h3" />
  </svg>
);

export default PantsIcon;
