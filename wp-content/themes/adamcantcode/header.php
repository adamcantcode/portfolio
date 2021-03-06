<?php defined('ABSPATH') or header('Location: /'); ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title><?php wp_title() ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&family=Fredoka+One&display=swap" rel="stylesheet">
  <!-- <link rel="apple-touch-icon" sizes="180x180" href="/wp-content/src/apple-touch-icon.png"> -->
  <!-- <link rel="icon" type="image/png" sizes="32x32" href="/wp-content/src/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/wp-content/src/favicon-16x16.png"> -->
  <!-- <link rel="manifest" href="/wp-content/src/site.webmanifest"> -->
  <?php wp_head(); ?>
</head>

<body <?php body_class('duration-1000') ?>>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollToPlugin.min.js"></script>