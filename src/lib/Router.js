import Helpers from './Helpers';
import Page from '../components/Page';
import Posts from '../components/Posts';
import Post from '../components/Post';

export default class Router {

    /**
     * init - Initializes the Router
     *
     * @returns {void} Not meant to return
     */
    static init() {

        Helpers.clearPage();
        Router.loadPage();
        Router.listenPageChange();

    }

    /**
     * Gets the slug from the URL
     *
     * @return {string} slug Slug from URL
     */
    static getSlug() {

        let slug = window.location.hash;

        if ( "" === slug ) {
            return null;
        } else {
            return slug.substr( 1 );
        }

    }

    /**
     * Listener function for URL changes
     *
     * @return {void} Not meant to return
     */
    static listenPageChange() {

        window.addEventListener( 'hashchange', Router.loadPage, false );

    }


    /**
     * loadPage - Loads Page based on URL
     * @return {void} Not meant to return
     */
    static loadPage() {

        let slug = Router.getSlug() || 'home';

        if ( '/' == slug ) slug = 'home';

        if ( '/blog-2' == slug ) {

            Helpers.clearContent();
            Posts.render();

        } else if ( '/post' == slug.substring( 0, 5 ) ) {

            Helpers.clearContent();
            Post.render( slug.substring( 6 ) );

        } else {

            Helpers.clearPage();
            Page.render( slug );

        }

    }
}
