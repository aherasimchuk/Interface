//	Freestyle Sotware, Inc.
//	INTERFACE - A React Native UI Library

//	Color, type, and image definitions. 
//	Keep it up to date. Keep it clean. Keep it simple.

//	------------------------------------------------------------


"use strict";

var React = require('react-native');
var {
	PixelRatio,
} = React;


//	------------------------------------------------------------
//	Base Color Palette 

//	To reference a color in the color palette, use "baseColor.nameOfColorType"
//	e.g., baseColor.tint will return the lighter version of what is set as the primary color

//	HUSL and TinyColor are used to manipulate color strings and color definition.

//	http://www.husl-colors.org/
// 	npm install husl
var husl = require("husl");					

//	http://bgrins.github.io/TinyColor/
//	npm install tinycolor2   	
var tinyColor = require("tinycolor2");		



//	Define different themes, which will be passed to the "createColorPalette" function.

//	Day is good for use in outide bright environments, using white as a base and working in smaller 
//	percentage increments.

let day = {

//	White as base, with minor shade and tint adjustment
	base: husl.toHex(0, 0, 98),
	baseTint: husl.toHex(0, 0, 100),	
	baseShade: husl.toHex(0, 0, 95),
	
//	Black as complement, with minor shade and tint adjustment
	baseComplement: husl.toHex(0, 0, 20),
	baseComplementTint: husl.toHex(0, 0, 30),
	baseComplementShade: husl.toHex(0, 0, 10),
	
//	Gray, with a shade and tint that work with a bright interface
	baseGray: husl.toHex(0, 0, 70),
	baseLightGray: husl.toHex(0, 0, 80),
	baseDarkGray: husl.toHex(0, 0, 55),
	
//	Define any number of primary colors that work well with light interfaces	
	blue: husl.toHex(255, 98, 52),
	red: husl.toHex(10, 97, 47),
	green: husl.toHex(130, 95, 58),

	facebook: husl.toHex(260, 95, 50),
	twitter: husl.toHex(235, 95, 70),

//	Use a bright, vibrant, blurred image for daytime backgrounds.
	backdrop: "bgd-person02",
};


//	Night is good for indoor dark environments, and has bigger spreads on increments for shades 
//	and tints. Names are same but color logic is inverted to stay opposite of day.
		
let night = {

//	Black as base, with minor shade and tint adjustment
	base: husl.toHex(0, 0, 15),
	baseTint: husl.toHex(0, 0, 0),
	baseShade: husl.toHex(0, 0, 25),
	
//	White as complement, with minor shade and tint adjustment
	baseComplement: husl.toHex(0, 0, 96),
	baseComplementTint: husl.toHex(0, 0, 92),
	baseComplementShade: husl.toHex(0, 0, 98),
	
//	Gray, with a shade and tint that work with a dark interface
	baseGray: husl.toHex(0, 0, 45),
	baseLightGray: husl.toHex(0, 0, 40),
	baseDarkGray: husl.toHex(0, 0, 55),
	
//	Define any number of primary colors that work well with darker interfaces
	blue: husl.toHex(255, 92, 45),
	red: husl.toHex(10, 90, 38),
	green: husl.toHex(130, 85, 41),

	facebook: husl.toHex(225, 92, 45),
	twitter: husl.toHex(200, 92, 45),
	
//	Use a dark, dull, blurred image for daytime backgrounds.
	backdrop: "bgd-night",
};


//	Create the color palette using day or night values above, and pass along a primary and punch color 
//	pulled from the theme.

//	IMPORTANT: Everything is written from the point of view of creating a daylight interface as the default, 
//	using white and black terminology in that context. If you ever need a full white or black, use the
//	"pureWhite" and "pureBlack" keys.

let baseColor = createColorPalette(day, "blue", "red");

function createColorPalette(base, color, punch) {
	return {
		white: base.base,
		brightWhite: base.baseTint,
		offWhite: base.baseShade,

		black: base.baseComplement,
		deepBlack: base.baseComplementShade,
		offBlack: base.baseComplementTint,

		gray: base.baseGray,
		lightGray: base.baseLightGray,
		darkGray: base.baseDarkGray,

		color: base[color],
		tint: tinyColor(base[color].toString()).lighten(15).toHexString(),
		bright: tinyColor(base[color].toString()).lighten(35).toHexString(),
		shade: tinyColor(base[color].toString()).darken(10).toHexString(),
		deep: tinyColor(base[color].toString()).darken(20).toHexString(),

		punch: tinyColor(base[punch].toString()).brighten(20).toHexString(),

		backdrop: base.backdrop,

		pureWhite: husl.toHex(0, 0, 100),
		pureBlack: husl.toHex(0, 0, 0),

		facebook: base.facebook,
		twitter: base.twitter,

	};
};


//	------------------------------------------------------------
//	Base Typography 

//	All type specs are defined here. It's best not to add inline or component specific typographic 
//	styles unless they are truly special cases.

//	To use these typographic styles, expand them at the component style level, and be sure to add them 
//	as the first item so that you can override text properties in the component if needed.

//	For example, use...

