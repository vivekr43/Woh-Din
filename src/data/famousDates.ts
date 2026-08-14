export interface FamousDatePreset {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  name: string;
  dateStr: string; // YYYY-MM-DD
  city: string;
  time?: string;
  badge: string;
}

export const FAMOUS_INDIAN_DATES: FamousDatePreset[] = [
  {
    id: 'independence-1947',
    title: "India's Independence Day",
    subtitle: "Tryst with Destiny at Midnight",
    icon: "🇮🇳",
    name: "Midnight's Child",
    dateStr: "1947-08-15",
    city: "Delhi",
    time: "00:00",
    badge: "15 Aug 1947"
  },
  {
    id: 'worldcup-1983',
    title: "1983 Cricket World Cup Win",
    subtitle: "Kapil Dev Lifts the Trophy",
    icon: "🏏",
    name: "Kapil's Devils",
    dateStr: "1983-06-25",
    city: "Mumbai",
    time: "19:30",
    badge: "25 Jun 1983"
  },
  {
    id: 'worldcup-2011',
    title: "2011 Cricket World Cup Win",
    subtitle: "Dhoni Finishes It Off in Style",
    icon: "🏆",
    name: "World Champions",
    dateStr: "2011-04-02",
    city: "Mumbai",
    time: "22:30",
    badge: "02 Apr 2011"
  },
  {
    id: 'chandrayaan3-2023',
    title: "Chandrayaan-3 Moon Landing",
    subtitle: "India Reaches Lunar South Pole",
    icon: "🚀",
    name: "Shiv Shakti Point",
    dateStr: "2023-08-23",
    city: "Bengaluru",
    time: "18:04",
    badge: "23 Aug 2023"
  },
  {
    id: 'ddlj-1995',
    title: "DDLJ Theatrical Release",
    subtitle: "Longest Running Indian Film",
    icon: "🎬",
    name: "Raj & Simran Era",
    dateStr: "1995-10-20",
    city: "Mumbai",
    time: "15:00",
    badge: "20 Oct 1995"
  }
];
