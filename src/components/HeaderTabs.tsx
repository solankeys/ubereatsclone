import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <View style={styles.buttonContainer}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activetab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activetab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: props.activetab === props.text ? 'black' : 'white'},
      ]}
      onPress={() => props.setActiveTab(props.text)}>
      <Text
        style={[
          styles.buttonText,
          {color: props.activetab === props.text ? 'white' : 'black'},
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 6,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '900',
  },
});
