import WPAPI from 'wpapi';

let config = {
    body: document.querySelector( 'body' ),
    siteTitle: document.querySelector( '.site-title a' ),
    siteDescription: document.querySelector( '.site-description' ),
    title: document.querySelector( '.title-editor' ),
    content: document.querySelector( '#content-editor' ),
    menuContainer: document.querySelector( '#mainNav ul' ),
    articleContainer: document.querySelector( 'main#main' ),
    sidebar: document.querySelector( '#secondary' ),
    apiRoot: 'https://to-demo.lsdev.biz/wp-json/',
    apiUrl: 'https://to-demo.lsdev.biz',
};

config.page404 = {
    type: '404',
    title: {
        rendered: '404 Error.'
    },
    content: {
        rendered: '<p>This Page was not found</p>'
    },
    link: '/',
    _embedded: {
        author: [
            {
                name: 'Admin'
            }
        ]
    }
};


config.wp = new WPAPI( { endpoint: config.apiRoot } );

//var apiPromise = WPAPI.discover( config.apiUrl );

config.wp.tours = config.wp.registerRoute(`wp/v2`, `/tours`);
//config.wp.tour = config.wp.registerRoute(`wp/v2`, `/tours/(?P<id>`);

export default config;
