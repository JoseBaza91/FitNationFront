import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormsC = ({ idPagina }) => {
  return ( 
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
        <Form.Text className="text-muted">
          Su correo electrónico no se compartirá nunca con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Control className="mb-3" type="text" placeholder="Ingrese su nombre y apellido" />

      { 
        idPagina !== 'detalles' && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
        )
      }
      <Form.Select className="mb-3" aria-label="Default select example">
      <option>Seleccionar su plan</option>
      <option value="1">Básico</option>
      <option value="2">Premium</option>
      <option value="3">Platinum</option>
    </Form.Select>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </>
  );
};

export default FormsC;