import React from 'react';
import {View, Text, Image} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
  // const MyIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="searchbar"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 25}}>
            <IonIcon name="location-sharp" size={24} color={'#000'} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              marginRight: 8,
              borderRadius: 30,
              padding: 5,
            }}>
            <AntDesign name="clockcircle" size={11} />
            <Text style={{marginHorizontal: 10}}>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
