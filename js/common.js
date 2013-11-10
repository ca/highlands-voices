/*javescript*/
jQuery(function(){
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal', theme:'light_square', social_tools: false});	
		jQuery('.language').hover(function(){
			jQuery(".language ul").stop(true, true).delay(300).slideDown(200, "easeInSine");
			},
			function() {
			jQuery(".language ul").stop(true, true).delay(300).fadeOut(100, "easeInCubic");
		});
		
		jQuery('.currency').hover(function(){
			jQuery(".currency ul").stop(true, true).delay(300).slideDown(200, "easeInSine");
			},
			function() {
			jQuery(".currency ul").stop(true, true).delay(300).fadeOut(100, "easeInCubic");
		});
		
		jQuery('.cartBox').hover(function(){
			jQuery(".cartContent").stop(true, true).delay(300).slideDown(200, "easeInSine");
			},
			function() {
			jQuery(".cartContent").stop(true, true).delay(300).fadeOut(100, "easeInCubic");
		});	
		
		jQuery('ul.sf-menu').supersubs({ 
			minWidth:18.4,   // minimum width of sub-menus in em units 
			maxWidth:27,	// maximum width of sub-menus in em units 
			extraWidth:1     // extra width can ensure lines don't sometimes turn over due to slight rounding differences and font-family 
		}).superfish({	// main navigation init
			delay:200,		// one second delay on mouseout 
			animation:{opacity:'show',height:"show"}, // fade-in and slide-down animation 
			speed:'normal',  // faster animation speed 
			autoArrows:false,   // generation of arrow mark-up (for submenu) 
			dropShadows:false   // drop shadows (for submenu)
		});
		jQuery('.menuBox').click(function() {
					if (jQuery('#menuInnnerMob').is(":hidden")){
						jQuery('#menuInnnerMob').slideDown("fast");
					} else {
						jQuery('#menuInnnerMob').slideUp("fast");
					}
					return false;
		});
		
		jQuery('.flexslider').flexslider({
									animation: "fade",
									animationLoop: true,
									start: function(slider){
									 jQuery('body').removeClass('loading');
									}
								});
		
		/** Accordion **/
						if(jQuery('.accordion').length) {
							jQuery("ul.accordion li").each(function(){
								jQuery(this).children(".accordion_content").css('height', function(){ 
									return jQuery(this).height(); 
								});
								
								if(jQuery(this).index() > 0){
									jQuery(this).children(".accordion_content").css('display','none');
								}else{
									jQuery(this).find(".accordion_head").addClass('active');
								}
								
								jQuery(this).children(".accordion_head").bind("click", function(){
									jQuery(this).addClass(function(){
										if(jQuery(this).hasClass("active")) return "";
										return "active";
									});
									jQuery(this).siblings(".accordion_content").slideDown();
									jQuery(this).parent().siblings("li").children(".accordion_content").slideUp();
									jQuery(this).parent().siblings("li").find(".active").removeClass("active");
								});
							});
						}

      
	  // Basic FitVids Test
        jQuery(".contentBox").fitVids();
	  	
			jQuery(window).scroll(function () {
				if (jQuery(this).scrollTop() > 100) {
					jQuery('#back-top').fadeIn();
				} else {
					jQuery('#back-top').fadeOut();
				}
				
				if (jQuery(this).scrollTop() >62) {
					jQuery('.parallexFixMenu').addClass('fixMenu');
				} else {
					jQuery('.parallexFixMenu').removeClass('fixMenu');
				}
				
				
			});
			
				jQuery('#back-top a').click(function () {
					jQuery('body,html').animate({
						scrollTop: 0
					}, 800);
					return false;
				});	
		});
		
		$(window).load(function(){
				$('.portfolioLoader').remove();
				$('.portfolio').css('visibility','visible');
				$('.hover-image').hover(function(){		 		 
					$(this).animate({ opacity: 100 }, 200);
				}, function(){
					$(this).animate({ opacity: 0 }, 200);
				});
				
				// ISOTOPE SCRIPTS FOR PORTFOLIO FILTER//
				var $container = $('.grid');
				var $portfolio_container = $('.portfolio-gallery');
				var $gallery_container = $('.gallery-page');
				var $four_container = $('.four-columns, .three-columns, .two-columns');
					
						// gallery masonry layout
							$gallery_container.imagesLoaded( function(){
							  $gallery_container.isotope({
									itemSelector: 'li',
									animationEngine: 'jquery',	
									gutterWidth: 20	
							  });
							});		
			
					
					// portfolio filtering
					$four_container.isotope({
						itemSelector: 'li',
						animationEngine: 'jquery'
					});	  
					  
					var $optionSets = $('#options .porfolio-nav'),
						$optionLinks = $optionSets.find('a');
			
					$optionLinks.click(function(){
						var $this = $(this);
						// don't proceed if already selected
						if ( $this.hasClass('selected') ) {
							return false;
						}
						var $optionSet = $this.parents('.porfolio-nav');
						$optionSet.find('.selected').removeClass('selected');
						$this.addClass('selected');
				  
						// make option object dynamically, i.e. { filter: '.my-filter-class' }
						var options = {},
							key = $optionSet.attr('data-option-key'),
							value = $this.attr('data-option-value');
						// parse 'false' as false boolean
						value = value === 'false' ? false : value;
						options[ key ] = value;
						if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
						  // changes in layout modes need extra logic
						  changeLayoutMode( $this, options )
						} else {
						  // otherwise, apply new options
						  $container.isotope( options );
						  $four_container.isotope( options );
						}
						
						return false;
					});
			});
		
		