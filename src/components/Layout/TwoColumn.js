import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class LayoutTwoColumn extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col md={6}>
						{this.props.left}
					</Col>
					<Col md={6}>
						{this.props.right}
					</Col>
				</Row>
			</Container>

		)
	}
}