import React, { Component } from 'react';
import HeroDescription from '../../components/HeroDescription/HeroDescription';
import { Grid } from '@material-ui/core';
import AppNav from '../../components/AppNav/AppNav';
import './_shared.scss';
import { createClient } from 'marvel-api';

class HeroInfoContainer extends Component {

    state = {
        herosData: [],
    };

    componentDidMount() {
        var api = createClient({
            publicKey: 'd15729400958cfddd4ee472d6d3c14a6',
            privateKey: `${process.env.REACT_APP_API_KEY}`,
        });
        const { match } = this.props;
        const heroId = match.params.heroIndex;
        api.characters.find(heroId)
            .then(res => {
                const herosData = res.data;
                this.setState({
                    herosData
                })
            })

    }

    handleSearch = async (search) => {
        var api = createClient({
            publicKey: 'd15729400958cfddd4ee472d6d3c14a6',
            privateKey: `${process.env.REACT_APP_API_KEY}`,
        });
        api.characters.findByName(search)
            .then(res => {
                const herosData = res.data;
                this.setState({

                    herosData,
                })
            })
    };

    render() {
        const { herosData } = this.state;
        return (
            <>
                <div className="List__background">
                    <AppNav handleSearch={this.handleSearch} />
                    < Grid justify="center">
                        {herosData.map((heroe, index) => {
                            return (
                                <div>
                                    <HeroDescription
                                        heroImage={heroe.thumbnail.path + '/portrait_uncanny' + '.jpg'}
                                        heroName={heroe.name}
                                        heroDescrip={heroe.description}
                                    />
                                </div>
                            );
                        }
                        )}
                    </Grid>
                </div>
            </>
        )
    }

}
export default HeroInfoContainer;