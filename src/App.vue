<template>
  <body>
    <header>
      <header-app />
    </header>
    <main class="main">
      <section class="content"><BodyApp /></section>
    </main>
    <footer-app />
  </body>
</template>

<script>
  import HeaderApp from "./components/HeaderApp";
  import BodyApp from "./components/Body/index";
  import FooterApp from "./components/FooterApp";

  export default {
    components: { HeaderApp, BodyApp, FooterApp }
  };
</script>

<style>
</style>
