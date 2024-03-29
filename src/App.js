import React, {Component} from "react";
import {CardList} from "./Components/card-list/card-list.component";
import {SearchBox} from './Components/search-box/search-box.component';


import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    handleChange = e => {
        this.setState({searchField: e.target.value})
    }

    render() {

        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return (
            <div className="App">
                <h1>Monsters Universe</h1>
                <SearchBox
                    placeholder="Search monsters.."
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
                <div className="footer">Elhag Consulting - 2022</div>
            </div>
        )
    }
}

export default App;
