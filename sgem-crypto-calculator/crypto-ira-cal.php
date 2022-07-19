<?php
/**
 * @package SGEM Crypto IRA Calculator
 */
/*
Plugin Name: SGEM Crypto IRA Calculator
Plugin URI: https://surge.global
Description: SGEM Crypto IRA Calculator
Version: 1.0
Author: Surge Web Dev Team 
Author URI: https://surge.global
License: GPLv2 or later
Text Domain: sgem-crypto-ira-calculator
*/ 

/* Custom JS */
function sgem_crypto_ira_cal_js(){
  if (is_page(1748))  {

  wp_enqueue_script('sgem-crypto-ira-calculator-popper', 'https://unpkg.com/@popperjs/core@2.11.5/dist/umd/popper.min.js', array('jquery'), '1.2', true);
  wp_enqueue_script('sgem-crypto-ira-calculator-tippy', 'https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js', array('jquery'), '1.2', true);

  wp_enqueue_script('sgem-crypto-ira-scripts', plugins_url('/assets/js/cal-crypto-ira-scripts.js', __FILE__), array('jquery'), '1.486', true);  
  //wp_enqueue_script('sgem-crypto-ira-scripts4', plugins_url('/assets/js/cal-crypto-ira-chart.js', __FILE__), array('jquery'), '2.8', true);  
  } 
   
}
add_action('wp_enqueue_scripts', "sgem_crypto_ira_cal_js");

/* Custom css */
function sgem_crypto_ira_cal_css() {
  wp_enqueue_style( 'sgem-crypto-ira-calculator-tooltip', plugins_url('/assets/css/tooltipster.bundle.min.css', __FILE__),false,'1.2','all');
  wp_enqueue_style( 'sgem-crypto-ira-calculator-style', plugins_url('/assets/css/crypto-ira-styles.css', __FILE__),false,'1.34','all'); 
}
  
add_action( 'wp_enqueue_scripts', 'sgem_crypto_ira_cal_css');    



// Calculator Shortcode
function sgem_crypto_ira_cal_shortcode() {   
  $sgem_cal_content = '<div id="sgem-crypto-ira-cal-main-id"></div>'; 
  return $sgem_cal_content;
}
add_shortcode('sgem-crypto-ira-calculator', 'sgem_crypto_ira_cal_shortcode');