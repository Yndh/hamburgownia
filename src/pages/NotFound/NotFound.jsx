import { Link } from 'react-router-dom' 

import './NotFound.css'

import NavBar from '../../components/NavBar/NavBar';

const NotFound = () => {
    return (
      <div className="app">
        <NavBar />

        <div className="notFound__container">
            <span className="notFound-title">
                404
            </span>
            <h2>Strona nie istnieje</h2>
            <Link to='/'><button>Strona Główna</button></Link>
        </div>
      </div>
    );
}
export default NotFound;