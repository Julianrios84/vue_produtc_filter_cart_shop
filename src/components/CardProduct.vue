<template>
    <div>
        <v-card class="mx-auto" max-width="400" >
            <v-img class="white--text align-end" height="200px" :src="img" >
                <v-card-title class="black">{{price}}  </v-card-title>
               
            </v-img>
            <!-- <v-card-subtitle class="pb-0">{{categories}}</v-card-subtitle> -->

            <v-card-text class="text--primary">
                <v-list three-line >
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Name</v-list-item-title>
                            <v-list-item-subtitle>{{name}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Description</v-list-item-title>
                            <v-list-item-subtitle>{{description}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Categories</v-list-item-title>
                            <v-list-item-subtitle>
                                <v-chip class="mr-1" label color="blue" text-color="white"  v-for="(category, index) in categoriesProduct" :key="index" >
                                    {{category.name}}
                                </v-chip>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Status</v-list-item-title>
                            <v-list-item-subtitle>
                                <v-chip label  class="mr-1"  color="green" text-color="white"  v-if="available == true">
                                    Disponibles
                                </v-chip>
                                <v-chip label  class="mr-1"   color="red" text-color="white"  v-if="available == false">
                                    Agotado
                                </v-chip>
                                <v-chip label  class="mr-1"  color="indigo" text-color="white"  v-if="best_seller == true">
                                     Mas vendido
                                </v-chip>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                  
                </v-list>
               
             
            </v-card-text>

            <v-card-actions>
            <v-btn color="red" text @click="addCarShop({id, name, description, price, img, categories, best_seller, available, categoriesProduct})" >
                Add Cart
            </v-btn>

            <v-btn color="blue" text @click="viewProduct({id, name, description, price, img, categories, best_seller, available, categoriesProduct})">
                View
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    props:["id", "name", "description", "price", "img", "categories", "best_seller", "available", "categoriesProduct"],
    data: () => ({

    }),
    methods: {
        ...mapMutations(["addCarShop", "viewProduct"]),
    },
}
</script>