import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    Thunderstorm: {
        iconName: "",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Drizzle: {
        iconName: "",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Rain: {
        iconName: "",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Snow: {
        iconName: "",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Atmosphere: {
        iconName: "",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Clear: {
        iconName: "",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Clouds: {
        iconName: "",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Mist: {
        iconName: "",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
        iconName: "",
        gradient: ["#4DA0B0", "#D39D38"]
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
                <View style={styles.halfContainer}></View>
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
    }
})