//	var styles = StyleSheet.create({
//	    dashboardLabel: {
//	        ...baseFont.smFont,
//	        color: baseColor.base,
//	    }
//	});

//	... to properly override the color in the component.


let baseFontFace = "RobotoCondensed-Bold"

let baseFont = {
	xtraLarge: {
		fontFamily: baseFontFace,
		fontWeight: "100",
		fontSize: 24,
		lineHeight: 32,
		color: baseColor.black,
	},
	large: {
		fontFamily: baseFontFace,
		fontWeight: "100",
		fontSize: 23,
		lineHeight: 28,
		color: baseColor.black,
	},	
	medium: {	
		fontFamily: baseFontFace,
		fontWeight: "100",
		fontSize: 17,
		lineHeight: 24,
		color: baseColor.black,
	},
	small: {
		fontFamily: baseFontFace,
		fontWeight: "100",
		fontSize: 11,
		lineHeight: 14,
		color: baseColor.black,
	},
	label: {
		fontFamily: baseFontFace,
		fontWeight: "400",
		fontSize: 11,
		color: baseColor.black,
	},
};


//	------------------------------------------------------------
//	Base Images and Icons

//	Add variables for all artwork here. Once added, each image can be referenced in the project 
//	simply as baseImage.nameOfIcon. 

//	e.g., baseImage.bookmark, baseImage.pencil

//	Each of these images exists in the "freestyle-icons.psd" file, and are produced 
//	at 1x, 2x, and 3x automatically using Photoshop Generator. Once created by Generator,
//	each icon has to be manually added to the XCode project as an imageasset.

//	Info on Generator can be found at: 
//	http://blogs.adobe.com/photoshopdotcom/2013/09/introducing-adobe-generator-for-photoshop-cc.html

//	IMPORTANT: Be sure to match the name of the layer in Photoshop to the name of the image asset in XCode
//	to the name of the variable used below. If there's a name mismatch, React won't load the image.

let baseImage = {
// 	"bookmark" : require("image!bookmark"),
// 	"calendar": require("image!calendar"),
// 	"checkmark": require("image!checkmark"),
// 	"cross": require("image!cross"),
// 	"dashboard": require("image!dashboard"),
// 	"directions": require("image!directions"),
// 	"document": require("image!document"),
// 	"ellipses": require("image!ellipses"),
// 	"envelope": require("image!envelope"),
// 	"facebook": require("image!facebook"),
// 	"geo": require("image!geo"),
// 	"googleplus": require("image!googleplus"),
// 	"leftarrow": require("image!leftarrow"),
// 	"linkedin": require("image!linkedin"),
// 	"magnifyingglass": require("image!magnifyingglass"),
// 	"note": require("image!note"),
// 	"pdf": require("image!pdf"),
// 	"pen": require("image!pen"),
// 	"pencil": require("image!pencil"),
// 	"person": require("image!person"),
// 	"phone": require("image!phone"),
// 	"plus": require("image!plus"),
// 	"ppt": require("image!ppt"),
// 	"rightarrow": require("image!rightarrow"),
// 	"seal": require("image!seal"),
// 	"share": require("image!share"),
// 	"sliders": require("image!sliders"),
// 	"stopwatch": require("image!stopwatch"),
// 	"trashcan": require("image!trashcan"),
// 	"twitter": require("image!twitter"),
// 	"xls": require("image!xls"),

// 	"logo": require("image!logo"),

// //	Temporary variable for now until server is up and running
// 	"backdrop": "http://localhost:8081/fpo/"+baseColor.backdrop+".jpg",
};


//	------------------------------------------------------------
//	Shared Styles

//	Define styles snippets that are frequently used. Use these shared styles by expanding them
//	at the component level, and be sure to add them as the first item so that you can override
//	any of their properties if needed.

//	For example, use...

//	var styles = StyleSheet.create({
//	    avatar: {
//	        ...sharedStyle.shadow,
//	        color: baseColor.base,
//	    }
//	});

//	... to properly override the color in the component.


let sharedStyle = {
	lgIcon: {
		width: 40,
		height: 40,
		tintColor: baseColor.color,
	},
	smIcon: {
		width: 20,
		height: 20,
		tintColor: baseColor.color,
	},
	lgAvatar: {
		width: 60,
		height: 60,
		borderWidth: 1 / PixelRatio.get(),
		borderColor: baseColor.lightGray,
		borderRadius: 3,
		resizeMode: 'cover',
	},
   	smAvatar: {
		width: 30,
		height: 30,
		borderWidth: 1 / PixelRatio.get(),
		borderColor: baseColor.lightGray,
		borderRadius: 2,
		resizeMode: 'cover',
	},
	thumbnail: {
		width: 20,
		height: 20,
		borderWidth: 1 / PixelRatio.get(),
		borderColor: baseColor.lightGray,
		borderRadius: 2,
		resizeMode: 'cover',
	},
	divider: {
		height: 1,
		borderTopWidth: 1 / PixelRatio.get(),
		borderTopColor: baseColor.lightGray,
    },

};


//	------------------------------------------------------------

module.exports = {baseColor, baseFont, baseImage, sharedStyle};