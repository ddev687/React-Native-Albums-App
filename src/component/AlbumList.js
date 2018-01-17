import React,{ Component } from 'react';
import {View,ScrollView} from 'react-native';
import AlbumDetails from './AlbumDetails';
import axios from 'axios';

class AlbumList extends Component{
    state={ albums:[]};

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res=>this.setState({albums:res.data}));
    }
    renderAlbums(){
        return this.state.albums.map(album=>
            <AlbumDetails key={album.title} album={album}/>);
    }
    render(){
        return(
            <ScrollView>
                <View>
                    {this.renderAlbums()}
                </View>
            </ScrollView>
        );
    }
}

export default AlbumList;