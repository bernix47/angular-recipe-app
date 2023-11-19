export interface ListItem {
  id: number;
  label: string;
  description: string;
  isChecked?: boolean;
}
export const ListItems = [
  {
    id: 1,
    label: '1 May (Mon)',
    description: 'May Day',
    isChecked: true
  },
  {
    id: 2,
    label: '12 Aug (Thu)',
    description: 'Sri Krishnajanmastmi',
    isChecked: true
  },
  {
    id: 3,
    label: '29 Sep (Fri)',
    description: 'Maha Navami, Ayudhyapooja',
    isChecked: false
  },
  {
    id: 4,
    label: '30 Sep (Fri)',
    description: 'maha sivarathri',
    isChecked: false
  },
  {
    id: 5,
    label: '18 Oct (Fri)',
    description: 'Deepavali',
    isChecked: false
  },
  {
    id: 6,
    label: '01 Dec (Mon)',
    description: 'Eid Meelad',
    isChecked: false
  },
  {
    id: 7,
    label: '25 Dec (Mon)',
    description: 'Christmas',
    isChecked: false
  },
  {
    id: 8,
    label: '01 Jan (Mon)',
    description: 'New Year',
    isChecked: false
  },
  {
    id: 9,
    label: '01 Mar (Wed)',
    description: 'Sri Rama Navami',
    isChecked: false
  },
  {
    id: 10,
    label: '15 Apr (Mon)',
    description: 'Bakrid',
    isChecked: false
  },
  {
    id: 11,
    label: '20 Apr (Tue)',
    description: 'Onam',
    isChecked: false
  },
  {
    id: 12,
    label: '30 Apr (Fri)',
    description: 'Dussehra',
    isChecked: false
  }
];

export const RecognitionValues: ListItem[] = [
  {id: 0, label: "Approachable", description: 'I work well with others.', isChecked: false},
  {id: 1, label: "Articulate", description: 'I can express myself well in front of groups.', isChecked: false},
  {id: 2, label: "Autonomous", description: 'I use initiative.', isChecked: false},
  {id: 3, label: "Competitive", description: 'I thrive under pressure.', isChecked: false},
  {id: 4, label: "Devoted", description: 'I’m committed towards company’s success.', isChecked: false},
  {id: 5, label: "Efficient", description: 'I have very quick turnover time.', isChecked: false},
  {id: 6, label: "Enthusiastic", description: 'I put my all into every project.', isChecked: false},
  {id: 7, label: "Independent", description: 'I need little direction.', isChecked: false},
]