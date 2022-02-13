export interface TicketOverview {
  overview: IssueData[];
  unresolved: {
    feature_req: number;
    cust_res: number;
    dev_fix: number;
    pending: number;
  };
}
interface IssueData {
  id: string;
  title: string;
  content: string;
}

enum TicketCatergories {
  WAITING_FOR_FEATURE_REQ = 'Waiting on Feature Request',
  AWAITING_CUSTOMER_RESPONSE = 'Awaiting Customer Response',
  AWAITING_DEVELOPER_FIX = 'Awaiting Developer Fix',
  PENDING = 'Pending',
}
