# Client Side Routing with React Router

What is client side vs server side. Why you'd use client side. Traditional is server side routing via an `<a>` tag. Based on the URL information determines what page to html filled page to send back. `/movies/:id`. Takes that route, finds the movie with the id and renders.

Client Side "fakes" that. Page never refreshes/loads new page. The Main page stays but new content is brought in and out.

Can sort of make it work by have a `page` state in React. In render switch over that state to return a `Component` to render.

However, the browser history isn't updated. So back buttons don't really work.

# React Router First Route

All done on the client side. URL bar does get updated but no request is sent to the server. These are also known as single page applications.

`npm install react-router-dom`

```
 import { BrowserRouter } from 'react-router-dom'

 <BrowserRouter>
  <App />
</BrowserRouter>

import { Route, Switch } from 'react-router-dom' 
<div className='App'>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dog' component={Dog} />
        <Route exact path='/dog/lover', component={DogLover} >
        <Route exact path='/contact' component={Contact} />
    <Switch>
</div>
```

Pattern matching is inclusive. So you could match `/` and `/dog` if you navigate to `/dog` in the browser. Wrap routes in `<Swtich>`. Take note of the order of your routes. Use `exact` only counts as a match

# Link Component 

Is a replacement for `a` anchor tags. Use a prop `to`. JS intercepts the click and does client side routing.

```
import { Link } from `react-router-dom`
<nav>

 <Link to='/'>Home</Link>
 <Link to='/about'>About</Link>
 <Link to='/dog'>Dog</Link>
</nav>
```

# NavLinks

You can style the active route more easily with using this. Pass in `activeClassName`. Router handles adding the css class. Need to use `exact` so it pattern matches exactly.

```
import { NavLink } from `react-router-dom`

<nav>

 <NavLink exact activeClassName='active' to='/'>Home</NavLink>
 <NavLink exact activeClassName='active' to='/about'>About</NavLink>
 <NavLink exact activeClassName='active' to='/dog'>Dog</NavLink>
</nav>
```

# Render vs component Prop in Route

If you want to pass props to a Component in a Route you cant just use  `component={}`. You could pass a function to `component={}`

```
component={() => <Dog name='Trix' />}
```

This continually makes a new component. You can find that the lifecycle methods are called on the old and new component.

Try using `render={}` instead. This allows only one Component to have their render method called repeatedly. 