import React, { Component } from 'react';
import HeroList from '../../components/HeroList/HeroList';
import AppNav from '../../components/AppNav/AppNav';
import './_shared.scss';
import { createClient } from 'marvel-api';
import Pagination from '@material-ui/lab/pagination';

class HerosListContainer extends Component {

    constructor() {
        super();
        this.state = {
            herosData: [],
            posicion: 0,
        };
    }
    componentDidMount() {
        var api = createClient({
            publicKey: 'd15729400958cfddd4ee472d6d3c14a6',
            privateKey: `${process.env.REACT_APP_API_KEY}`,
        });
        api.characters.findAll(20, 0)
            .then(res => {
                const herosData = res.data;
                const total = res.meta.total;
                this.setState({
                    herosData,
                    total
                })
            })
    };

    handlePaging(page) { 
        var api = createClient({
            publicKey: 'd15729400958cfddd4ee472d6d3c14a6',
            privateKey: `${process.env.REACT_APP_API_KEY}`,
        });
        api.characters.findAll(20, (page * 20) - 20)
            .then(res => {
                const herosData = res.data;
                this.setState({
                    herosData,
                    posicion: (page * 20) - 20
                })
            })
    };


    handleSearch = async (search) => {
        var api = createClient({
            publicKey: 'd15729400958cfddd4ee472d6d3c14a6',
            privateKey: '83dead4cebeffaf69e4b14f99a12559d97d78740',
        });
        api.characters.findNameStartsWith(search)
            .then(res => {
                const herosData = res.data;
                this.setState({

                    herosData,
                })
            })
    };

    render() {
        const { herosData } = this.state;
        const total = ((this.state.total / 20) | 0) + 1;
        return (
            <div className="List__background">
                <AppNav handleSearch={this.handleSearch} />
                <nav className="List__pagging">
                    <Pagination   size="large" count={total} size="large" color="secondary" onChange={(event, page) => this.handlePaging(page)} />
                </nav >
                <h1 className="List__titulo">SUPER HEROES</h1>
                <HeroList herosdata={herosData} />
            </div>
        );
    }
}

export default HerosListContainer;



