<template>
  <div>
    <Navigation />
    <Header />
    <firstSection />
    <Features />
    <sectionTours />
    <Pop_up />
    <Testimonios />
    <Booking />
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import firstSection from "../components/firstSection";
import Features from "../components/Features";
import sectionTours from "../components/sectionTours";
import Pop_up from "../components/Pop_up";
import Testimonios from "../components/Testimonios";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Navigation,
    Header,
    firstSection,
    Features,
    sectionTours,
    Pop_up,
    Testimonios,
    Booking,
    Footer,
  },
};
</script>

<style></style>
