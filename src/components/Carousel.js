import React from 'react';

import Card from '../components/Card';

import musik from '../assets/images/musik.png';
import github from '../assets/images/github.jpg';
import connection from '../assets/images/connection.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 0,
					title: 'Musik',
					subTitle: 'Spotify clone *currently under production*',
					imgSrc: musik,
					link: 'https://devgrub.com',
					selected: false
				},
				{
					id: 1,
					title: 'Justin Kim',
					subTitle: 'Github Page',
					imgSrc: github,
					link: 'https://github.com/justinjinsukkim312',
					selected: false
				},
				{
					id: 2,
					title: 'Connection',
					subTitle: 'A social network for an purpose',
					imgSrc: connection,
					link: 'https://github.com/garrettlove8/evverest',
					selected: false
				}
			]
		};
	}

	handleCardClick = (id, card) => {
		let items = [...this.state.items];

		items[id].selected = items[id].selected ? false : true;

		items.forEach(item => {
			if (item.id !== id) {
				item.selected = false;
			}
		});

		this.setState({
			items
		});
	};

	makeItems = items => {
		return items.map(item => {
			return (
				<Card
					item={item}
					click={e => this.handleCardClick(item.id, e)}
					key={item.id}
				/>
			);
		});
	};

	render() {
		return (
			<Container fluid={true}>
				<Row className="justify-content-around">
					{this.makeItems(this.state.items)}
				</Row>
			</Container>
		);
	}
}

export default Carousel;
