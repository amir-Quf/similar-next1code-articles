import './ArticleItem.css'
import { Card } from 'react-bootstrap'
import { BiTimeFive } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import img from "../../assets/images/article1.webp"
import { Link } from 'react-router-dom';
const ArticleItem = (props) => {
  return (
    <Card className='card-container'>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className='py-2'>{props.category}</Card.Title>
          <Card.Text>
            {props.desc}
          </Card.Text>
          <Link to={`/article/${props.id}`}>
            <span className='read-more'>
            <span>ادامه مقاله</span>
            <TiArrowLeftThick className='arrow-icon'/>
            </span>
          </Link>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between align-items-center py-3'>
          <p className='article-footer-text'>نویسنده مقاله : {props.writter}</p>
          <p className='article-footer-text'> <BiTimeFive/> {props.readingTime} دقیقه</p>
        </Card.Footer>
      </Card>
  )
}

export default ArticleItem
