import { Document, FilterState, SidenavFilter } from '@/types/document';

export const filterDocuments = (
  documents: Document[],
  filters: FilterState,
  sidenavFilter?: SidenavFilter
): Document[] => {
  let filteredDocs = [...documents];

  // Apply sidenav filter first
  if (sidenavFilter) {
    filteredDocs = applySidenavFilter(filteredDocs, sidenavFilter);
  }

  // Apply URL query filter (if different from sidenav filter)
  if (filters.filter && filters.filter !== sidenavFilter) {
    filteredDocs = applySidenavFilter(filteredDocs, filters.filter as SidenavFilter);
  }

  // Apply priority filter
  if (filters.priority) {
    filteredDocs = filteredDocs.filter(doc => doc.priority === filters.priority);
  }

  // Apply status filter
  if (filters.status) {
    filteredDocs = filteredDocs.filter(doc => doc.status === filters.status);
  }

  // Apply due date range filter
  if (filters.dueDateFrom || filters.dueDateTo) {
    filteredDocs = filteredDocs.filter(doc => {
      if (!doc.dueDate) return false;
      
      const docDueDate = new Date(doc.dueDate);
      let matchesFrom = true;
      let matchesTo = true;

      if (filters.dueDateFrom) {
        const fromDate = new Date(filters.dueDateFrom);
        matchesFrom = docDueDate >= fromDate;
      }

      if (filters.dueDateTo) {
        const toDate = new Date(filters.dueDateTo);
        matchesTo = docDueDate <= toDate;
      }

      return matchesFrom && matchesTo;
    });
  }

  // Apply date received (date created) range filter
  if (filters.dateReceivedFrom || filters.dateReceivedTo) {
    filteredDocs = filteredDocs.filter(doc => {
      const docCreatedDate = new Date(doc.dateCreated);
      let matchesFrom = true;
      let matchesTo = true;

      if (filters.dateReceivedFrom) {
        const fromDate = new Date(filters.dateReceivedFrom);
        matchesFrom = docCreatedDate >= fromDate;
      }

      if (filters.dateReceivedTo) {
        const toDate = new Date(filters.dateReceivedTo);
        matchesTo = docCreatedDate <= toDate;
      }

      return matchesFrom && matchesTo;
    });
  }

  return filteredDocs;
};

const applySidenavFilter = (documents: Document[], filter: SidenavFilter): Document[] => {
  switch (filter) {
    case 'keep-in-view':
      return documents.filter(doc => doc.isKeepInView);
    
    case 'assigned-to-me':
      return documents.filter(doc => doc.isAssignedToMe);
    
    case 'ongoing-review':
      return documents.filter(doc => doc.isOngoingReview);
    
    case 'due-today':
      return documents.filter(doc => doc.isDueToday);
    
    case 'updated-docs':
      return documents.filter(doc => doc.isUpdatedRecently);
    
    case 'completed-docs':
      return documents.filter(doc => doc.status === 'completed');
    
    case 'archived-docs':
      return documents.filter(doc => doc.status === 'archived');
    
    default:
      return documents;
  }
};

export const getActiveFiltersCount = (filters: FilterState, sidenavFilter?: SidenavFilter): number => {
  let count = 0;
  
  if (sidenavFilter) count++;
  if (filters.filter && filters.filter !== sidenavFilter) count++;
  if (filters.priority) count++;
  if (filters.status) count++;
  if (filters.dueDateFrom) count++;
  if (filters.dueDateTo) count++;
  if (filters.dateReceivedFrom) count++;
  if (filters.dateReceivedTo) count++;
  
  return count;
};

export const getActiveFiltersDisplay = (filters: FilterState, sidenavFilter?: SidenavFilter): Array<{label: string, key: string}> => {
  const activeFilters: Array<{label: string, key: string}> = [];
  
  if (sidenavFilter) {
    activeFilters.push({
      label: formatSidenavFilterLabel(sidenavFilter),
      key: 'sidenav'
    });
  }
  
  if (filters.filter && filters.filter !== sidenavFilter) {
    activeFilters.push({
      label: formatSidenavFilterLabel(filters.filter as SidenavFilter),
      key: 'filter'
    });
  }
  
  if (filters.priority) {
    activeFilters.push({
      label: `Priority: ${filters.priority}`,
      key: 'priority'
    });
  }
  
  if (filters.status) {
    activeFilters.push({
      label: `Status: ${filters.status}`,
      key: 'status'
    });
  }
  
  if (filters.dueDateFrom) {
    activeFilters.push({
      label: `Due from: ${filters.dueDateFrom}`,
      key: 'dueDateFrom'
    });
  }
  
  if (filters.dueDateTo) {
    activeFilters.push({
      label: `Due to: ${filters.dueDateTo}`,
      key: 'dueDateTo'
    });
  }
  
  if (filters.dateReceivedFrom) {
    activeFilters.push({
      label: `Received from: ${filters.dateReceivedFrom}`,
      key: 'dateReceivedFrom'
    });
  }
  
  if (filters.dateReceivedTo) {
    activeFilters.push({
      label: `Received to: ${filters.dateReceivedTo}`,
      key: 'dateReceivedTo'
    });
  }
  
  return activeFilters;
};

const formatSidenavFilterLabel = (filter: SidenavFilter): string => {
  const labels: Record<SidenavFilter, string> = {
    'keep-in-view': 'Keep in View',
    'assigned-to-me': 'Assigned To Me',
    'ongoing-review': 'Ongoing Review',
    'due-today': 'Due Today',
    'updated-docs': 'Updated Docs',
    'completed-docs': 'Completed Docs',
    'archived-docs': 'Archived Docs',
  };
  
  return labels[filter] || filter;
};