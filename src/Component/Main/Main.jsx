import React from "react";
import { Row, Col } from "react-bootstrap";
import Typist from "react-typist";
import Style from "./Main.css";
import Pic from "../../images/el_pic.jpg";

const Main = () => (
  <Row>
    <Col xs={12} md={6}>
      <div className={Style.disp}>
        <img className={Style.rotate90} src={Pic} alt="boohoo" />
      </div>
    </Col>
     

    <Col xs={12} md={6}>
    <div className={Style.top}>
      <p className={Style.tf}> Hi am, </p>
      <Typist className={Style.cent}
        cursor={{ blink:true,element: <i className="fas fa-i-cursor fa-3x" /> }}
      >
        <span className={Style.tf}>Your friendly neighbourhood Programmer</span>
        <Typist.Backspace count={10} delay={300} />
        <span className={Style.tf}>Web dev..</span>
        <Typist.Backspace count={9} delay={200} />
        <span className={Style.tf}>Developer..</span>
      </Typist>
      </div>
      
      <div>
        <hr />
        <p className={Style.name}>ELVIS PETER</p>
        <hr />
      </div>
      <div>

      </div>
    </Col>
  </Row>
);

export default Main;
