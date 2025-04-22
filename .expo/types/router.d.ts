/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/..\src\` | `/..\src\App` | `/..\src\components\MenuACTSATSelection` | `/..\src\components\MenuFinishButton` | `/..\src\components\MenuGPASelection` | `/..\src\components\MenuMajorSelection` | `/..\src\components\PortalPopup` | `/..\src\components\ProfileButtons` | `/..\src\components\ProfileButtons2` | `/..\src\components\ProfileButtons3` | `/..\src\pages\Home` | `/..\src\pages\HomeFilterExpanded` | `/..\src\pages\HomeMenuExpanded` | `/..\src\pages\OpeningSurveyFavorites` | `/..\src\pages\OpeningSurveyMajorStats` | `/..\src\pages\OpeningSurveyRanks` | `/..\src\pages\OpeningSurveyRanksFilled` | `/..\src\pages\ProfileCentreCollege` | `/..\src\pages\ProfileCentreGallery` | `/..\src\pages\ProfileCentreGalleryExpanded` | `/..\src\pages\ProfileUK` | `/..\src\pages\ProfileUofLFavorite` | `/..\src\pages\ProfileUofLGallery` | `/..\src\pages\ProfileUofLGalleryExpanded` | `/..\src\pages\ProfileUofLMatch` | `/..\src\pages\StartupScreen` | `/..\src\pages\StartupScreenTransition` | `/..\src\pages\UserSettings` | `/..\src\reportWebVitals` | `/_sitemap` | `/test` | `/upenn`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
