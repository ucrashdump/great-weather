import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title:"Haze",
        subtitle:"Just don't go outside"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373b44", "#4286f4"],
        title:"Thunderstorm in the house",
        subtitle:"Actually, outside of the house"
    },
    Drizzle: {
        iconName: "",
        gradient: ["#89f7fe", "#66a6ff"],
        title:"Drizzle",
        subtitle:"Like rain"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00c6fb", "#005bea"],
        title:"Rain",
        subtitle:"For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title:"Snow",
        subtitle:"Do you wan to build a snowman"
    },
    Atmosphere: {
        iconName: "",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"Atmosphere",
        subtitle:"Just don't go outside"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title:"Clear",
        subtitle:"Go get your skin burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title:"Clouds",
        subtitle:"Cloudy"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Mist",
        subtitle:"It's like you hava no glasses on"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Dust",
        subtitle:"Thanks a lot China"
    }
}

export default function Weather({temp, condition}) {
    //stateless Component라서 클래스가 아닌 함수로.
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={{
                    padding: 15,
                    alignItems: "center",
                    borderRadius: 5
                }}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color={"white"}/>
                    <Text style={styles.temp}>{temp}℃</Text>
                </View>
                <View style={{...styles.halfContainer,...styles.textContainer}}>
                    <View>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                    </View>
                </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes
        .oneOfType([
        ])
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        fontWeight: "300",
        fontSize: 44,
        color: "white",
        marginBottom: 10
    },
    subtitle:{
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems: "flex-start"
    }
})
