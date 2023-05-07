import React, { useEffect, useState } from 'react';
import './main.css';
import ProductList from './Products/ProductList';
import Counter from './Counter';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from './AppRoutes';
import AppContext from './context/AppContext';

function App() {
    // const para = React.createElement('p', {}, 'This is a test paragraph');
    
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect( () => {
        
        setLoggedIn(localStorage.getItem('token')?true:false);
        
    }, [isLoggedIn]);
    
    return <div>
        <AppContext.Provider value={{isLoggedIn, setLoggedIn}}>
        <Header />
        <AppRoutes />
        </AppContext.Provider>
    </div>
}

export default App;