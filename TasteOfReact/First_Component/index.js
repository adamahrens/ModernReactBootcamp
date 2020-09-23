class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>First Component</h1>
				<p>This is built in a class component</p>
				<p>This is not built with a functional component</p>
				<Pill name="CSS" />
				<Pill name="HTML" />
				<Pill name="REACT" />
				<Greeting name="Adam" />
			</div>
		);
	}
}

// Class Based Component
class Pill extends React.Component {
	render() {
		return (
			<div className='pill'>{this.props.name}</div>
		)
	}
}

// Functional Based Component
function Greeting(props) {
	return <h2>Good Day, {props.name}</h2>;
}

ReactDOM.render(<Hello />, document.getElementById('root'));
