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
				<Image style={styles.backdrop} source={{ uri: baseImage.backdrop }}>
					{/* NAVBAR */}
					<View style={styles.overlay} />
					<View style={styles.nav}>
						<Image style={sharedStyle.navIcon} source={baseImage.leftarrow} />
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
				<ScrollView automaticallyAdjustContentInsets="false">
					<View style={styles.form}>
						<View style={styles.item}>
							<Text style={styles.itemLabel}>EMAIL</Text>
						    <TextInput style={styles.itemField} clearButtonMode={"while-editing"} keyboardType={"email-address"} autoCorrect={false} 
						    	placeholder={""} placeholderTextColor={baseColor.black} />
					    </View>

					    <View style={styles.item}>
							<Text style={styles.errorLabel}>PASSWORD</Text>
						    <TextInput style={styles.itemField} clearButtonMode={"while-editing"} keyboardType={"ascii-capable"} autoCorrect={false}
						    	password={true} value={"testing"} />
					    </View>

					    <View style={styles.item}>
					        <Text style={styles.itemLabel}>AUTO POSTING</Text>
					        <SwitchIOS style={styles.itemSwitcher} thumbTintColor={baseColor.color} tintColor={baseColor.bright} onTintColor={baseColor.bright}
				                onValueChange={(value) => this.setState({autoPost: value})} value={this.state.autoPost} />
					    </View>

						{/* SYNC BUTTONS */}
						<Text style={styles.formHeader}>SYNC WITH</Text>
					    <View style={styles.buttons}>
						    <TouchableHighlight style={styles.wrapperButton} underlayColor={baseColor.bright}>
						    	<View style={styles.formButton}>
							    	<Image style={sharedStyle.smallIcon} source={baseImage.facebook} />
							    	<Text style={styles.formButtonLabel}>FACEBOOK</Text>
						    	</View>
						    </TouchableHighlight>
						    <TouchableHighlight style={[styles.wrapperButton, {borderColor: baseColor.twitter}]} underlayColor={baseColor.bright}>
						    	<View style={styles.formButton}>
							    	<Image style={[sharedStyle.smallIcon, {tintColor: baseColor.twitter}]} source={baseImage.twitter} />
							    	<Text style={[styles.formButtonLabel, {color: baseColor.twitter}]}>TWITTER</Text>
						    	</View>
						    </TouchableHighlight>
					    </View>
					</View>
				</ScrollView>
			</View>
		)
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: baseColor.white,
	},
	backdrop:{
		resizeMode: "cover",
		height: 230,
		backgroundColor: "transparent",
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: baseColor.white,
		opacity: 0.50, 
	},

	nav: {
		flexDirection: "row",
		marginTop: 22,
		marginBottom: 22,
		paddingLeft: 10,
		paddingRight: 10,
		alignItems: "center",
		justifyContent: "space-between",
 	    borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: tinyColor(baseColor.black.toString("hsl")).setAlpha(0.25).toRgbString(),
	},
	navTitle: {
		...baseFont.medium,
		fontWeight: "200",
	},
	navAction: {
		...baseFont.small,
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
        borderColor: tinyColor(baseColor.black.toString("hsl")).setAlpha(0.75).toRgbString(),
    },
    handle: {
	   	flex: 1,
	   	marginLeft: 20,
	   	marginRight: 20,
    },
    handleItem: {
    	flex: 1,
    	flexDirection: "row",
    	alignItems: "flex-end",
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
    	backgroundColor: "transparent",
    },
    handleName: {
    	...baseFont.medium,
		textAlign: "right",
        backgroundColor: "transparent",
    },
    handleDescription: {
		...baseFont.small,
    	flex: 1,
		marginTop: 5,
    	opacity: 0.5,
    },

	form: {
        flex: 1,
        height: 340,   // Need to find a better way to measure here
        backgroundColor: baseColor.offWhite,
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
    errorLabel: {
    	...baseFont.label,
    	color: baseColor.punch,
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
	   	...baseFont.label,
    	padding: 10,
		color: baseColor.darkGray,
       	backgroundColor: baseColor.offWhite,
    },
    buttons: {
    	flexDirection: "row",
    	alignItems: "center",
    	justifyContent: "space-between",
    	padding: 10,
    	paddingRight: 20,
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: tinyColor(baseColor.darkGray.toString("hsl")).setAlpha(0.50).toRgbString(),
    },
    wrapperButton: {
    	flex: 1,
    	alignItems: "center",
    	margin: 10,
    	borderWidth: 1,
    	borderRadius: 4,        
        borderColor: baseColor.color,
        backgroundColor: baseColor.brightWhite,
    },
    formButton: {
    	flexDirection: "row",
    	alignItems: "center",
    	padding: 5,
		borderRadius: 4,   // Seems like a hack or bug to have to add border radius to both wrapper and button for touch effect to look correct   
    },
    formButtonLabel: {
    	...baseFont.small,
        color: baseColor.color,
		letterSpacing: 1,
    },

});

//	------------------------------------------------------------

module.exports = EditProfile;