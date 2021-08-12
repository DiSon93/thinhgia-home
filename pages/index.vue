<template>
    <div class="homepage">
        <div justify="center">
            <!-- <div> -->
            <Carousel />
            <!-- </div> -->
        </div>
        <div class="homepage_content">
            <!-- <div justify="center"> -->
            <Banner />
            <!-- </div> -->
            <div justify="center">
                <SpecialSale />
            </div>
            <div justify="center">
                <SpecialEstate />
            </div>
            <div justify="center">
                <SellEstate />
            </div>
            <div justify="center">
                <RentEstate />
            </div>
            <div justify="center">
                <Project />
            </div>
            <div justify="center">
                <Choise />
            </div>
        </div>
        <div justify="center">
            <Services />
        </div>
        <div justify="center">
            <Footer />
        </div>
    </div>
</template>

<script>
    import Carousel from "@component/main/Carousel";
    import Banner from "@component/main/Banner";
    import SpecialSale from "@component/main/Special_sale";
    import SpecialEstate from "@component/main/Special_estate";
    import SellEstate from "@component/main/SellEstate";
    import RentEstate from "@component/main/RentEstate";
    import Project from "@component/main/Project";
    import Choise from "@component/main/Choise";
    import Services from "@component/main/Services";
    import Footer from "@component/main/Footer.vue";

    export default {
        components: {
            Carousel,
            Banner,
            SpecialSale,
            SpecialEstate,
            SellEstate,
            RentEstate,
            Project,
            Choise,
            Services,
            Footer,
        },
        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start();
                setTimeout(() => this.$nuxt.$loading.finish(), 500);
            });
        }
    }
</script>
<style lang="scss" scoped>
    .homepage_content {
        padding: 0 10%;
    }
    .homepage {
        margin-top: 0px;
    }
    @media screen and (max-width: 1250px) {
        .homepage_content {
            padding: 0 5%;
        }
    }
</style>