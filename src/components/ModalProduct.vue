import { mapState } from 'vuex';
<template>
    <div>
        <v-dialog  v-model="dialogView" max-width="350">
            <v-card class="mx-auto" max-width="400" >
                <v-img class="white--text align-end" height="200px" :src="viewProduct.img" >
                    <v-card-title class="black">{{viewProduct.price}}  </v-card-title>
                
                </v-img>
                <!-- <v-card-subtitle class="pb-0">{{categories}}</v-card-subtitle> -->

                <v-card-text class="text--primary">
                    <v-list two-line subheader>
                        <v-subheader>Details</v-subheader>

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Name</v-list-item-title>
                                <v-list-item-subtitle>{{viewProduct.name}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Description</v-list-item-title>
                                <v-list-item-subtitle>{{viewProduct.description}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Categories</v-list-item-title>
                            <v-list-item-subtitle>
                                <v-chip class="mr-1" label color="blue" text-color="white"  v-for="(category, index) in viewProduct.categoriesProduct" :key="index" >
                                    {{category.name}}
                                </v-chip>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                          <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Status</v-list-item-title>
                            <v-list-item-subtitle>
                                <v-chip label  class="mr-1"  color="green" text-color="white"  v-if="viewProduct.available == true">
                                    Disponibles
                                </v-chip>
                                <v-chip label  class="mr-1"   color="red" text-color="white"  v-if="viewProduct.available == false">
                                    Agotado
                                </v-chip>
                                <v-chip label  class="mr-1"  color="indigo" text-color="white"  v-if="viewProduct.best_seller == true">
                                     Mas vendido
                                </v-chip>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                        
                    </v-list>
                
                
                </v-card-text>

                <v-card-actions>
                <v-btn color="red" text @click="addCarShop({id, name, description, price, img, categories, best_seller, available})" >
                    Add Cart
                </v-btn>

                <v-btn color="blue" text @click="closeView()">
                    Close
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data: () => ({
        
    }),
    methods: {
        ...mapMutations(['closeView', 'addCarShop', 'closeView'])
    },
    computed: {
        ...mapState(['dialogView', 'viewProduct'])
    }
}
</script>