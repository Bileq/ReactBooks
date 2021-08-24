import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../App.css";

const BookDimensions = (props) => {
    const albumId = props.albumId;
    const id = props.id;

    return (
        <dl className="row">
            <Row className="pt-2">
                <Col md={{ span: 3, offset: 1 }} xs={{span: 4, offset: 1}}>
                    <dt>Height:</dt>
                </Col>
                <Col md={8} xs={7}>
                    <dd>{albumId}</dd>
                </Col>
            </Row>
            <Row className="pt-2">
                <Col md={{ span: 3, offset: 1 }} xs={{span: 4, offset: 1}}>
                    <dt>Width:</dt>
                </Col>
                <Col md={8} xs={7}>
                    <dd>{albumId}</dd>
                </Col>
            </Row>
            <Row className="pt-2">
                <Col md={{ span: 3, offset: 1 }} xs={{span: 4, offset: 1}}>
                    <dt>Thickness:</dt>
                </Col>
                <Col md={8} xs={7}>
                    <dd>{id}</dd>
                </Col>
            </Row>
        </dl>

    );
};

export default BookDimensions;
