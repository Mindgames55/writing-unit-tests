

/*  Placing all of our tests within the $() function,
 * since some of these tests may require DOM elements, ensuring they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('feeds url are defined', function() {
             allFeeds.forEach(function(feed){
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
             })
         });

         /* Loops through each feed
          * in the allFeeds object and ensures it has a name defined
          * and that the name is not empty.
          */
          it('feeds name are defined', function() {
              allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
              })
          });
    });


    describe('The menu', function() {
      /* Ensures the menu element is
       * hidden by default. It should have the class 'menu-hidden', which
       is off screen per the CSS file
       */
       it('menu is hidden by default', function(){
         let bodyMenuHidden=$('body');

          let classHidden = bodyMenuHidden.hasClass('menu-hidden');
         expect(classHidden).toBe(true);
       });

       /* ensures the menu changes
        * visibility when the menu icon is clicked, ensuring the body element
        toggles 'menu-hidden' class on click
        */

          it('menu changes visibility on click',function(){
            const menu = $('.menu-icon-link');
            menu.click();
            let bodyMenuHidden=$('body');
            let classHidden = bodyMenuHidden.hasClass('menu-hidden');
              expect(classHidden).not.toBe(true);
              menu.click();
              classHidden = bodyMenuHidden.hasClass('menu-hidden');
              expect(classHidden).toBe(true);

            });
    });

    describe('Initial Entries', function() {
      /* ensures when the loadFeed
       * function is called and completes its work (asynchronous function), there is at least
       * a single .entry element within the .feed container.
       */

       beforeEach(function(done){
         setTimeout(function(){
           done();
         },2000)
       });

       it('feeds contain entries', function(){
         let childrenAmount = $('.feed').children().length;
         expect(childrenAmount).not.toBe(0);
       });
    });

    describe('New Feed Selection', function(){
      let headerTitle = $('.header-title').text();
      let feedListLinks = document.querySelectorAll('.feed-list a');
      let content = $('.feed').html();
      let link;
      let i=0;
      beforeEach(function(done){
          link=feedListLinks[i];
          link.click();
          i++
        setTimeout(function(){
          done();
        },2000)
      });

      /*ensures when a new feed is loaded (on menu-links click events)
       * by the loadFeed function that the content actually changes.
       */
       feedListLinks.forEach(function(newFeed){
         it('clicking in a new feed changes content', function(){
           if (headerTitle!==newFeed.innerText){
             //the user clicks on a different feed
             expect($('.feed').html()).not.toEqual(content);
             content=$('.feed').html();
             headerTitle=newFeed.innerText;
           }
           else {
             //the user has clicked on the same feed that is already dispalyed on page
             expect($('.feed').html()).toEqual(content);
           }
         });
       });
    });
}());
