export interface Reply {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
}

export interface Minute {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  replies: Reply[];
}