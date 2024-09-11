import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";

const LoginComponent = ({ setUserIsLogged }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    /* const response = await fetch(, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status !== 200) {
      const error = await response.json();
      enqueueSnackbar(error.message, { variant: "error" });
    }

    const loginData = await response.json();
    const decoded = jwtDecode(loginData.accessToken);
    localStorage.setItem("isUserLogged", true);
    localStorage.setItem("token", loginData.accessToken);

    setUser({
      token: loginData.accessToken,
      userInfo: decoded.fullName,
      isLogged: true,
    });

    navigate("/home"); */

    setUserIsLogged(true)
    navigate("/")
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
