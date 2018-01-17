import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const albumDetails=({album})=>{
    const {title,artist,thumbnail_image,image,url}=album;
    return(
        <Card>
            <CardSection style={Styles.headerStyle}>
                <View style={Styles.headerStyle}>
                    <Image
                        style={Styles.headerImageStyle}
                        source={{uri:thumbnail_image}}/>
                </View>
                <View style={Styles.headerTextStyle}>
                    <Text style={Styles.textStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={Styles.imageSectionStyle}
                    source={{uri:image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}/>
            </CardSection>
        </Card>
    );
};

const Styles={
    headerTextStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerImageStyle:{
      height:50,
      width:50
    },
    headerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageSectionStyle:{
        height:300,
        //width:300
        flex:1,
        width:null
    },
    textStyle:{
        fontSize:20
    }
}
export default albumDetails;