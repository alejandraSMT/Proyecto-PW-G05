import "./DocenteHorario.css"; //Hay un bug con los css, se debe comentar actulizar y volver a agregar para que se aplique apropiadamente el estilo
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { HorarioCard } from "../components/HorarioCard";

import React, { useState } from "react";

export function DocenteHorario() {
  const [DataFormulario, setDataFormulario] = useState({
    dia: "",
    horaInicio: "",
    horaFin: "",
    enlace: "",
  });

  const [Horarios, setHorarios] = useState([]);

  const handleInput = (Event) => {
    const { name, value } = Event.target;
    setDataFormulario((prevDataFormulario) => ({
      ...prevDataFormulario,
      [name]: value,
    }));
  };
  const [counter, setCounter] = useState(0);

  function increaseContador() {
    setCounter(counter + 1);
  }

  const handleAgregarClick = () => {
    console.log(DataFormulario);
    setDataFormulario({
      dia: "",
      horaInicio: "",
      horaFin: "",
      enlace: "",
    });
    setHorarios((prevHorarios) => [...prevHorarios, DataFormulario]);
    return (
      <HorarioCard
        dia={Horarios.dia}
        horaInicio={Horarios.horaInicio}
        horaFin={Horarios.horaFin}
      />
    );
  };

  /*const CardResultado = () => {
    Horarios.map((Horario, index) => (
      <HorarioCard
        key={index}
        contador={index + 1}
        dia={Horario.dia}
        horaInicio={Horario.horaInicio}
        horaFin={Horario.horaFin}
      />
    ));
  };*/

  return (
    <Container className="container">
      <Row>
        <Col>
          <Form.Group className="formulario">
            <Form.Label className="label">D&iacute;a de semana</Form.Label>
            <Form.Control
              className="control"
              type="text"
              placeholder="Lunes"
              name="dia"
              value={DataFormulario.dia}
              onChange={handleInput}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="formulario">
            <Form.Label className="label">Hora Inicio</Form.Label>
            <Form.Control
              className="control"
              type="text"
              placeholder="9:00 am"
              name="horaInicio"
              value={DataFormulario.horaInicio}
              onChange={handleInput}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="formulario">
            <Form.Label className="label">Hora Fin</Form.Label>
            <Form.Control
              className="control"
              type="text"
              placeholder="11:00 am"
              name="horaFin"
              value={DataFormulario.horaFin}
              onChange={handleInput}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="formulario">
            <Form.Label className="label">Enlace de sesi&oacute;n</Form.Label>
            <Form.Control
              className="control"
              type="text"
              placeholder="URL"
              name="enlace"
              value={DataFormulario.enlace}
              onChange={handleInput}
            />
          </Form.Group>
        </Col>
        <Col id="btnAgregar">
          <Button className="btnAgregar" onClick={handleAgregarClick}>
            Agregar
          </Button>
        </Col>
      </Row>
      <br></br>

      <HorarioCard
        contador="2"
        dia="Martes"
        horaInicio="04:00pm"
        horaFin="06:00pm"
      />
      <HorarioCard
        contador="3"
        dia="Miercoles"
        horaInicio="05:00pm"
        horaFin="08:00pm"
      />
    </Container>
  );
}
