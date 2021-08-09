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
      <BoardGameView />

      <Footer />
    </div>
  );
}

export default App;

function makeArrayConsecutive2(statues) {
  let sortStatueArr = statues.sort((a, b) => a - b);
  console.log(sortedStatues);
  let count = 0;
  let i = sortedStatues[0];
  if (statues.length <= 1) {
    return 0;
  } else {
    while (i > sortedStatues.length - 1) {
      let diff = (sortedStatues[i + 1] = sortedStatues[1]);
      if (diff !== 1) {
        count = count + (diff - 1);
        i += 1;
        console.log(count, 'count');
      }
    }
  }
}
