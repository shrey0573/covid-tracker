import React, { Component } from 'react'
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : {},
             country: '',
        }
    }
    
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country: country
        })
        //fetch data
        //set data
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data : fetchedData });

        console.log(fetchedData);
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        )
    }
}
export default App;