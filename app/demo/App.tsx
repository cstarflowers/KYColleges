import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProfileUofLMatch from "./pages/ProfileUofLMatch";
import OpeningSurveyRanks from "./pages/OpeningSurveyRanks";
import StartupScreenTransition from "./pages/StartupScreenTransition";
import UserSettings from "./pages/UserSettings";
import StartupScreen from "./pages/StartupScreen";
import ProfileCentreCollege from "./pages/ProfileCentreCollege";
import ProfileUK from "./pages/ProfileUK";
import OpeningSurveyMajorStats from "./pages/OpeningSurveyMajorStats";
import OpeningSurveyFavorites from "./pages/OpeningSurveyFavorites";
import OpeningSurveyRanksFilled from "./pages/OpeningSurveyRanksFilled";
import ProfileUofLFavorite from "./pages/ProfileUofLFavorite";
import ProfileCentreGallery from "./pages/ProfileCentreGallery";
import HomeFilterExpanded from "./pages/HomeFilterExpanded";
import HomeMenuExpanded from "./pages/HomeMenuExpanded";
import ProfileUofLGallery from "./pages/ProfileUofLGallery";
import ProfileCentreGalleryExpanded from "./pages/ProfileCentreGalleryExpanded";
import ProfileUofLGalleryExpanded from "./pages/ProfileUofLGalleryExpanded";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile-uofl-match":
        title = "";
        metaDescription = "";
        break;
      case "/opening-survey-ranks":
        title = "";
        metaDescription = "";
        break;
      case "/startup-screen-transition":
        title = "";
        metaDescription = "";
        break;
      case "/user-settings":
        title = "";
        metaDescription = "";
        break;
      case "/startup-screen":
        title = "";
        metaDescription = "";
        break;
      case "/profile-centre-college":
        title = "";
        metaDescription = "";
        break;
      case "/profile-uk":
        title = "";
        metaDescription = "";
        break;
      case "/opening-survey-majorstats":
        title = "";
        metaDescription = "";
        break;
      case "/opening-survey-favorites":
        title = "";
        metaDescription = "";
        break;
      case "/opening-survey-ranks-filled":
        title = "";
        metaDescription = "";
        break;
      case "/profile-uofl-favorite":
        title = "";
        metaDescription = "";
        break;
      case "/profile-centre-gallery":
        title = "";
        metaDescription = "";
        break;
      case "/home-filter-expanded":
        title = "";
        metaDescription = "";
        break;
      case "/home-menu-expanded":
        title = "";
        metaDescription = "";
        break;
      case "/profile-uofl-gallery":
        title = "";
        metaDescription = "";
        break;
      case "/profile-centre-gallery-expanded":
        title = "";
        metaDescription = "";
        break;
      case "/profile-uofl-gallery-expanded":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile-uofl-match" element={<ProfileUofLMatch />} />
      <Route path="/opening-survey-ranks" element={<OpeningSurveyRanks />} />
      <Route
        path="/startup-screen-transition"
        element={<StartupScreenTransition />}
      />
      <Route path="/user-settings" element={<UserSettings />} />
      <Route path="/startup-screen" element={<StartupScreen />} />
      <Route
        path="/profile-centre-college"
        element={<ProfileCentreCollege />}
      />
      <Route path="/profile-uk" element={<ProfileUK />} />
      <Route
        path="/opening-survey-majorstats"
        element={<OpeningSurveyMajorStats />}
      />
      <Route
        path="/opening-survey-favorites"
        element={<OpeningSurveyFavorites />}
      />
      <Route
        path="/opening-survey-ranks-filled"
        element={<OpeningSurveyRanksFilled />}
      />
      <Route path="/profile-uofl-favorite" element={<ProfileUofLFavorite />} />
      <Route
        path="/profile-centre-gallery"
        element={<ProfileCentreGallery />}
      />
      <Route path="/home-filter-expanded" element={<HomeFilterExpanded />} />
      <Route path="/home-menu-expanded" element={<HomeMenuExpanded />} />
      <Route path="/profile-uofl-gallery" element={<ProfileUofLGallery />} />
      <Route
        path="/profile-centre-gallery-expanded"
        element={<ProfileCentreGalleryExpanded />}
      />
      <Route
        path="/profile-uofl-gallery-expanded"
        element={<ProfileUofLGalleryExpanded />}
      />
    </Routes>
  );
}
export default App;
