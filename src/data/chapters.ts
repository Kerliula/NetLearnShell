import type { Chapter } from '../types/chapter'

export const chapters: Chapter[] = [
  {
    id: 1,
    title: 'Introduction',
    progress: 100,
    subChapters: [
      { id: '1.1', title: 'What is the internet?' },
      { id: '1.2', title: 'Network edge' },
      { id: '1.3', title: 'Network core' },
      { id: '1.4', title: 'Delay, loss & throughput' },
      { id: '1.5', title: 'Protocol layers' },
    ],
  },
  {
    id: 2,
    title: 'History',
    progress: 100,
    subChapters: [
      { id: '2.1', title: 'Early packet switching' },
      { id: '2.2', title: 'ARPANET' },
      { id: '2.3', title: 'Birth of the internet' },
    ],
  },
  {
    id: 3,
    title: 'App layer',
    progress: 100,
    subChapters: [
      { id: '3.1', title: 'Principles of network apps' },
      { id: '3.2', title: 'HTTP' },
      { id: '3.3', title: 'DNS' },
      { id: '3.4', title: 'SMTP' },
      { id: '3.5', title: 'P2P applications' },
    ],
  },
  {
    id: 4,
    title: 'Transport',
    progress: 35,
    subChapters: [
      { id: '4.1', title: 'Transport layer services' },
      { id: '4.2', title: 'Multiplexing & demultiplexing' },
      { id: '4.3', title: 'UDP' },
      { id: '4.4', title: 'Reliable data transfer' },
      { id: '4.5', title: 'TCP' },
      { id: '4.6', title: 'Congestion control' },
    ],
  },
  {
    id: 5,
    title: 'Network layer',
    progress: 0,
    subChapters: [
      { id: '5.1', title: 'Overview' },
      { id: '5.2', title: 'Router internals' },
      { id: '5.3', title: 'IPv4 & IPv6' },
      { id: '5.4', title: 'Routing algorithms' },
      { id: '5.5', title: 'BGP' },
    ],
  },
  {
    id: 6,
    title: 'Link layer',
    progress: 0,
    subChapters: [
      { id: '6.1', title: 'Link layer services' },
      { id: '6.2', title: 'Error detection' },
      { id: '6.3', title: 'Multiple access protocols' },
      { id: '6.4', title: 'Ethernet & switches' },
    ],
  },
  {
    id: 7,
    title: 'Wireless',
    progress: 0,
    subChapters: [
      { id: '7.1', title: 'Wireless links' },
      { id: '7.2', title: 'WiFi — 802.11' },
      { id: '7.3', title: 'Cellular networks' },
      { id: '7.4', title: 'Mobility management' },
    ],
  },
  {
    id: 8,
    title: 'Security',
    progress: 0,
    subChapters: [
      { id: '8.1', title: 'Principles of cryptography' },
      { id: '8.2', title: 'Authentication' },
      { id: '8.3', title: 'TLS' },
      { id: '8.4', title: 'Firewalls & IDS' },
    ],
  },
]
