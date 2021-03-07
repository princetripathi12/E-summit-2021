"use strict";

is_visible_init();
genesisexpo_slick_navigation_init();

jQuery(document).ready(function($) {
    genesisexpo_sticky_init();
    genesisexpo_search_init();
    genesisexpo_mobile_header();
    genesisexpo_menu_lavalamp();
    genesisexpo_woocommerce_qty();
    genesisexpo_init_timeline_appear();
    genesisexpo_init_timeline_horizontal_appear();
    genesisexpo_init_progress_appear();
    genesisexpo_carousel_slick();
    genesisexpo_counter_init();
    genesisexpo_countdown_init();
    genesisexpo_img_layers();
    genesisexpo_page_title_parallax();
    genesisexpo_message_anim_init();
    genesisexpo_scroll_up();
    genesisexpo_link_scroll();
    genesisexpo_skrollr_init();
    genesisexpo_sticky_sidebar();
    genesisexpo_videobox_init();
    genesisexpo_parallax_video();
    wgl_timeTabs();
    genesisexpo_select_wrap();
    jQuery('.wgl_module_title .carousel_arrows').genesisexpo_slick_navigation();
});

jQuery(window).load(function() {
    genesisexpo_isotope();
    genesisexpo_blog_masonry_init();
    genesisexpo_instagram_init();
    setTimeout(function() {
        jQuery('#preloader-wrapper').fadeOut();
    }, 1100);
    particles_custom();
    jQuery(".wgl-currency-stripe_scrolling").each(function() {
        jQuery(this).simplemarquee({
            speed: 40,
            space: 0,
            handleHover: true,
            handleResize: true
        });
    })
});