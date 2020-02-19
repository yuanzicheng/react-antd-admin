import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import {history} from "../router";
import {routes} from "../router/routes";
import NotFound from "./not-found";

const {Header, Footer, Sider, Content} = Layout;

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            openKeys: [],
            selectedKeys: ['0'],
            menu: [
                {key: '0', name: 'Home', text: '首页', icon: 'home', path: '/home'},
                {key: '1', name: 'Menu1', text: '菜单1', icon: 'desktop', path: '/page1'},
                {key: '2', name: 'Menu2', text: '菜单2', icon: 'desktop', path: '/page2'},
                {key: '3', name: 'Menu3', text: '菜单3', icon: 'desktop', path: '/page3'},
                {
                    key: '4', name: 'Menu4', text: '菜单4', icon: 'desktop', sub: [
                        {key: '4-1', name: 'Menu4-1', text: '菜单4-1', icon: 'desktop', path: '/page4-1'},
                        {key: '4-2', name: 'Menu4-2', text: '菜单4-2', icon: 'desktop', path: '/page4-2'},
                        {key: '4-3', name: 'Menu4-3', text: '菜单4-3', icon: 'desktop', path: '/page4-3'},
                        {key: '4-4', name: 'Menu4-4', text: '菜单4-4', icon: 'desktop', path: '/page4-4'}
                    ]
                },
                {
                    key: '5', name: 'Menu5', text: '菜单5', icon: 'desktop', sub: [
                        {key: '5-1', name: 'Menu5-1', text: '菜单5-1', icon: 'desktop', path: '/page5-1'},
                        {key: '5-2', name: 'Menu5-2', text: '菜单5-2', icon: 'desktop', path: '/page5-2'},
                        {key: '5-3', name: 'Menu5-3', text: '菜单5-3', icon: 'desktop', path: '/page5-3'},
                        {key: '5-4', name: 'Menu5-4', text: '菜单5-4', icon: 'desktop', path: '/page5-4'}
                    ]
                }
            ]
        };
    }

    componentWillMount() {
        const path = history.location.pathname;
        this.high_light_keys(path);
    }

    render() {
        return (
            <Layout className="full">
                <Sider width="260" theme="light" className="side" collapsible collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse} breakpoint="lg">
                    <div className="brand">
                        <div className="brand-logo">R</div>
                        <div className="brand-title">eact Admin</div>
                        <div style={{clear: "both"}}/>
                    </div>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={this.state.selectedKeys} defaultOpenKeys={this.state.openKeys}
                          className="menu"
                        // openKeys={this.state.openKeys}
                        // onOpenChange={this.onOpenChange}
                        // onSelect={this.onSelect}
                    >
                        {
                            this.state.menu.map(
                                it => (
                                    it.sub
                                        ?
                                        <Menu.SubMenu key={it.key} title={<span><Icon type={it.icon}/><span>{it.text}</span></span>}>
                                            {it.sub.map(item => (<Menu.Item key={item.key} onClick={() => this.pageTo(item.path)}>{item.text}</Menu.Item>))}
                                        </Menu.SubMenu>
                                        :
                                        <Menu.Item key={it.key} onClick={() => {this.pageTo(it.path)}}>
                                            <Icon type={it.icon}/><span>{it.text}</span>
                                        </Menu.Item>
                                )
                            )
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header">
                    </Header>
                    <Content className="content">
                        <Switch>
                            {
                                routes.map(
                                    (item, index) => (
                                        <Route key={index} path={item.path} exact
                                               render={props => (<item.component {...props} />)}
                                        />
                                    )
                                )
                            }
                            <Route path="/" exact render={() => (<Redirect to='/home'/>)} />
                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                    <Footer className="footer">
                        &#0169; 2019-2020 www.your-company.com
                    </Footer>
                </Layout>
            </Layout>
        )
    }

    onSelect = ({key}) => {
        let subs = [];
        const parents = this.state.menu.filter(value => (value.sub));
        parents.forEach(it => {
            subs = subs.concat(...it.sub.map(sub => (sub.key)))
        });
        if (subs.indexOf(key) === -1) {
            this.setState({
                openKeys: []
            });
        }
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.menu.filter(value => (value.sub)).map(it => (it.key)).indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    pageTo(path) {
        history.push(path);
    }

    high_light_keys(path) {
        if (path === '/') {

        } else {
            const parents = this.state.menu.filter(it => (it.sub));
            parents.forEach((item) => {
                item.sub.forEach((it) => {
                    if (it.path === path) {
                        this.setState({
                            selectedKeys: [it.key],
                            openKeys: [item.key]
                        })
                    }
                })
            });
            this.state.menu.filter(it => (!it.sub)).forEach(item => {
                if (item.path === path) {
                    this.setState({
                        selectedKeys: [item.key],
                        openKeys: []
                    })
                }
            });
        }
    }
}

export default Main;