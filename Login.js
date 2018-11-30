import React from 'react';
import { StyleSheet, Text, Image, View, Button, ScrollView } from 'react-native';
import Expo from "expo";
import { androidClientId } from "./superSecretKey";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signedIn: false,
            name: "",
            photoUrl: ""
        }
    }
    static navigationOptions = {
        header: null,
        headerTitle: <Login />,
    }

    login = () => {
        this.props.navigation.navigate("Start");
    }

    signIn = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: androidClientId,
                scopes: ["profile", "email"]
            })

            if (result.type === "success") {
                this.setState({
                    signedIn: true,
                    name: result.user.name,
                    photoUrl: result.user.photoUrl
                }, () => {
                    this.props.navigation.navigate("Start", this.state, this.name);
                });
            } else {
                console.log("cancelled")
            }
        } catch (e) {
            console.log("error", e)
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {this.state.signedIn ? (
                    <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
                ) : (
                        <LoginPage signIn={this.signIn} />
                    )}
            </View>
        )
    }
}

const LoginPage = props => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')} />
            <Text style={styles.header}>Wiki Education Dashboard</Text>
            <Button title="Sign in with Google" onPress={() => props.signIn()} />
        </View>
    )
}

const LoggedInPage = props => {
    return (

        <View style={styles.container}>
            <Text style={styles.header}>Welcome:{props.name}</Text>
            <Image style={styles.image} source={{ uri: props.photoUrl }} />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 25
    },
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    },
})

