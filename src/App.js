import React from 'react';
import './sass/main.scss';
import ControlPanel from './components/ControlPanel';
import BoardGameView from './containers/BoardGameView';
import CanvasView from './containers/Canvas';
import ControlView from './containers/ControlsView';
import PresetView from './containers/PresetPanelView';
import RulesView from './containers/RulesView';
import { Container, Row, Col } from 'reactstrap';
import Header from './containers/Header/index';
import Footer from './containers/Footer/index';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container>
        <Row lg='2'>
          <Col>
            <ControlView />
            <PresetView />
          </Col>
          <Col>
            <CanvasView />
          </Col>
        </Row>
        <Row>
          <Col>
            <RulesView />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
