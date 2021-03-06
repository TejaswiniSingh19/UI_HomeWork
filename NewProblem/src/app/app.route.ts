import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { Table3Component } from './table3/table3.component';
import { Table2Component } from './table2/table2.component';
import { Table1Component } from './table1/table1.component';
import { Table4Component } from './table4/table4.component';
import { Routes, RouterModule }  from '@angular/router';



// Route config let's you map routes to components
const routes: Routes = <Routes>[

  {
    path: 'table1',
    component: Table1Component
  },

  {
    path: 'table2',
    component: Table2Component
  },
  {
    path: 'table3',
    component: Table3Component
  },

  {
    path: 'table4',
    component: Table4Component
  },


{
    path:"main",
    component:MaincontainerComponent
},
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
