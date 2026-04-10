"use client";

import { ChevronDown } from "lucide-react";
import ServiceItem from "./service-item";

interface Service {
  name: string;
  description: string;
  price: number;
}

interface ServiceCategoryProps {
  category: string;
  services: Service[];
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ServiceCategory({
  category,
  services,
  isExpanded,
  onToggle,
}: ServiceCategoryProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white border-[#005a5f]/20 shadow-md shadow-[#005a5f]/5">
      {/* Header */}
      <button
        type="button" // ✅ FIX 1 (CRITICAL)
        onClick={(e) => {
          e.preventDefault(); // ✅ FIX 2 (safe guard)
          e.stopPropagation();
          onToggle();
        }}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
        aria-expanded={isExpanded}
        aria-controls={`category-${category}`}
      >
        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#005a5f]" />

        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-medium text-[#005a5f]">{category}</h3>
        </div>

        <span className="mr-3 text-xs font-medium text-[#005a5f]">
          {services.length} services
        </span>

        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-[#005a5f]/50 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Body */}
      {isExpanded && (
        <div
          id={`category-${category}`}
          className="border-t border-border/30 bg-[#f8fafa] px-5 py-3"
        >
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}
