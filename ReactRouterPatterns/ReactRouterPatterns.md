# URL Params

Want to have a reusable route and pull out params. As opposed to listing every possible `Route` individually. Use `:` to specify param name

```
<Route path="/food/kale" render={ () => <Food name="kale" />} />
```

Would end up being a lot of duplication. Want to DRY it out.

```
<Route path="/food/:name" render={ () => <Food name="kale" />} />
```

All Routes get 3 props passed to them. `match` `location` and `history`. Match contains useful informatin like path, url, isExact, params

```
<Route path="/food/:name" render={ (routeProps) => <Food name="kale" routes={routeProps} />} />
```

So to pass in the params from the url can pull it out.

```
<Route path="/food/:name" render={ (routeProps) => <Food name={routeProps.match.params.name} />} />

or pass everything as props down to it

<Route path="/food/:name" render={ (routeProps) => <Food {...routeProps} />} />
```

# Multiple Route Params

Can also pass in routeProps plus additional values

```
<Route path="/food/:name" render={ (routeProps) => <Food authenticated={true} favorite={true} {...routeProps} />} />
```

Assume Meal component with two props. Route props will include all the additional dynamic urls params. So in the below case

```
<Route exact path="/meal/:meal/drink/:drink" render={ (routeProps) => <Meal {...routeProps} />} />

this.props.match.params.name
this.props.match.params.drink
```

# Adding a 404 Not Found Route

Use a Route without a path. Need to use a Switch to wrap it. This will cause only one thing to actually match instead of mutliple routes matching for being valid.
Be mindful of the order in the Switch. It will stop checking if it finds a match

```
<Switch>
 <Route render={() => <h1>Not Found</h1>} />
</Switch>
```

# Simple Search Form

Use a `<Link to={food/query>}>` tag that updates it's `to` value to send to the URL with the params included

# Redirects

Useful after user completes an action (submit a form) or User does something that results in an error.

Use the `<Redirect>` component inside the `render`.

```
Test if a prop named name is a digit 
 {/\d/.test(name) ? <Redirect to='/'>  : <div>Youre good</div>}
```

# Pushing onto History prop

Useful for back button support in the Browser. This also causes a Redirect to execute. Just call `.push()`. Your component needs to have the history prop from the route params. Either pass them in on the render call or use component 

```
this.props.history.push("/")

<Route exact path="/meal/:meal/drink/:drink" render={ routeProps => <FoodSearch {...routeProps} />} />

or 

<Route exact path="/meals" component={FoodSearch} />} />
```

# Comparing History vs Redirect

Using Redirect route vs manipulating the history prop. If we're doing a check in a component then doing history.push. Using the browser back button will keep going back to that component. Which will in turn keep pushing.

# Adding Back Button

```

handleBack() {
    this.props.history.goBack()
}

 <button onClick={this.handleBack}>
```