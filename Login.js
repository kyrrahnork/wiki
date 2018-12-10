import React from 'react';
import { StyleSheet, Text, Image, View, Button, } from 'react-native';
import Expo from "expo";
import { androidClientId } from "./superSecretKey";
import { Permissions, Notifications } from 'expo';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signedIn: false,
            name: "",
            photoUrl: "",
            title: 'Hello World',
            body: 'Say something!',
        }
    }

    static navigationOptions = {
        header: null,
        headerTitle: 'Login', 
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

    async registerForPushNotifications() {
        const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    
        if (status !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          if (status !== 'granted') {
            return;
          }
        }
    
        const token = await Notifications.getExpoPushTokenAsync();
    
        this.subscription = Notifications.addListener(this.handleNotification);
    
        this.setState({
          token,
        });
      }
    
      sendPushNotification(token = this.state.token, title = this.state.title, body = this.state.body) {
        return fetch('https://exp.host/--/api/v2/push/send', {
          body: JSON.stringify({
            to: token,
            title: title,
            body: body,
            data: { message: `${title} - ${body}` },
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
      }
    
      handleNotification = notification => {
        this.setState({
          notification,
        });
      };
    

    render() {
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

