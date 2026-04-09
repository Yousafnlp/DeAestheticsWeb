"use client";

import { Plus } from "lucide-react";

interface Service {
  name: string;
  description: string;
  price: number;
}

interface ServiceItemProps {
  service: Service;
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="group flex items-center justify-between  border-[#005a5f]/20 px-2 py-4  transition-all duration-300">
      <div className="flex-1">
        <h4 className="font-semibold text-primary transition-colors duration-200">
          {service.name}
        </h4>
        {service.description && (
          <p className="mt-2 text-sm text-muted-foreground">
            {service.description}
          </p>
        )}
      </div>
      <div className="ml-6 text-right flex-shrink-0">
        <p className="text-2xl font-bold text-[#005a5f]">
          {service.price.toLocaleString()}/-
        </p>
      </div>
    </div>
  );
}
