import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native";
import * as Permissions from 'expo-permissions'; //권한 문제
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather'

const API_KEY = "7f0b2fee6a9129dba2c39eb73afaed55";

export default class extends React.Component {
    // view 는 div같은거 react에서 어떻게든 html/css 처럼 움직이는 JSX 와 다르게, 여기서는 px 같은거 하나 제대로
    // 동작하지 않는다. 환경이 매우 다르므로 주의.
    state = {
        isLoading: true
    };
    getWeather = async (latitude, longitude) => {
        const {
    data: {
        main: {
            temp
        },
        weather
    }
    
}
= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
        this.setState({
            isLoading:false,
            condition:weather[0].main,
            temp
        })
        console.log(temp);
        console.log(weather);
    };
    getLocation = async () => {
        try {
            // let {status} = await Permissions.askAsync(Permissions.LOCATION); 권한 문제. if
            // (status === 'granted') {     await Location.requestPermissionsAsync();
            const {coords: {latitude,longitude}} = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            //haze clouds clouds haz
            // const {latitude} = 37.4792289;
            // const {longitude} = 126.9778329;
        } catch (error) {
            alert(error);
            Alert.alert("Can't find you.", "So sad");
        } finally {}

    };
    componentDidMount() {
        // Location.getCurrentPosition()
        this.getLocation();
    }
    render() {
        const {isLoading, temp, condition } = this.state;
        return isLoading
            ? <Loading/>
            : <Weather temp={temp} condition={condition}/>;
    }
}
/*
    <View style={styles.container}>
      <View style={styles.yellowView}><Text>Hello</Text></View>
      <View style={styles.blueView}><Text>Hello</Text></View>
    </View>
*/
