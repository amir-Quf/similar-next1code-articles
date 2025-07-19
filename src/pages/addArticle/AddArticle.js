import { Button, Container } from "react-bootstrap"
import MyNavbar from "../../components/navbar/MyNavbar"
import "./AddArticle.css"
import Form from 'react-bootstrap/Form'
import axios from "axios"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
const AddArticle = () => {

  const empetyHandler = () => {
    setproperties({
    title: '',
    desc: '',
    writter: '',
    category:  '',
    image: '',
    readingTime: ''
  })
}
  let [lenthDB, setLenthDB] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/articles')
    .then(res => setLenthDB(res.data))
  } , [])
  let [properties , setproperties] = useState({})

  const createArticleHandler = () => {
    const newArticle = {
      ...properties,
      id : (lenthDB.length + 1).toString(),
    }
    axios.post('http://localhost:4000/articles', newArticle)
    .then(
      Swal.fire({
        icon: 'success',
        title: 'مقاله با موفقیت ساخته شد',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      })
    )
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'مقاله ساخته نشد',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      })
  })
    empetyHandler()
  }
  const formHandler = (e) => {
    setproperties({...properties, [e.target.name] : e.target.value}) 
  }
  return (
    <div>
      <MyNavbar/>
      <Container style={{marginTop: '80px'}}>
      <Form>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control onChange={formHandler} value={properties.title} type="text" name="title" placeholder="عنوان مقاله را وارد کنید " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label>توضیح کوتاه</Form.Label>
        <Form.Control onChange={formHandler} value={properties.desc} type="text" name="desc" placeholder="یک توضیح کوتاه درباره مقاله وارد کنید " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label>نویسنده مقاله</Form.Label>
        <Form.Control onChange={formHandler} value={properties.writter} type="text" name="writter" placeholder="نام نویسنده مقاله را وارد کنید " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label>موضوع مقاله</Form.Label>
        <Form.Control onChange={formHandler} value={properties.category} type="text" name="category" placeholder="موضوع مقاله را وارد کنید " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label>عکس مقاله</Form.Label>
        <Form.Control onChange={formHandler} value={properties.image} type="text" name="image" placeholder="آدرس عکس مقاله را وارد کنید " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label>مدت زمان خواندن</Form.Label>
        <Form.Control onChange={formHandler} value={properties.readingTime} type="number" name="readingTime" />
      </Form.Group>
      <Button className="btn-submit" onClick={createArticleHandler} > ساخت مقاله </Button>
    </Form>
      </Container>
    </div>
  )
}

export default AddArticle
