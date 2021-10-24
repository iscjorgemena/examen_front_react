import './App.css';
import Layout from './components/layout/Layout';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphPriceEvolution from './components/GraphPriceEvolution';
import GraphPresenceShare from './components/GraphPresenceShare';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <Layout>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <h2 className='title-main'>General Performance Analysis</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <GraphPriceEvolution />
        </Col>

        <Col xs={12} md={4} lg={4}>
          <GraphPresenceShare />
        </Col>
      </Row>
      <Row className='mt-40'>
        <Col xs={12} md={12} lg={12}>
          <ListProducts />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
