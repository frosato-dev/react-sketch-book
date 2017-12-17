import React, { Component } from 'react';
import Hero from './components/organisms/Hero'
import News from './components/organisms/News'
import { articles } from "./utils/mocks"

class App extends Component {
  render() {
    return (
      <div style={{ margin: 'auto', maxWidth: '1000px' }}>
          <Hero
              color="dark"
              title="Sublime"
              subtitle="Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
              image="https://images.unsplash.com/photo-1509664158680-07c5032b51e5?q=80"
              callToActions={[
                  { title:"DISCOVER" },
                  { title:"CONTACT US" },
              ]}
          />
          <News articles={articles} />
      </div>
    );
  }
}

export default App;
