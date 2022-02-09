import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  UserDeleteOutlined,
  ContactsOutlined,
  FileAddOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const {Content, Footer, Sider } = Layout;

const SideNav=(props)=>{
  const navigate = useNavigate()

// to navigate
  const handleClick = (data)=>{
    navigate(data.key)
  }
  // to get data
  const selector = useSelector(state=>state.reducers)
    return(
        <>
        
        <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 95,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu onClick={handleClick} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="/home" icon={<UserOutlined style={{fontSize:25}}/>}>
          <strong>{selector.details.firstname} {selector.details.lastname}</strong>
        </Menu.Item>
        <Menu.Item key="/postmissing" icon={<FileAddOutlined />} >
          Post Missing Person
        </Menu.Item>
        <Menu.Item key="/listmissing" icon={<VideoCameraOutlined />}>
          List Missing Person
        </Menu.Item>
        <Menu.Item key="/found" icon={<UploadOutlined />}>
          List Found Person
        </Menu.Item>
        <Menu.Item key="/submitlist" icon={<BarChartOutlined />}>
          Submitted List
        </Menu.Item>
        <Menu.Item key="/dltrequest" icon={<UserDeleteOutlined />}>
          Delete Request
        </Menu.Item>
        <Menu.Item key="/about" icon={< ContactsOutlined/>}>
          About Us
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 100,  }}>
      {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
         {props.children}
        
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Copyright ©2022 Created by Bistaify</Footer>
    </Layout>
  </Layout>
        </>
    )
}
export default SideNav;