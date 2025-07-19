import "./EditArticle.css";
import { Button, Container } from "react-bootstrap";
import MyNavbar from "../../components/navbar/MyNavbar";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const EditArticle = () => {
  let articleId = parseInt(useParams().articleId);
  let [properties, setProperties] = useState({});
  let navigator = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/articles/${articleId}`)
      .then((res) => setProperties(res.data));
  }, []);

  const formEditHandler = (e) => {
    setProperties({ ...properties, [e.target.name]: e.target.value });
  };

  const editArticleHandler = () => {
    Swal.fire({
      title: "آیا میخواهید تغییرات اعمال شوند؟",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "آره اعمال شود!",
      cancelButtonText: "خیر منصرف شدم",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "تغییرات با موفقیت اعمال شد",
          text: "شما به صفحه اصلی منتقل شدید",
          icon: "success",
        });
        axios
          .put(`http://localhost:4000/articles/${articleId}`, properties)
          backToInfoArticle(articleId)
      }
    });
  };

  const backToInfoArticle = (articleId) => {
    navigator(`/article/${articleId}`);
  };

  return (
    <div>
      <MyNavbar />
      <Container className="mt-lg-5 pt-xxl-5">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              onChange={formEditHandler}
              value={properties.title}
              type="text"
              name="title"
              placeholder="عنوان مقاله را وارد کنید "
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              onChange={formEditHandler}
              value={properties.desc}
              type="text"
              name="desc"
              placeholder="یک توضیح کوتاه درباره مقاله وارد کنید "
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              onChange={formEditHandler}
              value={properties.writter}
              type="text"
              name="writter"
              placeholder="نام نویسنده مقاله را وارد کنید "
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              onChange={formEditHandler}
              value={properties.category}
              type="text"
              name="category"
              placeholder="موضوع مقاله را وارد کنید "
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              onChange={formEditHandler}
              value={properties.image}
              type="text"
              name="image"
              placeholder="آدرس عکس مقاله را وارد کنید "
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              onChange={formEditHandler}
              value={properties.readingTime}
              type="number"
              name="readingTime"
            />
          </Form.Group>
          <Button
            className="btn-cancel"
            onClick={() => backToInfoArticle(articleId)}
          >
            {" "}
            بازگشت به صفحه قبل
          </Button>
          <Button className="btn-submit" onClick={editArticleHandler}>
            {" "}
            ویرایش مقاله{" "}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditArticle;
