
<template>
  <v-container>
    <v-layout  wrap>
         <v-container fluid>
           
<template>
  <v-container>
    <v-layout  wrap>
         <v-container fluid>
           <v-row>
             <v-col cols="12" md="3">
               <v-btn color="blue" dark block @click="sortName">Sort by name</v-btn>
             </v-col>
             <v-col cols="12" md="3">
               <v-btn color="blue" dark block @click="sortPriceUp">Price  <v-icon icon>mdi-chevron-up</v-icon></v-btn>
             </v-col>
             <v-col cols="12" md="3">
               <v-btn color="blue" dark block @click="sortPriceDown">Price <v-icon icon>mdi-chevron-down</v-icon></v-btn>
             </v-col>
           </v-row>
           <v-row>
             <v-col cols="12" md="3">
               <v-text-field v-model="search" label="Search" ></v-text-field>
             </v-col>
             <v-col cols="12" md="3">
               <v-select v-model="search" :items="selectCategory" label="Standard" ></v-select>
             </v-col>
             <v-col cols="12" md="3">
               <v-select v-model="search" :items="statusProduct" label="Standard" ></v-select>
             </v-col>
             <v-col cols="12" md="3">
               <v-select v-model="search" :items="priceProduct" label="Standard" ></v-select>
             </v-col>
           </v-row>
            <v-row class="products">
              <v-col cols="12" md="4" sm="6" lg="4" v-for="(item, index) in filterProduct" :key="index">
                <CardProduct :id="item.id" :name="item.name" :description="item.description" :price="item.price" :img="item.img" :categories="item.categories" :best_seller="item.best_seller" :available="item.available" :categoriesProduct="item.categoriesProduct"  />
              </v-col>
            </v-row>
            <ModalProductVue/>
            <ModalCartVue />
  </v-container>
    </v-layout>
  </v-container>
</template>

   
  </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import CardProduct from '@/components/CardProduct';
import ModalProductVue from './ModalProduct.vue';
import ModalCartVue from './ModalCart.vue';

export default {
  components: {
    CardProduct,
    ModalProductVue,
    ModalCartVue
  },
  data: () => ({
        search: '',
        items: [
       
        ],
        categories: [],
        selectCategory: [],
        statusProduct: [
          {
            text: 'Disponibles',
            value: 'Disponibles'
          },
          {
            text: 'Agotado',
            value: 'Agotado'
          },
          {
            text: 'Mas vendido',
            value: 'Mas vendido'
          }
        ],
        priceProduct: [
          {
            text: 'Menor a $10.000',
            value: 10000
          },
          {
            text: 'Mayores a $30.000',
            value: 30000
          }
        ]
       
  }),
  created() {
    this.initialize()
  },
  methods: {
    async initialize() {
      let data = null;
      this.items = [];
      this.selectCategory = [];
      // let res = await axios.get('http://localhost:8080/data.json');
      let res = await axios.get('https://cors-anywhere.herokuapp.com/https://d3qfc4eeq75hwf.cloudfront.net/data.json');
      /* eslint-disable no-console */
      // console.log(res.data);
      data = res.data;
      // this.items = data.products;

      let categoriesProduct = [];
      let statusProduct = '';
      let sellerBestProduct = '';

      data.products.forEach(product => {
        categoriesProduct = [];
        statusProduct = '';
        sellerBestProduct = '';
        if(product.available == true) {
          statusProduct = 'Disponibles'
        }else{
          statusProduct = 'Agotado'
        }

        if(product.best_seller == true) {
          sellerBestProduct = 'Mas vendido'
        }

          product.categories.forEach(category => {
            // console.log(data.categories.find(x => x.categori_id == category));
            categoriesProduct.push(data.categories.find(x => x.categori_id == category))
              
          });


          this.items.push({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            img: product.img,
            categories: product.categories,
            categoriesProduct: categoriesProduct,
            best_seller: product.best_seller,
            sellerBestProduct: sellerBestProduct,
            available: product.available,
            statusProduct: statusProduct
          })


      });

      this.categories = data.categories;

      data.categories.forEach(category => {
        this.selectCategory.push({
          text: category.name,
          value: category.name
        })
      })
     
      
      console.log(this.items);
    
    },
    sortName() {
      this.items.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      })
    },
    sortPriceUp() {
      this.items.sort(function(a, b){
        var x = Number(a.price.replace('.', "")); 
        var y = Number(b.price.replace('.', "")); 
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      })
    },
    sortPriceDown() {
      this.items.sort(function(a, b){
        var x = Number(a.price.replace('.', "")); 
        var y = Number(b.price.replace('.', "")); 
        if (x > y) {return -1;}
        if (x < y) {return 1;}
        return 0;
      })
    },
   
   
  },
  computed: {
   
   filterProduct() {
     console.log(this.search);
     let price = 0;
     return this.items.filter((item) => {

        if(this.search == 10000) { 
              price = Number(item.price.replace('.', "")); 
              if(price >= 0 && price <= 10000) {
                console.log(item);
                return item
              }
        }else if(this.search == 30000){
              price = Number(item.price.replace('.', "")); 
              if (price >= 30000) return item
        }else{
          return item.name.match(this.search) || item.price.match(this.search) || item.statusProduct.match(this.search) || item.sellerBestProduct.match(this.search) || item.categoriesProduct.find(x => x.name == this.search) 

        }


     })
   }
  },
};
</script>
