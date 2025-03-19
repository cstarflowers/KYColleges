import { Text, View } from "react-native";
import React, { SVGProps } from 'react';
import './layout_styles.css';

export default function Footer() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="430" height="118" viewBox="0 822 430 118">
  <g id="Footer" data-name="Footer">
  <rect id="Green_Rect" data-name="Green_Rect" className="green_rect" width="430" height="118" transform="translate(0 822)"/>
  </g>
</svg>
    <HomeButtons />
    </View>
  );
}

export function HomeButtons(props: SVGProps<SVGSVGElement>) {
	return (
  <>
    <div className="home_button"><svg xmlns="http://www.w3.org/2000/svg" width={430} height={60} viewBox="0 0 24 24" {...props}><path fill="white" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"></path></svg></div>
    <div className="home_button"><svg xmlns="http://www.w3.org/2000/svg" width={160} height={60} viewBox="0 0 24 24" {...props}><path fill="white" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path></svg></div>
    <div className="home_button"><svg xmlns="http://www.w3.org/2000/svg" width={700} height={60} viewBox="0 0 512 512" {...props}><path fill="white" fillRule="evenodd" d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"></path></svg></div>
  </>
  );
}
