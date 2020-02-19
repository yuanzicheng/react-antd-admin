import Main from '../pages/main';
import Home from '../pages/home';
import Login from '../pages/login';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import NotFound from "../pages/not-found";

export const routes = [
    {path: '/login', component: Login},
    {
        path: '/',
        component: Main,
        children: [
            {path: '/home', exact: true, component: Home},
            {path: '/page1', exact: true,  component: Page1},
            {path: '/page2', exact: true,  component: Page2},
            {path: '/page3', exact: true,  component: Page3}
        ]
    },
    {path: '*', component: NotFound}
];
