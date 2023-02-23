import { MenuItem } from '../shared/header/menu.model';

export const NAVBAR_MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    link: ''
  },
  {
    // TODO: Might be able to remove this route in the future
    id: 2,
    label: 'Availability',
    link: '/availability'
  },
  {
    id: 3,
    label: 'Property Details',
    link: '/property-details'
  },
  // {
  //   id: 22,
  //   label: 'Reviews',
  //   link: '/reviews',
  //   parentId: 21
  // },
  {
    id: 23,
    label: 'Blog',
    link: '/blog'
    // subItems: [
    //   {
    //     id: 24,
    //     label: 'Blog Grid',
    //     link: '/pages/blog-grid',
    //     parentId: 23
    //   },
    //   {
    //     id: 25,
    //     label: 'Single Post',
    //     link: '/pages/single-blog',
    //     parentId: 23
    //   }
    // ]
  },
  {
    id: 27,
    label: 'FQA',
    link: '/faq',
    parentId: 21
  },
  {
    id: 26,
    label: 'Contact',
    link: '/contact',
    parentId: 21
  }
];
