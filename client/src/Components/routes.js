import ProfilePage from "../pages/ProfilePage";
import News from "../pages/News";
import {LIKED_ROUTE, NEWS_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE} from "../utils/consts";
import LikedPosts from "../pages/LikedPosts";
import Registration from "../pages/Registration";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    }
]

export const publicRoutes = [
    {
        path: NEWS_ROUTE,
        Component: News,
    },
    {
        path: LIKED_ROUTE,
        Component: LikedPosts,
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: REGISTER_ROUTE,
        Component: Registration
    }
]