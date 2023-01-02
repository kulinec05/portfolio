import React from 'react';
import { Button, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const MainLayout = ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const navigate = useNavigate()

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const MenuHandler = ({ key }) => {
        if (key === '') {
            toggleCollapsed()
        } else {
            navigate(key)
        }
    }
    return (<>

        <div style={{ width: 256, }}>
            <Menu
                style={{ height: '100vh' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                onClick={MenuHandler}
                items={[
                    { label: 'PROFILE', key: '', title: 'PROFILE', icon: <MenuUnfoldOutlined /> },
                    { label: 'Home', key: 'home', title: 'Home', icon: <HomeOutlined /> },
                    { label: 'About', key: 'about', title: 'About', icon: <InfoCircleOutlined /> },
                    { label: 'Projects', key: 'projects', title: 'Projects', icon: <HomeOutlined /> }
                ]}
            />
        </div>
        <div>
            {children}
        </div>
    </>
    );
}

export default MainLayout;
