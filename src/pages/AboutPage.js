import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
	return (
		<div>
			<Hero title={props.title} />

			<Content>
				<p>
					Who is Justin Kim? Committed, hard-working and at-heart, a family guy.
				</p>
				<p>
					I'm also a quick study born out of life experiences and the school of
					hard knocks. My aspiration is to create meaningful applications that
					can be used for various facets of life.
				</p>

				<p>
					My latest completed project, eCommerce, is a full stack application
					that sells clothing via Stripe API. You can check it out{' '}
					<a
						href="https://crwn-e-com.herokuapp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					, or on the homepage. It is built with React, Redux, React Hooks,
					Firebase, Session Storage, GraphQL and Stripe API.
				</p>
				<p>
					Another completed project, Connection, is a social networking
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
					Here's also a YouTube clone application, youtube-clone. You can check
					it out{' '}
					<a
						href="https://github.com/justinjinsukkim312/youtube-clone"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					. It is built with PHP, MySQL, and Javascript.
				</p>
				<p>
					I have 4 years of experience in...
					<ul>
						<li>HTML</li>
						<li>CSS/SASS/Bootstrap/MaterialUI</li>
						<li>Javascript/NodeJS/NPM/jQuery</li>
					</ul>
					3 Years of experience in...
					<ul>
						<li>React/Redux</li>
						<li>ExpressJS/GraphQL</li>
						<li>MySQL/MongoDB/PostgreSQL</li>
						<li>RESTful API/CRUD</li>
						<li>AJAX</li>
					</ul>
					2 Years of experience in...
					<ul>
						<li>Jest/Enzyme/Mocha/Karma</li>
						<li>Babel/ESLint/Webpack/Parcel</li>
						<li>Heroku/Firebase/Netlify</li>
						<li>JSON Web Tokens</li>
						<li>OAuth2.0</li>
						<li>Postman</li>
					</ul>
					1 Years of experience in...
					<ul>
						<li>PHP</li>
						<li>Python3</li>
						<li>Angular</li>
					</ul>
				</p>
				<p>
					When I'm not working, chances are you can see what I'm doing on my
					Instagram story. Cooking, eating, growing plants or playing with
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
