import React from "react";

import Board from "@lourenci/react-kanban";
import { Row, Col } from "reactstrap";
import CardProjectBox from "./card-project-box";
import RenderCardTitle from "./render-card-title";

const UncontrolledBoard = (props) => {
  const content = props.board;
  return (
    <React.Fragment>
      <Row className="mb-4">
        <Col>
          <Board
            initialBoard={content}
            renderColumnHeader={({ title }) => (
              <RenderCardTitle title={title} />
            )}
            renderCard={(data, { dragging }) => (
              <CardProjectBox data={data} dragging={dragging}>
                {data}
              </CardProjectBox>
            )}
            onNewCardConfirm={(draftCard) => ({
              id: new Date().getTime(),
              ...draftCard,
            })}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UncontrolledBoard;
