import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Rules = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <p className='titles-preset-rules'>Rules of Conways Game of Life</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className='death-birth'>
              DEATH: If a cell is ALIVE it will DIE:
            </span>
            <ul>
              {/* <h5>If a cell is Alive it will die if:</h5> */}
              <li>The cell has more then 3 neighbors.</li>
              <li>The cell has less then 2 neighbors</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className='death-birth'>
              BIRTH: If a cell is DEAD it will be BORN if:
            </span>

            <ul>
              {/* <h5>If a cell is Dead it will be born if:</h5> */}
              <li>
                The cell has exactly three neighbors, it will come to Life!
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className='gen'>
              <p>Generations: {props.gen}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rules;
