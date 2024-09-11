import Table from "react-bootstrap/Table";
const AmdinUserPage = ({ arrayUsuarios, idPagina }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Plan Contratado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jose</td>
            <td> Baza</td>
            <td>josebaza@gmail.com</td>
            <td>3814234567</td>
            <td>Plan Basico</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Juan Pablo</td>
            <td>de la Vega</td>
            <td>juanpabli@gmail.com</td>
            <td>3814234568</td>
            <td>Plan Premiun</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Alfredo</td>
            <td>Ruiz</td>
            <td>alfredoruiz@gmail.com</td>
            <td>3814234569</td>
            <td>Plan Platinuim</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default AmdinUserPage;
