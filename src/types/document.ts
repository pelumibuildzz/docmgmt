export interface Document {
  id: string;
  docId: string;
  docName: string;
  fileName: string;
  fileId: string;
  dateCreated: string;
  lastUpdated: string;
  dueDate?: string;
  status: 'in-progress' | 'completed' | 'archived' | 'pending' | 'under-review';
  priority: 'high' | 'medium' | 'low';
  assignedTo?: string;
  category?: string;
  isKeepInView?: boolean;
  isAssignedToMe?: boolean;
  isOngoingReview?: boolean;
  isDueToday?: boolean;
  isUpdatedRecently?: boolean;
}

export interface FilterState {
  filter?: string; // URL query filter
  priority?: 'high' | 'medium' | 'low';
  status?: 'in-progress' | 'completed' | 'archived' | 'pending' | 'under-review';
  dueDateFrom?: string;
  dueDateTo?: string;
  dateReceivedFrom?: string;
  dateReceivedTo?: string;
}

export type SidenavFilter = 
  | 'keep-in-view'
  | 'assigned-to-me'
  | 'ongoing-review'
  | 'due-today'
  | 'updated-docs'
  | 'completed-docs'
  | 'archived-docs';