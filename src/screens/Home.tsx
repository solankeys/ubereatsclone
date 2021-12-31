import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItem from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';
import {localRestaurants} from '../components/RestaurantItem';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import BottomTab from '../components/BottomTab';

const YELP_API_KEY =
  'bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState();
  const [activeTab, setActiveTab] = useState('Delivery');

  // const getRestaurantsFromYelp = () => {
  //   const yelpUrl =
  //     'https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego';

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };
  //   return fetch(yelpUrl, apiOptions)
  //     .then(res => res.json())
  //     .then(json =>
  //       setRestaurantData(json.businesses));
  // };
  // useEffect(() => {
  //   getRestaurantsFromYelp();
  // }, []);

  return (
    <View style={{paddingVertical: 10, backgroundColor: '#fff'}}>
      <View>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{}}>
          <Categories />
          <RestaurantItem />
          <Divider width={1} />
          <BottomTab />
        </View>
      </ScrollView>
    </View>
  );
}
