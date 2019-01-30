import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardImg, Button, Col, CardBody, CardTitle, CardText, CardSubtitle, CardLink, Row } from 'reactstrap';
import './news.css'
import randomIcon from '../images/random.png'
import TimeAgo from 'react-timeago'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

class NewsDetails extends React.Component {

  state = {
    relevantNews: []
  }

  componentDidMount() {
    const items = this.props.news
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    this.setState({ relevantNews: items });
  }

  setRandomItem = () => {
    const { news, handleRandomItem } = this.props
    const item = news[Math.floor(Math.random() * news.length)];
    handleRandomItem(item);
  }

  render() {
    const { item } = this.props;
    const { relevantNews } = this.state;

    return (
      <Container>
        <Row>
          <Card id='news-details'>
            <div className='icon'>
                  <abbr title='Click for random news'>
              <Link to='/news/random'>
                <Button color="" onClick={this.setRandomItem}>
                    <img src={randomIcon} alt='random icon' />
                </Button>
              </Link>
                  </abbr>
            </div>
            <CardBody>
              <CardTitle><h1>{item.title}</h1></CardTitle>
              <Row id='row-time-icon'>
                <div className='time-ago'>
                  <span role='img' aria-label='Three O’Clock'>🕒 </span>
                  <TimeAgo date={item.publishedAt} />
                </div>
                <div id='share-icons'>
                  <FacebookShareButton size={32} url={item.url}><FacebookIcon size={32} round={true} />
                  </FacebookShareButton >
                  <LinkedinShareButton size={32} url={item.url}><LinkedinIcon size={32} round={true} />
                  </LinkedinShareButton >
                  <TwitterShareButton size={32} url={item.url}><TwitterIcon size={32} round={true} />
                  </TwitterShareButton >
                </div>
              </Row>
              <div className='news-details-img'>
                <img src={item.urlToImage} alt={item.title} />
              </div>
              <div className='news-details-text'>
                <CardSubtitle><h4>{item.description}</h4></CardSubtitle>
                <CardText>{item.content}</CardText>
                <CardLink href={item.url} target="_blank">{item.url}</CardLink>
              </div>
            </CardBody>
          </Card>
        </Row>        
        <Row>
          {relevantNews.map(item =>
            <Col id='relevant-news' sm='4' key={item.url}>
              <Card id='news-card'>
                <CardImg top width="100%" src={item.urlToImage} alt={item.title} />
                <CardBody>
                  <CardTitle><h2>{item.title}</h2></CardTitle>
                  <CardText>{item.description}</CardText>
                  <Link to={`/detail/${item.title}`}>
                    <Button color="" onClick={() => this.props.setSelectedItem(item)}>
                      Full Article
                      </Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>)}
        </Row>
      </Container>
    );
  }
}

export default NewsDetails
