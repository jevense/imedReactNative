import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Camera from 'react-native-camera';

class BarcodeScanner extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    onBarCodeRead={() => (this.onBarCodeRead)}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
            </View>
        );
    }

    onBarCodeRead(e) {
        console.log(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

export default BarcodeScanner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});
