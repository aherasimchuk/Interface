//	Freestyle Sotware, Inc.
//	INTERFACE - A React Native UI Library

//	------------------------------------------------------------

'use strict';

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	View,
	Text,
} = React;

var {
	baseColor,
	baseFont,
	baseImage,
	sharedStyle,
} = require('./BaseStyles');

//	Templates ------------------------------------------------------------------
//
//	List of hard coded templates. Swap out the name of the single rendered
//	component into the render function below to view it.
//	
//	A real front page to view templates and navigate to them will be added
//	sometime in the future.
//

var EditProfile = require('./EditProfile');
var FormExample = require('./FormExample');
var TranslucentMartian = require('./TranslucentMartian');

// ----------------------------------------------------------------------------


var Interface = React.createClass({

	render() {
		return (
			<View style={styles.container} >
				<TranslucentMartian />
			</View>
		);
	},

});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: baseColor.white,
	},

});

AppRegistry.registerComponent('Interface', () => Interface);
