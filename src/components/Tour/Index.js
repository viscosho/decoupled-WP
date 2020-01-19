import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Tour {

    /**
     * render - Display Tour on the tour
     *
     * @param  {String} slug Slug of tour to display
     */
    static render( slug ) {

        config.wp.posts()
            .slug( slug )
            .embed()
            .then( tour => {
                Helpers.renderContent( tour[ 0 ], 'h1', false );
            } )
            .catch( err => {
                console.log( `Error: ${err}` );
            } );

    }

}