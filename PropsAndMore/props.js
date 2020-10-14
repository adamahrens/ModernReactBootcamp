class Hello extends React.Component {
    static defaultProps = {
        shouldShout: true
    };

    render() {
        console.log(this.props);
        let greeting = this.props.shouldShout ? this.props.greeting.toUpperCase() : this.props.greeting
        return (
            <div>
                <h1 style={{ background: 'black', color: 'white' }}>{greeting}</h1>
                <p>Welcome {this.props.name} to the React component</p>
            </div>
        );
    }
}

class SlotMachine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props;
        let matching = s1 === s2 && s2 === s3;
        let result = matching ? "You win!" : "Better luck next time"
        let styles = matching ? { color: 'green' } : { color: 'red' };
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p style={styles}>{result}</p>
            </div>
        );
    }
}

class Casino extends React.Component {
    render() {
        const slots = [
            { id: 1, s1: "🍓", s2: "🥝", s3: "🍍" },
            { id: 2, s1: "🥝", s2: "🥝", s3: "🥝" },
            { id: 3, s1: "🍍", s2: "🥝", s3: "🍍" }
        ];

        return (
            <div>
                <h1>Welcome to the Casino</h1>
                { slots.map(s => <SlotMachine key={s.id} s1={s.s1} s2={s.s2} s3={s.s3} />)}
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Hello name="Adam" greeting="Hello there!" shouldShout={false} />
                <Hello name="Leroy Jenkins" greeting="Aloha" />
                <Hello name="Bruce" greeting="Good Day Sir!" address={{ "street": "4420 F St", "city": "Amana", "state": "IA" }} />
                <SlotMachine s1="🥝" s2="🍓" s3="🍍" />
                <SlotMachine s1="🍍" s2="🍓" s3="🍍" />
                <SlotMachine s1="🍓" s2="🍓" s3="🍓" />
                <Casino />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));