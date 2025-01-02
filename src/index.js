import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from "./routes/notfound";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import WeeklyReset from "./routes/weeklyreset";
import ActivityReport from "./routes/activitydata";
import Triumphs from "./routes/triumphs"
import Commendations from './routes/commendations';
import DungeonStats from './routes/dungeonstats'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" index element={<App />} />
      <Route path="weeklyreset" element={<WeeklyReset />} />
      <Route path="activityreport" element={<ActivityReport />} />
      <Route path="triumphs" element={<Triumphs />} />
      <Route path="commendations" element={<Commendations />} />
      <Route path="dungeonstats" element={<DungeonStats />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
