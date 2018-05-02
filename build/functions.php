<?php

// Call theme stylesheets
function theme_styles () {
    wp_enqueue_style( 'main', get_stylesheet_uri(), '', microtime(), '' );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

// Call theme scripts
function theme_scripts () {
    wp_enqueue_script( 'appjs', get_theme_file_uri( '/js/app.bundle.js'), NULL, microtime(), true );
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );

// Theme Settings
function theme_settings () {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'theme_settings' );
