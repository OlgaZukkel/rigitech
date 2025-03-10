import React, {memo, Suspense} from 'react';
import {MonoHooksStore} from 'use-mono-hook';
import '../index.css';
import {Route, Switch} from "wouter";
import PostComponent from "pages/postsList/componets/post/index.js";
import PostList from "pages/postsList/index.js";


const App = memo(() => {
  return (
    <>
      <Switch>
        <Route path="/posts" component={PostList}/>
        <Route path="/posts/:id" component={PostComponent}/>
        <Route>404: No such page!</Route>
      </Switch>
      <MonoHooksStore/>
    </>
  );
});

export default App;
