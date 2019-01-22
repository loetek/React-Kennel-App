import React, { Component } from 'react'


export default class LocationList  extends Component {

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    state = {
        locations: this.locationsFromAPI
    }

    render() 
    {
        return (
            <section className="locations">
            {
                this.state.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                    </div>
                )
            }
            </section>
        );
    }
}