"use client"

import { ChevronDown, ChevronLeft, CircleDot, Clock, CalendarCheck, GitPullRequestArrow, RefreshCcw, CheckCheck, ArrowUp } from "lucide-react"
import { useState } from "react"

interface FilterDropdownProps {
  onFilterChange?: (filter: string, value: string) => void;
}

const FilterDropdown = ({ onFilterChange }: FilterDropdownProps) => {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<string>('main'); // 'main' or filter type

  const filterOptions = [
    { value: "priority", label: "Priority", icon: CircleDot },
    { value: "due-date", label: "Due Date", icon: Clock },
    { value: "date-received", label: "Date Received", icon: CalendarCheck },
    { value: "status", label: "Status", icon: GitPullRequestArrow }
  ];
  selectedFilter;

  const subMenuOptions = {
    priority: [
      { value: "high", label: "High", icon: CircleDot, colorClass: "text-priority-high" },
      { value: "medium", label: "Medium", icon: CircleDot, colorClass: "text-priority-medium" },
      { value: "low", label: "Low", icon: CircleDot, colorClass: "text-priority-low" }
    ],
    "due-date": [
      { value: "from", label: "From", icon: CalendarCheck, colorClass: "text-gray" },
      { value: "to", label: "To", icon: CalendarCheck, colorClass: "text-gray" }
    ],
    "date-received": [
      { value: "from", label: "From", icon: CalendarCheck, colorClass: "text-gray" },
      { value: "to", label: "To", icon: CalendarCheck, colorClass: "text-gray" }
    ],
    status: [
      { value: "in-progress", label: "In Progress", icon: RefreshCcw, colorClass: "text-status-in-progress" },
      { value: "completed", label: "Completed", icon: CheckCheck, colorClass: "text-status-completed" },
      { value: "archived", label: "Archived", icon: ArrowUp, colorClass: "text-status-archived" }
    ]
  };

  const handleFilterSelect = (filter: { value: string; label: string }) => {
    setCurrentView(filter.value);
  };

  const handleSubMenuSelect = (mainFilter: string, subFilter: { value: string; label: string }) => {
    // For date filters, don't close the dropdown immediately - let user select dates
    if (mainFilter === 'due-date' || mainFilter === 'date-received') {
      console.log(`Date filter selected: ${mainFilter} - ${subFilter.label}`);
      if (onFilterChange) {
        onFilterChange(mainFilter, subFilter.value);
      }
      return;
    }
    
    setSelectedFilter(`${mainFilter}-${subFilter.value}`);
    setIsFilterDropdownOpen(false);
    setCurrentView('main');
    
    // Call the callback if provided
    if (onFilterChange) {
      onFilterChange(mainFilter, subFilter.value);
    }
    
    console.log(`Filtering by: ${mainFilter} - ${subFilter.label}`);
  };

  const handleDateChange = (mainFilter: string, dateType: string, date: string) => {
    console.log(`Date selected: ${mainFilter} - ${dateType} - ${date}`);
    
    // Call the callback if provided
    if (onFilterChange) {
      onFilterChange(`${mainFilter}-${dateType}`, date);
    }
  };

  const handleBackToMain = () => {
    setCurrentView('main');
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
        className="px-3 py-2 rounded-lg text-primary flex space-x-2 border-[.5px] hover:bg-primary-light transition-colors"
      >
        <span>Filter By</span>
        <ChevronDown className={`transition-transform ${isFilterDropdownOpen ? 'rotate-180' : ''}`} width={24} height={24} />
      </button>
      
      {isFilterDropdownOpen && (
        <div className="absolute z-10 right-0 w-48 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {currentView === 'main' ? (
            // Main filter menu
            filterOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => handleFilterSelect(option)}
                  className="w-full p-3 text-left hover:bg-gray-50 flex items-center justify-between text-[14px] font-normal"
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent width={16} height={16} className="text-gray" />
                    <span>{option.label}</span>
                  </div>
                  <ChevronDown className="-rotate-90" width={16} height={16} />
                </button>
              );
            })
          ) : (
            // Sub-menu view
            <div>
              {/* Back button */}
              <button
                onClick={handleBackToMain}
                className="w-full p-3 text-left hover:bg-gray-50 flex items-center space-x-3 text-[14px] font-normal border-b border-gray-200"
              >
                <ChevronLeft width={16} height={16} className="text-gray" />
                <span>Back</span>
              </button>
              
              {/* Sub-menu options */}
              {subMenuOptions[currentView as keyof typeof subMenuOptions]?.map((subOption) => {
                const SubIconComponent = subOption.icon;
                
                // For date filters, render date inputs
                if (currentView === 'due-date' || currentView === 'date-received') {
                  return (
                    <div
                      key={subOption.value}
                      className="p-3 flex items-center space-x-3 text-[14px] font-normal"
                    >
                      <SubIconComponent width={16} height={16} className={subOption.colorClass} />
                      <div className="flex flex-col space-y-1 flex-1">
                        <label className="text-[12px] text-gray font-medium">{subOption.label}:</label>
                        <input
                          type="date"
                          className="text-[12px] border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary"
                          onChange={(e) => handleDateChange(currentView, subOption.value, e.target.value)}
                        />
                      </div>
                    </div>
                  );
                }
                
                // For non-date filters, render buttons
                return (
                  <button
                    key={subOption.value}
                    onClick={() => handleSubMenuSelect(currentView, subOption)}
                    className="w-full p-3 text-left hover:bg-gray-50 flex items-center space-x-3 text-[14px] font-normal"
                  >
                    <SubIconComponent width={16} height={16} className={subOption.colorClass} />
                    <span>{subOption.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;