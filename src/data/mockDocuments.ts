import { Document } from '@/types/document';


// Helper function to get today's date
const getToday = (): string => {
  return new Date().toISOString().split('T')[0];
};

// Helper function to get yesterday's date with time
const getYesterdayWithTime = (): string => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(9, 45, 0, 0); // 9:45 AM
  return yesterday.toISOString();
};

// Helper function to get a time today
const getTodayWithTime = (hours: number, minutes: number): string => {
  const today = new Date();
  today.setHours(hours, minutes, 0, 0);
  return today.toISOString();
};

export const mockDocuments: Document[] = [
  {
    id: '1',
    docId: 'DOC-001',
    docName: 'Annual Budget Report 2024',
    fileName: 'budget_report_2024.pdf',
    fileId: 'FILE-001',
    dateCreated: '2024-01-15',
    lastUpdated: getYesterdayWithTime(), // Updated recently
    dueDate: getToday(), // Due today
    status: 'in-progress',
    priority: 'high',
    assignedTo: 'current-user',
    isKeepInView: true,
    isAssignedToMe: true,
    isOngoingReview: true,
    isDueToday: true,
    isUpdatedRecently: true,
  },
  {
    id: '2',
    docId: 'DOC-002',
    docName: 'Employee Handbook Update',
    fileName: 'employee_handbook.pdf',
    fileId: 'FILE-002',
    dateCreated: '2024-02-10',
    lastUpdated: getTodayWithTime(14, 30), // 2:30 PM today
    dueDate: '2024-12-20',
    status: 'completed',
    priority: 'medium',
    assignedTo: 'other-user',
    isKeepInView: false,
    isAssignedToMe: false,
    isOngoingReview: false,
    isDueToday: false,
    isUpdatedRecently: false,
  },
  {
    id: '3',
    docId: 'DOC-003',
    docName: 'Project Proposal',
    fileName: 'crm_proposal.pdf',
    fileId: 'FILE-003',
    dateCreated: '2024-03-05',
    lastUpdated: getYesterdayWithTime(), // Updated recently
    dueDate: '2024-12-25',
    status: 'under-review',
    priority: 'high',
    assignedTo: 'current-user',
    isKeepInView: true,
    isAssignedToMe: true,
    isOngoingReview: true,
    isDueToday: false,
    isUpdatedRecently: true,
  },
  {
    id: '4',
    docId: 'DOC-004',
    docName: 'Marketing Campaign Q1',
    fileName: 'marketing_q1.pdf',
    fileId: 'FILE-004',
    dateCreated: '2024-01-20',
    lastUpdated: getTodayWithTime(11, 15), // 11:15 AM today
    dueDate: '2024-12-15',
    status: 'archived',
    priority: 'low',
    assignedTo: 'other-user',
    isKeepInView: false,
    isAssignedToMe: false,
    isOngoingReview: false,
    isDueToday: false,
    isUpdatedRecently: false,
  },
  {
    id: '5',
    docId: 'DOC-005',
    docName: 'Security Policy Document',
    fileName: 'security_policy.pdf',
    fileId: 'FILE-005',
    dateCreated: '2024-02-01',
    lastUpdated: getTodayWithTime(16, 20), // 4:20 PM today
    dueDate: getToday(), // Due today
    status: 'pending',
    priority: 'high',
    assignedTo: 'current-user',
    isKeepInView: true,
    isAssignedToMe: true,
    isOngoingReview: false,
    isDueToday: true,
    isUpdatedRecently: false,
  },
  {
    id: '6',
    docId: 'DOC-006',
    docName: 'Financial Audit Report',
    fileName: 'audit_report_2024.pdf',
    fileId: 'FILE-006',
    dateCreated: '2024-03-15',
    lastUpdated: getYesterdayWithTime(), // Updated recently
    dueDate: '2024-12-30',
    status: 'in-progress',
    priority: 'medium',
    assignedTo: 'other-user',
    isKeepInView: false,
    isAssignedToMe: false,
    isOngoingReview: true,
    isDueToday: false,
    isUpdatedRecently: true,
  },
  {
    id: '7',
    docId: 'DOC-007',
    docName: 'Training Manual - New Hires',
    fileName: 'training_manual.pdf',
    fileId: 'FILE-007',
    dateCreated: '2024-01-10',
    lastUpdated: getTodayWithTime(8, 30), // 8:30 AM today
    dueDate: '2024-12-10',
    status: 'completed',
    priority: 'low',
    assignedTo: 'current-user',
    isKeepInView: false,
    isAssignedToMe: true,
    isOngoingReview: false,
    isDueToday: false,
    isUpdatedRecently: false,
  },
  {
    id: '8',
    docId: 'DOC-008',
    docName: 'Compliance Checklist 2024',
    fileName: 'compliance_2024.pdf',
    fileId: 'FILE-008',
    dateCreated: '2024-02-20',
    lastUpdated: getTodayWithTime(13, 45), // 1:45 PM today
    dueDate: '2024-12-18',
    status: 'under-review',
    priority: 'medium',
    assignedTo: 'current-user',
    isKeepInView: true,
    isAssignedToMe: true,
    isOngoingReview: true,
    isDueToday: false,
    isUpdatedRecently: false,
  },
];