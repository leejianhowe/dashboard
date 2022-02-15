export interface TicketOverview {
  overview: IssueData[];
  unresolved: CardData[];
  chart: {
    stats: CardData[];
  };
}
export interface CardData {
  title: string;
  value: string;
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
