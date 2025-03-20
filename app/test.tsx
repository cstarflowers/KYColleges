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
    <Header />
    <div className="banner"><svg viewBox="0 20 736 240" xmlns="https://www.w3.org/2000/svg"><g>
     <image xlinkHref="https://i.pinimg.com/736x/5a/13/d6/5a13d69a9efc0c6b08a3444498ebfa8a.jpg"></image>
    </g></svg></div>
    <div className='raised_text'><Text>You are now viewing <b>Test.tsx</b>!</Text></div>
    <Footer />
    </View>
  );
}
