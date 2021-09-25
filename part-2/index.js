const Tweet = ({username, name, date, message}) =>{
    const tweets = [];

    for(let i = 1; i < 4; i++){
        tweets.push(
            <li key={i-1}>
                <div>
                    Username: {username+i}
                    <div>
                        Name: {name+i}
                        <p>Message: {message+' '+i}</p>
                        <p>Date: {date}</p>
                    </div>
                </div>
            </li>
        )
    }

    return <ul>{tweets}</ul>
}

const App = () => (
    <div>
        <Tweet username="testUsername" name="testName" date="09.24.21" message="Test message" />
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'));