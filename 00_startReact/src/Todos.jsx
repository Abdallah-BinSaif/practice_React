const person = {
    name: "Gregorio Y.Zara",
    theme: {
        backgroundColor: "black",
        color: "pink"
    },
};

function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" className="avatar" />
            <ul>
                <li>Improve the videophone</li>
                <li>Prpare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}

export default TodoList;