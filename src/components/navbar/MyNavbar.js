import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './MyNavbar.css'

const MyNavbar = () => {
  const expand = 'md'
  return (
    <div>
      <Navbar expand={expand} className="mb-3">
          <Container >
            <Navbar.Brand href="#" style={{fontFamily : 'Lalezar', fontSize : '26px'}}>نکست وان کد</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton style={{borderBottom: '1px solid #ccc', marginBottom:'20px'}}>
                <Offcanvas.Title style={{fontFamily: 'Lalezar', fontSize : '32px'}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  نکست وان کد
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className='nav-link' to='/'>صفحه اصلی</NavLink>
                  <NavLink className='nav-link' to='/add-article'>ساخت مقاله</NavLink>
                  <NavLink className='nav-link' to='/about'>درباره ما</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}

export default MyNavbar
