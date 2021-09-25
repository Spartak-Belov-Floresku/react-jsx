const FirstComponent = () => {
    return <h1>My very first component.</h1>
}

const NamedComponent = ({name}) => {
    return <p>My name is {name}</p>
}

const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Test name" />
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'));