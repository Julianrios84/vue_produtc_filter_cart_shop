<template>
    <div>
        <v-app-bar app dark>
            <v-toolbar-title class="ibm-plex-sans w-400 letter-spacing-0">TASNetwork</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="viewCartShop">
                 <v-badge color="green" overlap >
            <template v-slot:badge>
                <span v-if="carShopCount > 0">{{ carShopCount }}</span>
            </template>
            <v-icon>mdi-basket</v-icon>
            </v-badge>
            </v-btn>
           
        </v-app-bar>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    data: () => ({

    }),
    methods: {
        ...mapMutations(["viewCartShop"])
    },
    computed: {
        ...mapState(["carShopCount"])
    },
    
}
</script>