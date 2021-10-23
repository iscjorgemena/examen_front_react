import './App.css';
import Layout from './components/layout/Layout';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphPriceEvolution from './components/GraphPriceEvolution';

function App() {
  return (
    <Layout>
      <Row>
        <Col>
          <h1>General Performance Analysis</h1>
        </Col>
      </Row>
      <Row>
        <Col sm='8'>
          <GraphPriceEvolution />
        </Col>

        <Col sm='4'>

        </Col>
      </Row>
    </Layout>
  );
}

export default App;
