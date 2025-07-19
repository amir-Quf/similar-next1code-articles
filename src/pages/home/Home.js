import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from '../../components/footer/Footer'

const Home = () => {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/articles")
      .then((res) => setArticles(res.data));
  }, []);
  return (
    <div>
      <MyNavbar />
      <Container>
        <h1
          style={{ textAlign: "center", padding: "20px", marginTop: '80px' }}
          className="lalezar"
        >
          صفحه مقالات
        </h1>
        <Row >
          {articles.map(article => {
            return(
            <Col style={{marginBottom: '20px', marginLeft: '0 !important', display: 'flex', alignItems: 'center', justifyContent: 'center'}} sm={12} md={6} lg={4} xl={3} key={article.id}>
              <ArticleItem {...article} />
            </Col>
            )
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
