import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = (props) => {
	const {textStyle, imageStyle, imageContainerStyle, headerstyle, imageStyle1} = styles
	  return (
	  	<Card>
	  		<CardSection>
	  		<View style={imageContainerStyle}>
	  			<Image style={imageStyle} source ={{uri: props.detail.thumbnail_image }} />
	  		</View>
	  		<View style={textStyle}>
	  			<Text style={headerstyle}> {props.detail.title} </Text>
	  			<Text > {props.detail.artist} </Text>
	  		</View>
	  		</CardSection>
	  		<CardSection>
	  			<Image style={imageStyle1} source ={{uri: props.detail.image }} />
	  		</CardSection>
	  		<CardSection>
	  			<Button onPress={() => Linking.openURL(props.detail.url)}>Buy Now!!</Button>
	  		</CardSection>
	    </Card>
	  );
}

const styles = {
	textStyle: {
		justifyContent: 'space-around',
		flexDirection: 'column'
	},
	imageStyle: {
		height: 50,
		width: 50
	},
	headerstyle: {
		fontSize: 18
	},
	imageContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle1: {
		height: 300,
		width: null,
		flex: 1
	}
}
export default AlbumDetail;