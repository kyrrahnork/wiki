import React from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    View,
    Image,
} from 'react-native';
import { Permissions, Notifications } from 'expo';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            notification: null,
            title: 'WikiEDU',
            body: "Welcome to WikiEDU Notifications!",
        };
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

    handleFunction() {
        this.registerForPushNotifications();
        this.sendPushNotification();
    }



    render() {
        return (

            <KeyboardAvoidingView style={styles.container} behavior="position">
                <TouchableOpacity
                    onPress={() => this.handleFunction()}
                    style={styles.touchable}>
                    <Text style={styles.text}>Press TWICE To Setup Campaign Notifications!</Text>
                </TouchableOpacity>
                {this.state.token ? (
                    <View>
                    </View>
                ) : null}
                {this.state.notification ? (
                    <View>
                    </View>
                ) : null}
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        padding: 8,
    },
    text: {
        paddingBottom: 2,
        padding: 8,
        fontSize: 15,
        color: '#878CCC',
    },
    container: {
        flex: 1,
        paddingTop: 40,
    },
    touchable: {
        borderWidth: 1,
        borderRadius: 4,
        margin: 8,
        padding: 8,
        width: '95%',
    },
});