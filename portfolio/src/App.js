import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { IndexPage, About, Education, Project, Skill } from "./pages";
import { DateTime, Sidebar } from './components';
import { ToastContainer } from 'react-toastify';


const routerComp = [
  { path: "/", comp: <IndexPage /> },
  { path: "/about-me", comp: <About /> },
  { path: "/education", comp: <Education /> },
  { path: "/Skills", comp: <Skill /> },
  { path: "/projects", comp: <Project /> },
];

export default function App() {
  const pathname = useLocation().pathname;
  useEffect(() => {
    document.querySelectorAll('link').forEach(doc => {
      if (doc.rel.includes('icon')) {
        // doc.href = `/logo/logo${Math.floor(Math.random() * 13) +1}.jpg`;
        doc.href = `/logo/logo8.png`;
        // doc.href = `/logo/logo13.png`;
      }
    });
  }, []);
  return (
    <>
      {pathname === '/' && <DateTime />}
      <Routes>
        {routerComp.map(({ path, comp }) => (
          <Route path={path} element={comp} key={path} />
        ))}
      </Routes>
      <ToastContainer />
    </>
  )
}
