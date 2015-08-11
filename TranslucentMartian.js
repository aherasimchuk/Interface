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
	serverAddress,
} = require('./BaseStyles');

var tinyColor = require("tinycolor2");


// ----------------------------------------------------------------------------

var TranslucentMartian = React.createClass({

    getInitialState() {
        return {
            autoPost: true,
        };
    },

	render () {
		return (
			<View style={styles.container}>
				<Image style={styles.backdrop} source={{ uri: baseImage.backdrop }}>
					<View style={sharedStyle.strongOverlay} />
					<Image style={styles.logo} source={{ uri: "http://"+serverAddress+":8081/fpo/freestyle.png" }} />


					{/* NAVBAR */}
					<View style={styles.nav}>
						<Image style={sharedStyle.navIcon} source={baseImage.leftarrow} />
						<Text style={styles.navTitle}>Edit</Text>
						<Text style={styles.navAction}>SAVE</Text>
					</View>
					{/* PROFILE  */}
					<View style={styles.profile}>
						<Image style={styles.avatar} source={{ uri: "http://"+serverAddress+":8081/fpo/avatar-profile.png" }} />
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

					{/* ACTIVITY LIST */}
					<ScrollView
						style={{backgroundColor: baseColor.overlay}}
						automaticallyAdjustContentInsets="false" 
						showsVerticalScrollIndicator="false" 
						contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
						contentOffset={{x: 0, y: -15}} >
						
						<View style={styles.activities}>

							<View style={styles.activity}>
						        <View style={styles.activityHeader}>							            
									<Text style={styles.activityTitle}>
										<Text style={styles.activityDeal}>ACME.&nbsp;</Text>
										Top Secret Project
										<Text style={styles.activityCallout}>&nbsp;.TODAY</Text>
									</Text>							            
						        </View>
						        <View style={styles.activityContent}>			       
							        <Text style={styles.activityDescription}>
							            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
							            doloremque laudantium, totam rem aperiam, sunt explicabo.
							        </Text>
						        </View>
						        <View style={styles.activityAction}>
						            <Image style={styles.activityActionIcon} source={baseImage.search} />
						            <Text style={styles.activityActionLabel}>SEARCH</Text>
						            <View style={styles.activityIcons}>
							            <Image style={styles.activityAvatar} source={{ uri: "http://"+serverAddress+":8081/fpo/avatar-profile.png" }} />
							            <Image style={styles.activityAvatar} source={{ uri: "http://"+serverAddress+":8081/fpo/avatar-profile.png" }} />
							            <Image style={styles.activityAvatar} source={{ uri: "http://"+serverAddress+":8081/fpo/avatar-profile.png" }} />
						        	</View>
					        	</View>
						    </View>

							<View style={styles.activity}>
						        <View style={styles.activityHeader}>
						        	<Text style={styles.activityTitle}>
										<Text style={styles.activityDeal}>COMPANY.&nbsp;</Text>
										Stealth Mode
										<Text style={[styles.activityCallout, styles.activityImportant]}>&nbsp;.PAST DUE</Text>
									</Text>
						        </View>
						        <View style={styles.activityContent}>			       
							        <Text style={styles.activityDescription}>
							            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
							            deserunt mollit anim id est laborum.
							            <Text style={styles.activityStat}>&nbsp;&uarr;58%</Text>
						            	<Text style={styles.activityStat}>&nbsp;&nbsp;+$31K</Text>
							        </Text>
						        </View>
						        <View style={styles.activityAction}>
						            <Image style={styles.activityActionIcon} source={baseImage.compose} />
						            <Text style={styles.activityActionLabel}>ADD A NOTE</Text>
						            <View style={styles.activityIcons}>
							            <Image style={styles.activityAvatar} source={{ uri: "http://"+serverAddress+":8081/fpo/avatar-profile.png" }} />
						        	</View>
						        </View>
							</View>

							<View style={styles.activity}>
						        <View style={styles.activityHeader}>
						        	<Text style={styles.activityTitle}>
										<Text style={styles.activityDeal}>FREESTYLE.&nbsp;</Text>
										React Native Templates
										<Text style={styles.activityCallout}></Text>
									</Text>
						        </View>
						        <View style={styles.activityContent}>			       
							        <Text style={styles.activityDescription}>
							            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
							            magni dolores eos qui ratione voluptatem sequi nesciunt.
							            <Text style={[styles.activityStat, styles.activityImportant]}>&nbsp;&darr;20%</Text>
						            	<Text style={[styles.activityStat, styles.activityImportant]}>&nbsp;&nbsp;&ndash;$99K</Text>
							        </Text>
						        </View>
						        <View style={styles.activityAction}>
						            <Image style={styles.activityActionIcon} source={baseImage.chat} />
						            <Text style={styles.activityActionLabel}>CHAT</Text>
						            <View style={styles.activityIcons}>
							            <Image style={styles.activityAvatar} source={{ uri: "http://"+serverAddress+":8081/fpo/avatar-profile.png" }} />
							            <Image style={styles.activityAvatar} source={{ uri: "http://"+serverAddress+":8081/fpo/avatar-profile.png" }} />
						        	</View>
						        </View>
						    </View>

						</View>
					</ScrollView>

				</Image>
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
		flex: 1,
		resizeMode: "cover",
		backgroundColor: "transparent",
	},
	logo: {
		resizeMode: "cover",
		position: "absolute",
		width: 460,
		height: 170,
		top: 10,
		left: -60,
		tintColor: baseColor.tint,
		
		transform: [{
			rotate: "-17deg",
		}],
		opacity: 0.1,
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
        borderTopColor: tinyColor(baseColor.black.toString("hsl")).setAlpha(0.15).toRgbString(),
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
		alignItems: "flex-start",
		height: 200,
		borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: tinyColor(baseColor.tint.toString("hsl")).setAlpha(0.30).toRgbString(),
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
        borderBottomColor: tinyColor(baseColor.black.toString("hsl")).setAlpha(0.15).toRgbString(),
    },
    handleStacked: {
    	flex: 1,
    	paddingBottom: 20,
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
    	opacity: 0.65,
    },



	activities: {
        flex: 1,
        backgroundColor: "transparent",
    },

    activity: {
    	flex: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 20,
	   	marginBottom: 10,
    	padding: 10,
		shadowOffset: {width: 0, height: 0},
		shadowRadius: 5,
		shadowColor: baseColor.color,
		shadowOpacity: 0.5,
    },

    activityHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        paddingTop: 10,
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: tinyColor(baseColor.tint.toString("hsl")).setAlpha(0.2).toRgbString(),
    },
    activityTitle: {
        ...baseFont.large,
        flex: 1,
        fontWeight: "400",
    },
    activityDeal: {
        ...baseFont.small,
        color: baseColor.bright,
        marginBottom: -5,
    },
    activityCallout: {
        ...baseFont.small,
        color: baseColor.tint,
        marginBottom: -5,
    },

    activityContent: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    activityDescription: {
        ...baseFont.medium,
        flex: 1,
        marginTop: 5,
    },
    activityStat: {
        ...baseFont.small,
        color: baseColor.bright,
        alignSelf: "flex-end",
    },

    activityImportant: {
        color: baseColor.punch,
        tintColor: baseColor.punch,
    },

    activityAction: {
    	flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: tinyColor(baseColor.tint.toString("hsl")).setAlpha(0.2).toRgbString(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: tinyColor(baseColor.tint.toString("hsl")).setAlpha(0.2).toRgbString(),
    },
    activityActionIcon: {
        ...sharedStyle.small,
        tintColor: baseColor.tint,
        marginRight: 5,
    },
    activityActionLabel: {
        ...baseFont.label,
        color: baseColor.tint,
        marginTop: -2,
    },

    activityIcons: {
        ...sharedStyle.small,
        flexDirection: "row",
        position: "absolute",
        right: 0,
        borderLeftWidth: 1 / PixelRatio.get(),
        borderLeftColor: tinyColor(baseColor.tint.toString("hsl")).setAlpha(0.2).toRgbString(),
    },
    activityAvatar: {
        ...sharedStyle.smallAvatar,
        marginLeft: 15,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: tinyColor(baseColor.tint.toString("hsl")).setAlpha(0.5).toRgbString(),
    },

});

//	------------------------------------------------------------

module.exports = TranslucentMartian;