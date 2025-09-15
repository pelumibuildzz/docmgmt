"use client"

import { X } from "lucide-react";

interface ActiveFilter {
  label: string;
  key: string;
}

interface ActiveFiltersProps {
  filters: ActiveFilter[];
  onRemoveFilter: (key: string) => void;
  onClearAll: () => void;
}

const ActiveFilters = ({ filters, onRemoveFilter, onClearAll }: ActiveFiltersProps) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 text-[14px] border-[.5px] border-gray-300">
      <span className="text-primary font-medium text-[16px] px-3 py-4 border-r-[.5px] border-gray-300">Filters:</span>
      {filters.map((filter) => (
        <div
          key={filter.key}
          className="flex items-center gap-1 p-2 my-[11px] bg-primary-lighter text-primary border border-primary/20"
        >
          <span>{filter.label}</span>
          <button
            onClick={() => onRemoveFilter(filter.key)}
            className="hover:bg-primary/10 rounded-full p-0.5 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      ))}
      {filters.length > 1 && (
        <button
          onClick={onClearAll}
          className="text-[12px] text-gray hover:text-primary underline ml-2"
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default ActiveFilters;