import React, {Component} from 'react'
import Aux from './Auxiliary'
import Header from './Header'
import ContinentData from './Assets/continent.json'

class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            continent : ''
        }
        this.updateState = this.updateState.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    updateState = (event) => {
        this.setState({
            continent: event.target.value
        })
    }

    handleButtonClick(event) {
        event.preventDefault()
        if (this.state.continent !== undefined) {
            localStorage.setItem("continent_search", this.state.continent)
        }
        this.forceUpdate()
    }

    render() {
        const continent_search = localStorage.getItem("continent_search")
        const continent = ContinentData[continent_search]
        

        if (continent) {
            const continents = []
            for(let a in ContinentData) continents.push(a)
    
            let continentsNames = continent.top_five_countries.map((item) => {
                return (<ol>{item}</ol>)
            })

            return (
                <div>
                    <Aux>
                        <Header />
                        <form>
                            <input type="text" onChange={this.updateState} />
                            <button onClick={this.handleButtonClick} placeholder="Search a continent name">Search</button>
                        </form>
                        <h3>World's Pollution Rank</h3>
                        <p>{continent.pollution_rank}</p>
                        <h3>Most Polluted Countries</h3>
                        <p>{continentsNames}</p>
                    </Aux>
                </div>
            )
        } else {
            return (
                <div>
                    <Aux>
                        <Header />
                        <form>
                            <input type="text" onChange={this.updateState} />
                            <button onClick={this.handleButtonClick} placeholder="Search a continent name">Search</button>
                        </form>
                    </Aux>
                </div>
            )
        }
    }
}

export default Data