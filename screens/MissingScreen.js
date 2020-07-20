import React from 'react';
import {Text, View, StyleSheet, Image, FlatList } from 'react-native';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';

export default class MissingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            buttonState:'normal',
            breed:'',
            allAnimals:[]
        }
    }

    componentDidMount=async()=>{
        const query= await db.collection("missing_animal").limit(10).get()
        query.docs.map((doc)=>{
            this.setState({
                allAnimals:[]
            })
        })
    }

    render(){
        return(
            <View>
                    <FlatList 
                        data={this.state.allAnimals}
                        renderItem={({item})=>(
                            <View style={{borderBottomWidth:2}}>
                                <Text>{"Animal: " + item.animal}</Text>
                                <Text>{"Breed: " + item.breed}</Text>
                                <Text>{"Colour: " + item.colour}:</Text>
                                <Text>{"Last Seen: " + item.last_seen}</Text>
                                <Text>{"Details: " + item.details}</Text>
                                <Text>{"Contact No.: " + item.number}</Text>
                            </View>
                        )}
                        keyExtractor={(item,index)=>index.toString()}
                    />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:0
    }
})