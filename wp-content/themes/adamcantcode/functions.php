<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

/**
 * ACTIONS
 */
add_action('wp_enqueue_scripts', 'add_scripts_styles');



/**
 * Enque CSS and JS
 */
function add_scripts_styles()
{
  wp_enqueue_style('acc-styles', get_theme_file_uri('/dist/css/app.css'));
  wp_enqueue_script('acc-script', get_theme_file_uri('/dist/js/app.js'), array('jquery'));
}