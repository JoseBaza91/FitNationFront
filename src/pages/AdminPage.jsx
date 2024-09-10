import { Container } from "react-bootstrap";
import TableC from "../components/TableC";

const AdminPage = () => {
  return (
    <>
    <h2 className="text-center">Hola, Administador</h2>
    <Container>
      <TableC />
    </Container>
    </>
  );
};

export default AdminPage;
