import React from 'react'; // react is a pckg in node_modules folder
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Middle from './Components/Middle'

// stateless or a functional component
function App(){
  return (
    <div>
      <Header />
      <HelloWorld name="Nomaira"/>
      <Middle name=": Happy"/>
      <Footer />
    </div>
  );
}
export default App;