export class Message {
  myRenderer;
  constructor(public content: string, public sentBy: string) {}
}

export interface BotResponse {
  conversation_id?: string;
  messageid?: string;
  session_id?: string;
  user_id?: string;
  user_message?: string;
  serra_response?: any;
}
