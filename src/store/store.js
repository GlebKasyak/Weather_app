import { Component, Children, cloneElement } from "react";
import axios from "axios";
import { EventEmitter } from "events";

const ACCESS_KEY = "c9ee98b98718f20f87894f5337207f40";
const URL = "http://api.weatherstack.com/";

//https://weatherstack.com/
class Store extends Component {

    constructor(props) {
        super(props);
        //слушатель для событий
        this.eventEmitter = new EventEmitter();

        this.state = {
            isLoading: true,
            location: "Minsk",
        };
    }

    updateWeather = () => {
        axios.get(`${URL}current?access_key=${ACCESS_KEY}&query=${this.state.location}`)
            .then(res => {
                const { temperature, weather_descriptions, weather_icons } = res.data.current;
                const { name, country } = res.data.location;
                this.setState({
                    locationCity: name,
                    locationCountry: country,
                    temperature: temperature,
                    description: weather_descriptions[0],
                    iconURL: weather_icons[0],
                    isLoading: false
                })
            })
            .catch(err => {
                console.error("Cannot fetch Weather Data from API", err)
            });
    };

    componentDidMount() {

        this.updateWeather(this.state.location);

        this.eventEmitter.on("updateWeather", data => {
            this.setState({location: data}, () => {this.updateWeather()})
        })
    }

    render() {
        //передаём копию состояния каждому потомку(child) , находяшиеся в this.props.children
        return Children.map(this.props.children, child => {
            return cloneElement(child, {...this.state, eventEmitter: this.eventEmitter})
        })
    }
}

export default Store;