import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


class Search extends React.Component {



    constructor(props) {
        super(props)
        this.state = { search: "" }
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }

    render() {


        const { handleSearch } = this.props
        const { search } = this.state

        return (

            <AppBar className='NavColor'
                 position='static'
                style={{ background: '#5A061D' }}>
                <Toolbar variant='dense'>
                    <Link to='/'>Home</Link>
                    <div className='AppNav_Marvel'>
                        <a href="https://www.marvel.com/"  >
                            <img src={process.env.PUBLIC_URL + '/images/Marvel.png'} alt='Marvel' />
                        </a>
                    </div>
                    <div className="search-container">
                        <Paper>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                value={search}
                                onChange={this.handleChange}
                                style={{
                                    background: '#fff6f8',
                                    padding: '0 0 0 15px'
                                }}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        handleSearch(search)
                                    }
                                  }}
                            />
                            <IconButton
                                type="submit"
                                aria-label="search"
                                className="search-btn"
                                onClick={() => handleSearch(search)}
                                style={{
                                    background: '#fff6f8',
                                    flex: 1
                                }} >
                                <SearchIcon fontSize="small" />
                            </IconButton>
                        </Paper>
                    </div>
                </Toolbar>
            </AppBar>

        )
    }
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}


export default (Search)