import React from 'react';
import events from '../data/events.json';
import { Link } from 'react-router-dom';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { event: {} };
    }

    getEvents() {
        const id = this.props.match.params.eventId;
        const event = events.find(item => item.id === parseInt(id, 10));
        return event;
    }

    componentDidMount() {
        this.setState({
            event: this.getEvents()
        })
    }

    componentDidUpdate() {
        const event = this.getEvents();

        if(event.id !== this.state.event.id) {
            this.setState({
                event
            });
        }
    }

    render() {
        const { name, place, date, time } = this.state.event

        return (
            <div>
                <strong>Nazwa: </strong>{name}<br />
                <strong>Miejsce: </strong>{place}<br />
                <strong>Data: </strong>{date}<br />
                <strong>Godzina: </strong>{time}<br />
                <Link to='/'>Strona Domowa</Link>
            </div>
        )
    }
}

export default Details;