import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const LoginComponent = ({ setUserIsLogged }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setUserIsLogged(true);
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Form
            className="bg-dark p-5"
            onSubmit={handleSubmit((data) => onSubmit(data))}
          >
            <h2 className="text-white">Logearse</h2>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresar  email..."
                {...register("email", { required: "Este campo es requerido" })}
                isInvalid={errors?.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                isInvalid={errors?.password}
                type="password"
                placeholder="ingrese contraseña."
                {...register("password", {
                  required: "Este campo es requerido",
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="warning mt-4" type="submit">
              Logearse
            </Button>

            <p className="text-white m-0">
              no tienes cuenta? <Link to="/registro">Registrarse</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;
