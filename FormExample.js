//  Freestyle Sotware, Inc.
//  INTERFACE - A React Native UI Library

//  ------------------------------------------------------------

'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    Text,
    Image,
    PixelRatio,
    ScrollView,
    TextInput,
    TouchableHighlight,
    SwitchIOS,
    PickerIOS
} = React;

var {
    baseColor,
    baseFont,
    baseImage,
    sharedStyle,
    serverAddress,
} = require('./BaseStyles');

var tinyColor = require("tinycolor2");

// Template -------------------------------------------------------------------

var FormExample = React.createClass ({

    getInitialState() {
        return {
            markAsComplete: true,
            followupNeeded: true,
        };
    },

    render() {
        return (
            <ScrollView style={styles.container} keyboardDismissMode={true} keyboardShouldPersistTaps={false} automaticallyAdjustContentInsets="false">

                <Image style={styles.backdrop} source={{ uri: baseImage.backdrop}}>
                    <View style={styles.overlay} />
                    <View style={styles.form}>

                        <TextInput 
                            style={styles.editfield} 
                            placeholder={"Company"} 
                            placeholderTextColor={tinyColor(baseColor.black.toString("hsl")).setAlpha(0.35).toRgbString()}
                            keyboardType={"default"}
                            autoCorrect={false}
                            clearButtonMode={"while-editing"}
                        />
                        <View style={styles.underline} />

                        <TextInput 
                            style={styles.editfield} 
                            placeholder={"Email"} 
                            placeholderTextColor={tinyColor(baseColor.black.toString("hsl")).setAlpha(0.35).toRgbString()}
                            keyboardType={"email-address"}
                            autoCorrect={false}
                            clearButtonMode={"while-editing"}
                        />
                        <View style={styles.underline} />

                        <TextInput 
                            style={styles.editfield} 
                            password={true}
                            placeholder={"Password"} 
                            placeholderTextColor={tinyColor(baseColor.black.toString("hsl")).setAlpha(0.35).toRgbString()}
                            keyboardType={"ascii-capable"}
                            autoCorrect={false}
                            clearButtonMode={"while-editing"}
                        />
                        <View style={styles.underline} />

                        <View style={styles.switch}>
                            <Text style={styles.switcherLabel}>Mark as complete</Text>
                            <View style={styles.switcher}>
                                <SwitchIOS
                                    style={styles.switcher}
                                    onValueChange={(value) => this.setState({markAsComplete: value})}
                                    value={this.state.markAsComplete}
                                    thumbTintColor={baseColor.pureWhite}
                                    tintColor={baseColor.pureWhite}
                                    onTintColor={baseColor.color}
                                />
                            </View>
                        </View>
                        <View style={styles.underline} />

                        <View style={styles.switch}>
                            <Text style={styles.switcherLabel}>Follow up needed</Text>
                            <View style={styles.switcher}>
                                <SwitchIOS
                                    style={styles.switcher}
                                    onValueChange={(value) => this.setState({followupNeeded: value})}
                                    value={this.state.followupNeeded}
                                    thumbTintColor={baseColor.pureWhite}
                                    tintColor={baseColor.pureWhite}
                                    onTintColor={baseColor.color}
                                />
                            </View>
                        </View>
                        <View style={styles.underline} />

                        <TouchableHighlight style={styles.button} underlayColor={baseColor.color}>
                            <Text style={styles.buttonLabel}>AUTHORIZE</Text>
                        </TouchableHighlight>

                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Text style={styles.description}>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                        </Text>

                    </View>
                </Image>

            </ScrollView>
		);
	},

});


// Styling --------------------------------------------------------------------

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: baseColor.white,
    },

    backdrop: {
        flex: 1,
        resizeMode: "cover",
        height: 580, // HACK: Only for purposes of prototyping form in this project. Do not proprogate.
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: baseColor.white,
        opacity: 0.35, 
    },

    form: {
        flex: 1,
        marginTop: 20,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: "transparent",
    },

    editfield: {
        ...baseFont.medium,
        height: 46,
        marginTop: 8,
        padding: 8,
        backgroundColor: "transparent",
    },
    underline: {
        height: 1,
        backgroundColor: "transparent",
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: tinyColor(baseColor.white.toString("hsl")).setAlpha(0.25).toRgbString(),
    },

    switch: {
        flexDirection: "row",
        height: 46,
        marginTop: 8,
        padding: 8,
        alignItems: "center",
    },
    switcherLabel: {
        ...baseFont.medium,
        marginTop: 2,
    },
    switcher: {
        flex: 1,
        alignSelf: "flex-end",
    },

    button: {
        alignItems: "center",
        marginTop: 32,
        marginBottom: 16,
        padding: 8,
        borderWidth: 1/ PixelRatio.get(),
        borderRadius: 20,
        borderColor: baseColor.black,
        backgroundColor: tinyColor(baseColor.black.toString("hsl")).setAlpha(0.20).toRgbString(),
    },
    buttonLabel: {
        ...baseFont.medium,
    },

    description: {
        ...baseFont.small,
        marginTop: 16,
    }

});

// ----------------------------------------------------------------------------

module.exports = FormExample;
