<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <header class="site-header">
            <a href="<?php echo esc_url( site_url( '/' ) ); ?>"><h2 class="site-header__title"><?php bloginfo( 'name' ); ?></h2></a>
            <nav class="site-header__nav">
                <ul class="site-header__menu">
                    <li class="site-header__menu__item <?php if ( is_page( 'sample' ) ) echo 'current-menu-item' ?>"><a href="<?php echo esc_url( site_url( '/sample' ) ); ?>">Sample</a></li>
                    <li class="site-header__menu__item"><a href="<?php echo esc_url( site_url( '/about' ) ); ?>">About</a></li>
                    <li class="site-header__menu__item"><a href="<?php echo esc_url( site_ure( '/blog' ) ); ?>">Blog</a></li>
                    <li class="site-header__menu__item"><a href="<?php echo esc_url( site_url( '/contact-us' ) ); ?>">Contact</a></li>
                </ul>
            </nav>
        </header>
