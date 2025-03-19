import { Text, View } from "react-native";
import React from 'react';
import Header from './_header';
import Footer from './_footer'
import './layout_styles.css';

export default function Test() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
    <div className='raised_text'><Text>You are now viewing <b>Test.tsx</b>!</Text></div>
    <Header />
    <Footer />
    </View>
  );
}
