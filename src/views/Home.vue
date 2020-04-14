<template>
  <div>
    <Header />
    <firstSection />
    <Features />
    <sectionTours />
    <Testimonios />
    <Booking />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import firstSection from "../components/firstSection";
import Features from "../components/Features";
import sectionTours from "../components/sectionTours";
import Testimonios from "../components/Testimonios";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    firstSection,
    Features,
    sectionTours,
    Testimonios,
    Booking,
    Footer
  }
};
</script>

<style></style>
