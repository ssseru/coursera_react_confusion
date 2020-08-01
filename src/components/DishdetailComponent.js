import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Dishdetail extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDish(selectedDish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg
            width="100%"
            src={selectedDish.image}
            alt={selectedDish.name}
          />
          <CardBody>
            <CardTitle>{selectedDish.name}</CardTitle>
            <CardText>{selectedDish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(selectedDish) {
    const comments = selectedDish.comments.map((comment) => {
      return (
        <div>
          <li>
            <p>{comment.comment}</p>
            <p>
              --{comment.author} {comment.date}
            </p>
          </li>
        </div>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{comments}</ul>
      </div>
    );
  }

  render() {
    if (this.props.selectedDish === null) {
      return <div></div>;
    } else {
      return (
        <div className="row">
          {this.renderDish(this.props.selectedDish)}
          {this.renderComments(this.props.selectedDish)}
        </div>
      );
    }
  }
}

export default Dishdetail;
