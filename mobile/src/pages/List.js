import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { SafeAreaView, AsyncStorage, ScrollView, Image, StyleSheet, StatusBar, Alert } from 'react-native';

import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';
import {localhost} from '../localhost';


export default function List() {
  const [techs, setTechs] = useState([]);


  useEffect(()=>{
    AsyncStorage.getItem('user').then(user_id=>{
      const socket = socketio(`${localhost}:3333`,{
        query: {user_id}
      })
      socket.on('booking_response', booking => {
        Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
      })
    })
  },[])

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techsArray = storageTechs.split(',').map(tech => tech.trim(''));
      setTechs(techsArray);
      // console.log('TechsArray=', techsArray);
    })
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Image source={logo} style={style.logo} />
      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: 10,
  },
})