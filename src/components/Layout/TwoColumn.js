import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class LayoutTwoColumn extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col {...this.props.leftColSize}>
						{this.props.left}
					</Col>
					<Col {...this.props.rightColSize}>
						{this.props.right}
					</Col>
				</Row>
			</Container>

		)
	}
}