import React from 'react';
import { Button, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './news.css'


class SingleNews extends React.Component {

  render() {
    const { item } = this.props;
    return (
      <Col sm='4'>
        <Card id='news-card'>
          <CardImg top width="100%" src={item.urlToImage} alt={item.title} />
          <CardBody>
            <CardTitle><h2>{item.title}</h2></CardTitle>
            <CardText>{item.description}</CardText>
            <Link to={`/detail/${item.title}`}>
              <Button color="secondary" onClick={() => this.props.setSelectedItem(item)}>
              Full Article
              </Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default SingleNews;