import { Col, Row } from 'antd';

const Layout = ({ children }) => {
  return (
    <Row justify='center'>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        {children}
      </Col>
    </Row>
  )
}

export default Layout;