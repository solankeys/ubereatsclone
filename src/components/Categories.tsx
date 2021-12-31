import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

const items = [
  {
    image: require('../images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../images/soft-drink.png'),
    text: 'Soft-drinks',
  },
  {
    image: require('../images/bread.png'),
    text: 'Bakry Items',
  },
  {
    image: require('../images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../images/desserts.png'),
    text: 'Desserts',
  },
];

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => {
        return (
          <View
            style={{
              marginTop: 5,
              backgroundColor: '#fff',
              paddingVertical: 10,
              paddinfLeft: 20,
            }}>
            <View style={{alignItems: 'center', marginRight: 30}} key={index}>
              <Image
                source={item.image}
                style={{width: 50, height: 40, resizeMode: 'contain'}}
              />
              <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
