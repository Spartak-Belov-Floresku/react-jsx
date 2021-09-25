const Person = ({name, age, hobbies}) => {
    const p = <p>The person name is {name.length < 8? name: name.substr(0,7)+"..."} and the age {age}.</p>;
    const h3 = <h3>{ age >= 18 ? "Please go vote": "You must be 18"}!</h3>;

    return(
        <div>
            {p}
            {h3}
            <ul>
                {hobbies.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
        </div>
    );

}

const Alert = ({children}) => {
    return(
        <div className="alert alert-success" role="alert">
            {children}
        </div>
    );
}

const App = () => (
    <div>
        <Alert>
            <Person name="Thomas" age={55} hobbies={['hiking', 'fishing', 'music']} />
            <Person name="Nicholas" age={17} hobbies={['gaming', 'eating', 'relaxing']} />
        </Alert>
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'));