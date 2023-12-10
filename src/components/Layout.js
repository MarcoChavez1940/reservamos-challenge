import { Col, Row } from 'antd';

const Layout = ({ children }) => {
  return (
    <Row justify='center'>
      <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }} xl={{ span: 8 }}>
        {children}
      </Col>
    </Row>
  )
}

export default Layout;