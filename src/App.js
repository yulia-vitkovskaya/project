import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';

const App = (props) => {
    
    return(
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Dialogs' element={<Dialogs store = {props.store}/>} />
                        <Route path='/Content' element={<Content
                            ProfilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        /> }/>
                    </Routes>
                </div>
            </div>
    )
}

export default App;