/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Make sure that the allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('has a URL defined and not empty', function() {
            for(feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            }
        }) 


        /* Loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name defined and not empty', function() {
            for(feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            }
        }) 

    });


    
    describe('The menu', function() {

        /* Ensures the menu element is
         * hidden by default. 
         */
        it('is hidden by default', function(){
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        })

         /* Ensures the menu changes visibility when the menu 
          * icon is clicked. It tests if the menu displays when
          * clicked and if it hides when clicked again.
          */
        it('displays when clicked ans hides when clicked again', function() {
            $('.menu-icon-link').click(); // click on the hamburger icon
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click(); // click again
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
          
     });

    
    describe('Initial Entries', function() {

        /* Ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done); //loads a feed before testing
        });

        it('ensures there is at least a single entry element', function() {
            expect($('.feed .entry').length).not.toBe(0);
        })
    });     

    
    describe('New Feed Selection', function() {
        /* Ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var feedInitial; // the variables will store the first feed 
        var feedAfter;  // and the feed after that

        beforeEach(function(done) { 
            loadFeed(0, function() {
                feedInitial = $('.feed').html();//load the first feed
                loadFeed(1, function() {
                    feedAfter = $('.feed').html(); // load the second feed   
                    done();
                });
            });
        });

        it('changes the content when a new feed is loaded', function() {
            expect(feedAfter).not.toEqual(feedInitial);       
        })
    });
}());
