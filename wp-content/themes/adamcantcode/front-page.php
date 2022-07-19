<?php defined('ABSPATH') or header('Location: /'); ?>

<?php get_header(); ?>
<div class="!cursor-none transition-all">
  <div class="cursor absolute h-4 w-4 bg-sky-500 rounded-full pointer-events-none z-50 -left-4 opacity-75"></div>
  <!-- <h3 class="font-outline">test</h3> -->

  <nav class="fixed left-1/2 top-10 -translate-x-1/2 z-10">
    <div class="bg-[rgba(255,255,255,0.25)] p-6 backdrop-blur-lg rounded-full shadow-[0_4px_40px_rgba(0,0,0,0.25)] flex">
      <div class="pages">
        <a href="#" class="font-bold text-base text-neutral-800 py-2 px-6 transition-colors duration-500">about</a>
        <a href="#" class="font-bold text-base text-neutral-800 py-2 px-6 transition-colors duration-500">work</a>
        <a href="#" class="font-bold text-base text-neutral-800 py-2 px-6 transition-colors duration-500">contact</a>
      </div>
      <div class="social">

      </div>
      <div class="resume">
        <a href="#" class="font-bold text-base text-neutral-800 py-2 px-6 border-2 border-neutral-800 rounded-full mx-6 transition-colors duration-500">about</a>
      </div>
    </div>
  </nav>

  <div class="container h-screen flex flex-col justify-between">
    <div class="mt-48">
      <h1 id="name" class="name-card font-sans font-extrabold text-8xl  transition-colors duration-500">adam<br>macaulay</h1>
      <h4 id="identity" class="name-card text-red text-xl font-extrabold mt-4  transition-colors duration-500">designer / developer</h4>
    </div>
    <div class="mb-10 flex justify-between">
      <div class="text-xl font-semibold leading-8">
        <p class="info-item mb-4 transition-colors duration-500">hi there 👋</p>
        <p class="info-item mb-4 transition-colors duration-500">i’m adam—i create for the web</p>
        <p class="info-item transition-colors duration-500">design</p>
        <p class="info-item transition-colors duration-500">develop</p>
        <p class="info-item transition-colors duration-500">optimize</p>
        <p class="info-item transition-colors duration-500">consult</p>
        <p class="info-item transition-colors duration-500">maintain</p>
        <p class="info-item transition-colors duration-500">secure</p>
      </div>
      <div class="text-xl text-sky-500 font-semibold leading-8 self-end">
        <p class="mb-4 "><a href="#">thoughts</a></p>
      </div>
    </div>
  </div>


  <div class="h-[300vh]"></div>
</div>

<?php get_footer(); ?>