import Home from '../pages/home';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';

export const routes = [
    {path: '/home', exact: true, component: Home},
    {path: '/page1', exact: true,  component: Page1},
    {path: '/page2', exact: true,  component: Page2},
    {path: '/page3', exact: true,  component: Page3}
];
