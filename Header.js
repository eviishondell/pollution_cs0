import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    }

    return(
        <div>
            <h1>Pollution</h1>
            <h3 style={style}><Link to='/'>Home</Link></h3>
            <h3 style={style}><Link to='/whatIsIt'>What Is It?</Link></h3>
            <h3 style={style}><Link to='/howCanWeHelp'>How can we help?</Link></h3>
            <h3 style={style}><Link to='/data'>Data</Link></h3>
        </div>
    )
    
}

export default Header