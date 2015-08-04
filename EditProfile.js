//	Freestyle Sotware, Inc.
//	INTERFACE - A React Native UI Library

//	------------------------------------------------------------

'use strict';

var React = require('react-native');
var {
	StyleSheet,
	PixelRatio,
	Text,
	Image,
	View,
	ScrollView,
	TouchableHighlight,
	TextInput,
 	SwitchIOS,
} = React;

var {
	baseColor,
	baseFont,
	baseImage,
	sharedStyle,
} = require('./BaseStyles');

var tinyColor = require("tinycolor2");


// ----------------------------------------------------------------------------

var EditProfile = React.createClass({

    getInitialState() {
        return {
            autoPost: true,
        };
    },

	render () {
		return (
		<View style={styles.container}>
			<Image style={styles.backdrop} source={{ uri: "http://localhost:8081/fpo/cover-profile.png" }}>
				{/* NAVBAR */}
				<View style={styles.nav}>
					<Text style={styles.navAction}>BACK</Text>
					<Text style={styles.navTitle}>Edit</Text>
					<Text style={styles.navAction}>SAVE</Text>
				</View>
				{/* PROFILE  */}
				<View style={styles.profile}>
			        <Image style={styles.avatar} source={{ uri: "http://localhost:8081/fpo/avatar-profile.png" }} />
			        <View style={styles.handle}>
			            <View style={styles.handleItem}>
			            	<Text style={styles.handleLabel}>NAME</Text>
			                <Text style={styles.handleName}>Samantha Aryton</Text>
			            </View>
			            <View style={styles.handleStacked}>
			                <Text style={styles.handleLabel} numberOfLines={1}>TITLE</Text>
			                <Text style={styles.handleDescription} numberOfLines={4}>
			                	This I have produced as a scantling of Jack's great eloquence and the force
			                	of his reasoning upon such abstruse matters.
			                </Text>
			            </View>
			        </View>
			    </View>
			</Image>

			{/* FORM */}
			<View style={styles.form}>
				<View style={styles.item}>
					<Text style={styles.itemLabel}>EMAIL</Text>
				    <TextInput style={styles.itemField} clearButtonMode={"while-editing"} keyboardType={"email-address"} autoCorrect={false} 
				    	placeholder={""} placeholderTextColor={baseColor.black} />
			    </View>

			    <View style={styles.item}>
					<Text style={styles.itemLabel}>PASSWORD</Text>
				    <TextInput style={styles.itemField} clearButtonMode={"while-editing"} keyboardType={"ascii-capable"} autoCorrect={false}
				    	password={true} value={"testing"} />
			    </View>

			    <View style={styles.item}>
			        <Text style={styles.itemLabel}>AUTO POSTING</Text>
			        <SwitchIOS style={styles.itemSwitcher} thumbTintColor={baseColor.color} tintColor={baseColor.bright} onTintColor={baseColor.bright}
		                onValueChange={(value) => this.setState({autoPost: value})} value={this.state.autoPost} />
			    </View>

				<Text style={styles.formHeader}>Sync with</Text>
			    <View style={styles.buttons}>
				    <TouchableHighlight style={styles.formButton} underlayColor={baseColor.bright}>
				    	<Text style={styles.formButtonLabel}>FACEBOOK</Text>
				    </TouchableHighlight>
				    <TouchableHighlight style={[styles.formButton, {borderColor: baseColor.twitter}]} underlayColor={baseColor.bright}>
				    	<Text style={[styles.formButtonLabel, {color: baseColor.twitter}]}>TWITTER</Text>
				    </TouchableHighlight>
			    </View>
			</View>
		</View>
		)
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backdrop:{
		resizeMode: "cover",
		height: 230,
		backgroundColor: "transparent",
	},

	nav: {
		flexDirection: "row",
		marginTop: 22,
		marginBottom: 22,
		paddingTop: 4,
		paddingLeft: 10,
		paddingRight: 10,
		alignItems: "flex-end",
		justifyContent: "space-between",
 	    borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: tinyColor(baseColor.darkGray.toString("hsl")).setAlpha(0.50).toRgbString(),
	},
	navTitle: {
		...baseFont.medium,
		color: baseColor.pureWhite,
	},
	navAction: {
		...baseFont.small,
		color: baseColor.pureWhite,
	},

	profile: {
		flexDirection: "row",
	},
	avatar: {
		width: 70, 
		height: 70,
		marginLeft: 20,
		borderWidth: 2,
        borderRadius: 35,
        borderColor: baseColor.pureWhite,
    },
    handle: {
	   	flex: 1,
	   	marginLeft: 20,
	   	marginRight: 20,
    },
    handleItem: {
    	flex: 1,
    	flexDirection: "row",
    	alignItems: "center",
    	justifyContent: "space-between",
    	marginBottom: 20,
    	paddingBottom: 5,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: tinyColor(baseColor.darkGray.toString("hsl")).setAlpha(0.50).toRgbString(),
    },
    handleStacked: {
    	flex: 1,
    	paddingBottom: 5,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: tinyColor(baseColor.darkGray.toString("hsl")).setAlpha(0.50).toRgbString(),
    },
    handleLabel: {
    	...baseFont.label,
    	color: baseColor.pureWhite,
    	backgroundColor: "transparent",
    },
    handleName: {
    	...baseFont.medium,
		textAlign: "right",
		color: baseColor.pureWhite,
        backgroundColor: "transparent",
    },
    handleDescription: {
		...baseFont.small,
    	flex: 1,
		marginTop: 5,
    	color: baseColor.pureWhite,
    },


	form: {
        flex: 1,
        backgroundColor: baseColor.brightWhite,
    },
    item: {
    	flexDirection: "row",
    	alignItems: "center",
    	justifyContent: "space-between",
    	height: 60,
    	paddingLeft: 10,
    	paddingRight: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: tinyColor(baseColor.darkGray.toString("hsl")).setAlpha(0.50).toRgbString(),
    },
    itemLabel: {
    	...baseFont.label,
    	color: baseColor.black,
    	backgroundColor: "transparent",
    },
    itemField: {
    	...baseFont.medium,
    	flex: 1,
		textAlign: "right",  // NOTE: Using this to fake justifyContent as space-between. Not sure this is the best way yet.
		paddingLeft: 10,
		color: baseColor.black,
        backgroundColor: "transparent",
    },
    itemSwitcher: {
    	// flex: 1,   NOTE: Adding a flex value here breaks the justifyContent alignment of parent. Not sure why yet.
    },
    formHeader: {
	   	...baseFont.small,
    	paddingLeft: 10,
    	paddingRight: 10,
    	paddingTop: 10,
    	paddingBottom: 10,
		color: baseColor.darkGray,
       	backgroundColor: baseColor.offWhite,
    },
    buttons: {
    	flexDirection: "row",
    	alignItems: "center",
    	justifyContent: "space-between",
    	paddingTop: 10,
    	paddingLeft: 10,
    	paddingRight: 20,
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: tinyColor(baseColor.darkGray.toString("hsl")).setAlpha(0.50).toRgbString(),
    },
    formButton: {
    	flex: 1,
    	margin: 10,
        padding: 5,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: baseColor.color,
        backgroundColor: baseColor.brightWhite,
    },
    formButtonLabel: {
    	...baseFont.small,
		letterSpacing: 1,
        textAlign: "center",
        color: baseColor.color,
    },

});

//	------------------------------------------------------------

module.exports = EditProfile;