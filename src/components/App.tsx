import React, {memo, Suspense} from 'react';
import {MonoHooksStore} from 'use-mono-hook';
import '../index.css';
import {Route, Switch, Redirect} from "wouter";
import PostComponent from "pages/post/index.js";
import PostList from "pages/postsList/index.js";


const App = memo(() => {
  return (
    <>
      <Switch>
        <Route path="/" component={() => <Redirect to="/posts"/>}/>
        <Route path="/posts" component={PostList}/>
        <Route path="/posts/:id" component={PostComponent}/>
        <Route path="*">404: No such page!</Route>
      </Switch>
      <MonoHooksStore/>
    </>
  );
});

export default App;
