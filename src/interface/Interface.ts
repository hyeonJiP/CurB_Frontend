export interface Feed {
  id: number;
  user: string;
  group: string;
  title: String;
  description: String;
  visited: Number;
  medias: any;
}

export interface Comment {
  id: number;
  user: number;
  feed: number;
  description: string;
}

export interface FormValue {
  Id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone_number: string;
  email: string;
  gender: string;
  group: number;
  is_coach: boolean;
}

export interface UplaodFeedValue {}

export interface Message {
  title: string;
  content: string;
  date: Date;
}

export interface SidebarProps {
  sidebar: boolean;
  setSidebar: (dropDown: boolean) => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}
