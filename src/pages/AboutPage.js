import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
	return (
		<div>
			<Hero title={props.title} />

			<Content>
				<p>
					Hello, my name is Justin. I'm a full stack web developer with
					experience in Javascript, jQuery, PHP, ExpressJS, GraphQL, ReactJS,
					Redux, React Native, Jest, Enzyme, NodeJS, MongoDB, PostgreSQL, MySQL,
					ChartJS, Git, Heroku, Firebase, Babel, ESLint, Webpack, Parcel,
					Mapbox, LeafletJS, JSON Web Tokens and OAuth2.0.
				</p>

				<p>
					My dream is to one day start my own business and become an
					entrepreneur (currently working on some ideas).
				</p>

				<p>
					I'm constantly learning new things. currently those things include
					gaining more experience with MongoDB, ExpressJS, ReactJS and NodeJS.
				</p>

				<p>
					My latest completed project, Connection, is a social networking
					application. You can check it out{' '}
					<a
						href="https://github.com/justinjinsukkim312/connection"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					, or on the homepage. It is built with React, MongoDB, Express JS, and
					Node JS.
				</p>
				<p>
					My current project, Musik, is a Spotify clone application. You can
					check it out{' '}
					<a
						href="https://github.com/justinjinsukkim312/musik"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					. It is built with PHP, MySQL, and Javascript.
				</p>
				<p>
					When I'm not working, chances are you can see what I'm doing on my
					instagram story. Cooking, eating, growing plants or playing with
					Traitorous Bailey (golden retriever).{' '}
					<a
						href="https://www.instagram.com/jinsuk312/"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					.
				</p>
			</Content>
		</div>
	);
}

export default AboutPage;
