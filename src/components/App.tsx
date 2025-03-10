import React, {memo, Suspense} from 'react';
import {useRouterApp} from '@/hooks/useRouter.js';
import {MonoHooksStore} from 'use-mono-hook';
import '../index.css';
import {useLocation} from 'wouter';

const RouterApp = memo(() => {
  const {route, router: {location} = {}, Component} = useRouterApp();
  if (!route || !location) {
    return null;
  }
  return (
    <Suspense fallback={''}>
      {Component && <Component/>}
    </Suspense>
  );
});

const App = memo(() => {

  return (
    <>
      <section className="h-full w-full md:max-w-[25.44rem] " id="main_container">
        <RouterApp/>
      </section>
      <MonoHooksStore/>
    </>
  );
});

export default App;
