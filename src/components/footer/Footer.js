import './Footer.css'
import { Col, Container, Row } from "react-bootstrap"
import './Footer.css'
import ZarinPal from '../../assets/images/ZarinPal.png'

const Footer = () => {
  return (
      <footer className="py-4">
            <Container>
                <Row>
                    <Col>
                        <h2>رسالت نکست وان کد</h2>
                        <p>نکست وان کد اینجا با هدف آموزش هایی ایجاد شده که , حس شیرین یاد گیری لذت بخش برنامه نویسی و طراحی وب رو تجربه میکنید</p>
                    </Col>
                    <Col style={{textAlign : 'left'}}>
                        <img src={ZarinPal}/>
                    </Col>
                </Row>
            </Container>
        </footer>
  )
}

export default Footer
