// import logo from './logo.svg';
import './App.css';
//  import Greet from './components/Greet'
import Welcome from './components/Welcome'
import MyNav from './components/Navigation'
// import ContentList from './components/ContentList'; // Check spelling and casing
import ContentList from './components/ContentList'
import 'bootstrap/dist/css/bootstrap.min.css'
// index.js
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS


function App()
 {
              return (
                <div className="App container-fluid">
            <MyNav />{/*this is my navigation componenet. */}
            <Welcome  className="main-1"/>
            {/* here we have our welcome componenet here.displaying card.   */}


            <ContentList /> {/* This is where most my content where live with the cards*/}
                </div>
              );
}

export default App;
