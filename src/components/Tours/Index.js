import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Tours {

    /**
     * render - Display Tours on the tour
     *
     */
    static render() {

        config.wp.tours()
            .embed()
            .perPage( 12 )
            .then( tours => {
                Helpers.renderHeader( 'Tour', 'h1' );
                let renderedTours = tours.map( content => {
                    Helpers.renderTour( content, 'h2', true );
                } );
            } )
            .catch( err => {
                console.log( 'Error: ' + err );
            } );
    }

}
