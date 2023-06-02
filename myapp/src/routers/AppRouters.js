import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "../components/LandingPage/landing";
import NewPost from "../components/Post/New/NewPost";
import AllPost from "../components/Post/List/list";


export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="post/new" element={<NewPost />} />
            <Route path="post/All" element={<AllPost />} />
        </Routes>
    </BrowserRouter>
}