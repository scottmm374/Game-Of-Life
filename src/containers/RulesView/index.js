import React from 'react';
import { Card, CardTitle, CardText, Row, Col, List } from 'reactstrap';
const RulesView = () => {
  return (
    <>
      <Row className='rules'>
        <Col sm='6'>
          <Card body className='about-section'>
            <CardTitle tag='h2'> About </CardTitle>
            <CardText>
              The Game of Life originally created by John Conway is an infinite,
              two-dimenstional grid of cells, each of shich can only exist in
              one of two states, "Alive" or "Dead." Every cell interactcs with
              its neighbor, (the 8 cells immediatly sourounding the cell ).
            </CardText>
            <CardText>
              Can you keep your generations ticking? Try your own pattern on the
              board following the rules.
            </CardText>
          </Card>
        </Col>
        <Col sm='6'>
          <Card body className='rules-section'>
            <CardTitle tag='h2'> The Rules! </CardTitle>

            <CardText>
              With each "Birth or Death" the following happens:
            </CardText>

            <h6>When a cell is Dead it will be "Born"</h6>
            <List type='unstyled'>
              <ul>
                <li>If the cell has exactly three neighbors</li>
              </ul>

              <h6>When a cell is "Alive" it will "DIE"</h6>
              <ul>
                <li>If the cell has more then 3 neighbors.</li>
                <li>If the cell has less then 2 neighbors</li>
              </ul>
            </List>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RulesView;
