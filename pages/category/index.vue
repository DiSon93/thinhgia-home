<template>
    <v-lazy
        v-model="isActive"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="fade-transition"
    >
        <div>
            
        </div>
    </v-lazy>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    
    export default {
        components: {
            
        },
        data() {
            return {
                isActive: false
            }
        },
        computed: {
            // ...mapState('dictionary', ['dictionaryList'])
        },
        mounted() {
            // console.log(this.$route);
        },
        methods: {
            
        }
    }
</script>