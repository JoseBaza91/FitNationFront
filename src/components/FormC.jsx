<<<<<<< HEAD
const FormC = () => {
  return <div>FormC</div>;
=======
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const FormC = ({ idPagina }) => {
  const navigate = useNavigate;
  const [formRegister, setFormRegister] = useState({});
  const [errores, setErrores] = useState({});

  const handleChange = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name]: ev.target.value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const { usuario, contrasenia, rcontrasenia, celular } = formRegister;

    if (!usuario) {
      setErrores({ ...errores, usuario: true });
    }
    if (!celular) {
      setErrores({ ...errores, celular: true });
    }
    if (!contrasenia) {
      setErrores({ ...errores, contrasenia: true });
    }
    if (!rcontrasenia) {
      setErrores({ ...errores, rcontrasenia: true });
    }

    // Validaciones de email
    if (usuario) {
      const usuario = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!usuario.test(usuario)) {
        setErrores({ ...errores, usuario: true });
        alert("El usuario debe tener  un correo electrónico válido");
      }
    }

    // Validación del celular
    if (!celular) {
      setErrores((prevErrors) => ({
        ...prevErrors,
        celular: "Número de celular vacío",
      }));
      valid = false;
    } else if (!/^\d{1,20}$/.test(celular)) {
      // Acepta solo números de hasta 20 dígitos
      setErrores((prevErrors) => ({
        ...prevErrors,
        celular:
          "Número de celular debe ser un número válido y no exceder los 20 caracteres",
      }));
      valid = false;
    }

    // Validacion contraseña
    if (contrasenia) {
      const contrasenia =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!contrasenia.test(contrasenia)) {
        setErrores({ ...errores, contrasenia: true });
        alert(
          "La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial"
        );
      }
    }

    // Validacion rep.contraseña
    if (rcontrasenia) {
      if (rcontrasenia !== contrasenia) {
        setErrores({ ...errores, rcontrasenia: true });
        alert("Las contraseñas no coinciden");
      }
    }

    if (
      formRegister.usuario &&
      formRegister.contrasenia &&
      formRegister.rcontrasenia
    ) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioExiste = usuarios.find(
        (usuario) => usuario.nombreUsuario === formRegister.usuario
      );

      if (usuarioExiste) {
        return alert("usuario vacio");
      }

      if (formRegister.contrasenia === formRegister.rcontrasenia) {
        const nuevoUsuario = {
          id: usuarios[usuarios.length - 1]?.id + 1 || 1,
          Usuario: formRegister.usuario,
          contrasenia: formRegister.contrasenia,
          celular: formRegister.celular,
          rol: "usuario",
          bloqueado: false,
          login: false,
        };

        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        setTimeout(() => {
          navigate("/iniciar-sesion");
        });
      } else {
        alert("Las contraseñas no son iguales");
      }
    }
  };

  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col sm={10} md={8} lg={6}>
            <Form>
              <h2 className="text-center  mb-4">Registrate en FITNATION</h2>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control
                  name="usuario"
                  type="text"
                  maxLength={45}
                  placeholder="FitNation@gmail.com"
                  onChange={handleChange}
                  className={
                    errores.usuario ? "form-control is-invalid" : "form-control"
                  }
                  required=""
                />
                {errores.usuario && (
                  <p className="text-danger"> E-Mail vacio</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCell">
                <Form.Label>Número de Celular</Form.Label>
                <Form.Control
                  name="celular"
                  type="text"
                  maxLength={20}
                  placeholder="Ingrese su numero de celular"
                  onChange={handleChange}
                  className={
                    errores.celular ? "form-control is-invalid" : "form-control"
                  }
                  required=""
                />
                {errores.celular && (
                  <p className="text-danger">{errores.celular}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  name="contrasenia"
                  type="password"
                  maxLength={45}
                  placeholder="contraseña"
                  onChange={handleChange}
                  className={
                    errores.contrasenia
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  required=""
                />
                {errores.contrasenia && (
                  <p className="text-danger"> contraseña vacia</p>
                )}
              </Form.Group>

              {idPagina === "registro" && (
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> Repetir Contraseña</Form.Label>
                  <Form.Control
                    name="rcontrasenia"
                    type="password"
                    maxLength={45}
                    placeholder="repetir contraseña"
                    onChange={handleChange}
                    className={
                      errores.rcontrasenia
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    required=""
                  />
                  {errores.rcontrasenia && (
                    <p className="text-danger">repetir contraseña vacia</p>
                  )}
                </Form.Group>
              )}

              <Button variant="warning" type="submit" onClick={handleClick}>
                {idPagina === "registro" ? "Registrarse" : "Iniciar Sesion"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
>>>>>>> registro
};

export default FormC;
