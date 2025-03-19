import { Text, View } from "react-native";
import React from 'react';
import './layout_styles.css';

export default function Header() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
      }}
    >
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="430" height="101" viewBox="0 0 430 101">
  <g id="Header" data-name="Header">
   <rect id="Green_Rect" className="green_rect" width="430" height="101"/>
   <image width="100" height="80" xlinkHref="https://i.imgur.com/eN42FAb.png" transform="translate(0,10)"></image>
   <line id="Menu_1" className="menu_bar" x2="35.93" transform="translate(365.5 56.944)"/>
    <line id="Menu_2" className="menu_bar" x2="35.93" transform="translate(365.5 66.722)"/>
    <line id="Menu_3" className="menu_bar" x2="35.93" transform="translate(365.5 76.5)"/>
    </g>
</svg>
    </View>
  );
}

