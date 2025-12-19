
export interface ServiceItem {
  id: number;
  title: string;
  items: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string; // Fallback string
  label: string;
  subLabel?: string;
  // Animation props
  numericValue: number;
  suffix?: string;
  isDecimal?: boolean;
}
