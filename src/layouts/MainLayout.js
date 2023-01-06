import React from 'react';
import { Button, Col, Menu, Row } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';


const MainLayout = () => {
    const [collapsed, setCollapsed] = React.useState(true);
    const [selected, setSelected] = React.useState('home');
    const navigate = useNavigate()

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const MenuHandler = ({ key }) => {
        if (key === '') {
            toggleCollapsed()
        } else {
            navigate(key)
            setSelected(key)
        }
    }
    return (<Row
    >

        <Col  style={{ width: collapsed ? 80 : 256 }}>
            <Menu
                style={{ height: '100vh' }}
                defaultOpenKeys={['home']}
                mode="inline"
                theme="dark"
                selectedKeys={selected}
                inlineCollapsed={collapsed}
                onClick={MenuHandler}
                selectable={false}
                items={[
                    { label: 'PROFILE', key: '', icon: collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined /> },
                    { label: 'Home', key: 'home', title: 'Home', icon: <HomeOutlined /> },
                    { label: 'About', key: 'about', title: 'About', icon: <InfoCircleOutlined /> },
                    { label: 'Projects', key: 'projects', title: 'Projects', icon: <HomeOutlined /> }
                ]}
            />
        </Col>
        <Col offset={0.5}>
            <Outlet />
        </Col>
    </Row>
    );
}

export default MainLayout;
