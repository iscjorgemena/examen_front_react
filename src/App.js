import './App.css';
import Layout from './components/layout/Layout';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphPriceEvolution from './components/GraphPriceEvolution';
import GraphPresenceShare from './components/GraphPresenceShare';

function App() {
  return (
    <Layout>
      <Row>
        <Col>
          <h2>General Performance Analysis</h2>
        </Col>
      </Row>
      <Row>
        <Col sm='8'>
          <Row>
            <Col sm='12'>
              <h3>Price Evolution</h3>
            </Col>
          </Row>
          <Row>
            <Col sm='12'>
              <GraphPriceEvolution />
            </Col>
          </Row>
        </Col>

        <Col sm='4'>
          <Row>
            <Col sm='12'>
              <h3>Presence Share by Product</h3>
            </Col>
          </Row>
          <Row>
            <Col sm='12'>
              <GraphPresenceShare />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
