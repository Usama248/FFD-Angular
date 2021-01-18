import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

//const MENUITEMS = [

 
 
//  {
//    label: 'Navigation',
//    main: [
//      {
//        state: 'dashboard',
//        short_label: 'D',
//        name: 'Dashboard',
//        type: 'link',
//        icon: 'ti-home'
//      },
//      {
//        state: 'user',
//        short_label: 'U',
//        name: 'Users',
//        type: 'link',
//        icon: 'ti-user'
//      },
//      {
//        state: 'projects',
//        short_label: 'P',
//        name: 'Projects',
//        type: 'link',
//        icon: 'ti-crown'
//      }
//    ]
//  }
//];


const MENUITEMS = [

    {
    //label: 'Navigation',
    label: '',
    main: [
      //{
      //  state: 'dashboard',
      //  short_label: 'D',
      //  name: 'Dashboard',
      //  type: 'link',
      //  icon: 'ti-home'
      //},
      {
        state: 'projects',
        short_label: 'P',
        name: 'View Projects',
        type: 'link',
        icon: 'ti-crown'
      },
      
      {
        state: 'pm',
        short_label: 'U',
        name: 'View Project managers',
        type: 'link',
        icon: 'ti-receipt'
      },
      {
        state: 'site',
        short_label: 'U',
        name: 'View Sites',
        type: 'link',
        icon: 'ti-direction-alt'
      },
      {
        state: 'clients',
        short_label: 'U',
        name: 'View Clients',
        type: 'link',
        icon: 'ti-id-badge'
      },
      {
        state: 'city',
        short_label: 'U',
        name: 'View Cities',
        type: 'link',
        icon: 'ti-id-badge'
      }
      //{
      //  state: '',
      //  short_label: 'U',
      //  name: 'View City/State',
      //  type: 'link',
      //  icon: 'ti-layout-grid2-alt'
      //},
      //{
      //  state: 'projects',
      //  short_label: 'P',
      //  name: 'Projects',
      //  type: 'link',
      //  icon: 'ti-crown'
      //},

      //{
      //  state: 'user',
      //  short_label: 'B',
      //  name: 'User Management',
      //  type: 'sub',
      //  icon: 'ti-user',
      //  children: [
      //    {
      //      state: 'pm',
      //      short_label: 'U',
      //      name: 'Project Managers',
      //      type: 'link',
      //      icon: 'ti-user'
      //    },
      //    {
      //      state: 'clients',
      //      short_label: 'U',
      //      name: 'Clients',
      //      type: 'link',
      //      icon: 'ti-user'
      //    }
      //    //{
      //    //  state: 'typography',
      //    //  name: 'Typography'
      //    //}
      //  ]
      //},

    ]
  },
  //{
  //  label: 'Navigation-old',
  //  main: [
  //    {
  //      state: 'dashboard',
  //      short_label: 'D',
  //      name: 'Dashboard',
  //      type: 'link',
  //      icon: 'ti-home'
  //    },
  //    {
  //      state: 'basic',
  //      short_label: 'B',
  //      name: 'Basic Components',
  //      type: 'sub',
  //      icon: 'ti-layout-grid2-alt',
  //      children: [
  //        {
  //          state: 'button',
  //          name: 'Button'
  //        },
  //        {
  //          state: 'typography',
  //          name: 'Typography'
  //        }
  //      ]
  //    },
  //    {
  //      state: 'notifications',
  //      short_label: 'n',
  //      name: 'Notifications',
  //      type: 'link',
  //      icon: 'ti-crown'
  //    },
  //  ],
  //},
  //{
  //  label: 'Tables',
  //  main: [
  //    {
  //      state: 'bootstrap-table',
  //      short_label: 'B',
  //      name: 'Bootstrap Table',
  //      type: 'link',
  //      icon: 'ti-receipt'
  //    }
  //  ]
  //},
  //{
  //  label: 'Map And Extra Pages ',
  //  main: [
  //    {
  //      state: 'map',
  //      short_label: 'M',
  //      name: 'Maps',
  //      type: 'link',
  //      icon: 'ti-map-alt'
  //    },
  //    {
  //      state: 'authentication',
  //      short_label: 'A',
  //      name: 'Authentication',
  //      type: 'sub',
  //      icon: 'ti-id-badge',
  //      children: [
  //        {
  //          state: 'login',
  //          type: 'link',
  //          name: 'Login',
  //          target: true
  //        }, {
  //          state: 'registration',
  //          type: 'link',
  //          name: 'Registration',
  //          target: true
  //        }
  //      ]
  //    },
  //    {
  //      state: 'user',
  //      short_label: 'U',
  //      name: 'User Profile',
  //      type: 'link',
  //      icon: 'ti-user'
  //    }
  //  ]
  //},
  //{
  //  label: 'Other',
  //  main: [
  //    {
  //      state: '',
  //      short_label: 'M',
  //      name: 'Menu Levels',
  //      type: 'sub',
  //      icon: 'ti-direction-alt',
  //      children: [
  //        {
  //          state: '',
  //          name: 'Menu Level 2.1',
  //          target: true
  //        }, {
  //          state: '',
  //          name: 'Menu Level 2.2',
  //          type: 'sub',
  //          children: [
  //            {
  //              state: '',
  //              name: 'Menu Level 2.2.1',
  //              target: true
  //            },
  //            {
  //              state: '',
  //              name: 'Menu Level 2.2.2',
  //              target: true
  //            }
  //          ]
  //        }, {
  //          state: '',
  //          name: 'Menu Level 2.3',
  //          target: true
  //        }, {
  //          state: '',
  //          name: 'Menu Level 2.4',
  //          type: 'sub',
  //          children: [
  //            {
  //              state: '',
  //              name: 'Menu Level 2.4.1',
  //              target: true
  //            },
  //            {
  //              state: '',
  //              name: 'Menu Level 2.4.2',
  //              target: true
  //            }
  //          ]
  //        }
  //      ]
  //    },
  //    //{
  //    //  state: 'simple-page',
  //    //  short_label: 'S',
  //    //  name: 'Simple Page',
  //    //  type: 'link',
  //    //  icon: 'ti-layout-sidebar-left'
  //    //}
  //  ]
  //}
  //, {
  //  label: 'Support',
  //  main: [
  //    {
  //      state: 'Upgrade To Pro',
  //      short_label: 'U',
  //      external: 'https://codedthemes.com/item/guru-able-admin-template/',
  //      name: 'Upgrade To Pro',
  //      type: 'external',
  //      icon: 'ti-layout-list-post',
  //      target: true
  //    }
  //  ]
  //}
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
