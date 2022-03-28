import React from "react"
import Navbar from "./components/navbar"
import Main from "./Main"
 
 
class App extends React.Component{

    render(){
        return(
            <div>
                
                <Navbar />
                <Main />
                
            </div>
        )
    }
}
export default App;