import { Carousel, Container } from "react-bootstrap";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./About.css";
import Footer from "../../components/footer/Footer";
import AboutMe from "./aboutMe/AboutMe";
import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  let [articleDataState, setArticleDataState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/articles")
      .then((res) => setArticleDataState(res.data));
  }, []);
  return (
    <>
      <MyNavbar />
      <Container style={{marginTop : '50px'}}>
        <h1 className="py-5">درباره ما :</h1>
        <p style={{ padding: "1px 20px" }}>
          وب سایت next1code آموزش دوره های زیر را در اختیار شما هنرجوی گرامی
          قرار میدهد و آموزنده این دوره آقای میلاد بهرامی است و اطلاعات پروفایل
          این استاد را میتوانید در <a href="#about">اینجا</a> مشاهده کنید در این
          وب سایت دوره های آموزشی تحت عنوان یادگیری برامه نویسی طراحی سایت سمت
          کلاینت (front end) آموزش ببینید و از محتوا به صورت قانونی و مفید
          استفاده کنیدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
          و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
          و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <Container style={{ maxWidth: "550px" }}>
          <Carousel className="carousel-dark">
            {articleDataState.map((article) => {
              return (
                <Carousel.Item key={article.id}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="d-block"
                    style={{ height: "100%", width: '100%', objectFit: "cover" }}
                  />
                  <Carousel.Caption>
                    <h3>{article.title}</h3>
                    <p>{article.category}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
        <AboutMe />
      </Container>
      <Footer />
    </>
  );
};

export default About;
