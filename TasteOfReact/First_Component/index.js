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
			</div>
		);
	}
}

class Pill extends React.Component {
	render() {
		return (
			<div className='pill'>{this.props.name}</div>
		)
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
