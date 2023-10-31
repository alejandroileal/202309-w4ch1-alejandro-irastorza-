import { GentlemanType } from '../types/types';

export const gentlemanData: GentlemanType[] = [
  {
    id: 1,
    name: 'Bertin Osborne',
    status: 'Alive',
    profession: 'Youtuber',
    twitter: '@osbourne',
    picture: 'bertin.jpg',
    alternativeText: 'Osbourne pointing at you',
    selected: true,
  },
  {
    name: 'The Farytale',
    status: 'RIP',
    profession: 'Influencer',
    twitter: 'pending',
    picture: 'fary.jpg',
    alternativeText: 'The Fary pointing at you',
    id: 2,
    selected: false,
  },
  {
    id: 3,
    name: 'Julius Churchs',
    status: 'Alive',
    profession: 'Java developer',
    twitter: '@julius_churchs',
    picture: 'julio.jpg',
    alternativeText: 'Churchs pointing at you',
    selected: true,
  },
  {
    id: 4,
    name: 'John',
    status: 'Alive',
    profession: 'Java developer',
    twitter: '@john_oficial',
    picture: 'john.jpg',
    alternativeText: 'Churchs pointing at you',
    selected: true,
  },
  {
    id: 5,
    name: 'Kitten Dev',
    status: 'Alive',
    profession: 'Javascript developer',
    twitter: '@kitten_dev',
    picture: 'kitten.jpeg',
    alternativeText: 'Churchs pointing at you',
    selected: true,
  },
];

console.log(gentlemanData);
