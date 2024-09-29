import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import React from 'react';

export default function CustomNavigationBar({ navigation, route, options, back }) {
    const myTitle = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header elevated = 'true'>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={myTitle} />
      {myTitle === 'Home' ? <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} /> : null}
    </Appbar.Header>
  );
}