<template>
    <div>
        <v-dialog v-model="dialogCart" width="500" persistent >

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title >
         Store Cart
        </v-card-title>

        <v-card-text>
            <v-list three-line subheader v-if="carShop.length > 0">

            <v-list-item 
                v-for="item in carShop"
                :key="item.id"> 
                    <v-list-item-avatar>
                        <v-img :src="item.img"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="'$'+item.price"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                 
                    <v-btn icon @click="removeCarShop(item)">
                        <v-icon color="grey lighten-1">mdi-close</v-icon>
                    </v-btn>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-avatar>
                    </v-list-item-avatar>
                    <v-list-item-content>
                    <v-list-item-title v-text="'Total Cart'"></v-list-item-title>
                    <v-list-item-subtitle v-text="'$'+totalCart"></v-list-item-subtitle>
                    </v-list-item-content>

                </v-list-item>
            </v-list>

            <v-list v-else>
                <v-list-item-content>
        <v-list-item-title>There are no products</v-list-item-title>
      </v-list-item-content>
            </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="closeCartShop" >
            Shop
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    data: () => ({

    }),
    methods: {
        ...mapMutations(["closeCartShop", "removeCarShop"])
    },
    computed: {
        ...mapState(["dialogCart", "carShop"]),
        totalCart() {
            let total = 0;
            this.carShop.forEach(item => {
                total += Number(item.price.replace('.', "")); 
            });

            return total;
        }
    }

}
</script>