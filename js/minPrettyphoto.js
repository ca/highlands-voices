/*javescript*/
jQuery(function() {
 //--------------------------Pretty Photo--------------------------
	jQuery('.active').show();      
	  if( jQuery().isotope ) {

	    jQuery(function() {

            var container = jQuery('.porfolio-content'),
                optionFilter = jQuery('#filters'),
                optionFilterLinks = optionFilter.find('a');

            optionFilterLinks.attr('href', '#');

            optionFilterLinks.click(function(){
                var selector = jQuery(this).attr('data-filter');
                container.isotope({
                    filter : '.' + selector,
                    itemSelector : '.box',
                    layoutMode : 'masonry',
                    animationEngine : 'best-available'
                });

                // Highlight the correct filter
                optionFilterLinks.removeClass('active');
                jQuery(this).addClass('active');
                return false;
            });

	    });
            
            
            
            jQuery(function() {

            var container = jQuery('.blog-detail-small-imgs'),
                optionFilter = jQuery('#filters'),
                optionFilterLinks = optionFilter.find('a');

            optionFilterLinks.attr('href', '#');

            optionFilterLinks.click(function(){
                var selector = jQuery(this).attr('data-filter');
                container.isotope({
                    filter : '.' + selector,
                    itemSelector : '.blog-detail-small-img',
                    layoutMode : 'masonry',
                    animationEngine : 'best-available'
                });

                // Highlight the correct filter
                optionFilterLinks.removeClass('active');
                jQuery(this).addClass('active');
                return false;
            });

	    });

	}
        
  /* Portfolio Hover -------------------------------------*/

  jQuery('.box-hover').css({
        opacity: 0
    });

    jQuery('.box-hover').hover(function(){

        jQuery(this).addClass('current_project');
        jQuery('.current_project').stop().animate({
            opacity: 1
        }, 250);

    }, function(){

        jQuery('.current_project').stop().animate({
            opacity: 0
        }, 200);
        jQuery('.current_project').removeClass('current_project');

    });
                
});