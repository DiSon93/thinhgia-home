<template>
    <v-lazy
        v-model="isActive"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="fade-transition"
    >
        <div>
            <div class="contact">
                <v-row>
                    <v-col cols="7" class="infomation">
                        <div class="contact_info" v-html="contactType.title"></div>

                        <el-divider></el-divider>
                        
                        <div class="content">
                            <div v-html="contactType.content"></div>
                        </div>
                    </v-col>
                    <v-col cols="5">
                        <FormContact :contact_type_id="contact_type_id" />
                    </v-col>
                </v-row>
            </div>
            <div class="footer">
                <Services />
                <Footer />
            </div>
        </div>
    </v-lazy>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import Services from "@component/main/Services";
    import Footer from "@component/main/Footer";
    import FormContact from "@component/tools/FormContact";

    export default {
        components: {
            Services,
            Footer,
            FormContact
        },
        data() {
            return {
                isActive: false,
                contact_type_id: 0,
                arr: {
                    'information': 1,
                    'idea': 2,
                    'recruiment': 3
                }
            }
        },
        computed: {
            ...mapState("contact", ["contactType"])
        },
        mounted() {
            let params = this.$route.params.slug;
            if (params != undefined) {
                try {
                    this.contact_type_id = this.arr[params];
                    this.getContactType(this.contact_type_id);
                } catch (e) {

                }
            }
        },
        methods: {
            ...mapActions('contact', ['getContactType'])
        }
    }
</script>

<style lang="scss" scoped>
    .contact {
        padding: 0 10%;
        margin-top: 40px;
        .infomation {
            padding-right: 30px;
        }
        .contact_info {
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
        }
        .introduce_title {
            margin-top: 30px;
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
        }
        .highlight {
            font-weight: 500;
            margin-right: 4px;
        }
        .content {
            margin: 15px 0;
        }
    }
</style>