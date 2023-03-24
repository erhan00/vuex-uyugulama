<template>
  <div class="hello">
    <p>VUEX Kutuphanesı ıle vue.js icerisinde state yonetimi, vuex state,getters,mutation,action metodlarının kullanımı ile</p>
      <p>ornek kullanım detaylı degıl fakat Vuex mantıgı koda döküldü</p> 
    <ul>
        <li class="TEST" v-for="ürün in ürünler" :key="ürün">
          <span>{{ " * " + ürün.isim }}</span> =
          <span>{{ürün.fiyat }}</span>
          
        </li>
       </ul>
       
       <ul>
        <li class="TEST1" v-for="indirimli in indirimUygulanmış" :key="indirimli">
          <span>{{ "- İndirimli Fiyat : " + indirimli.fiyat }}</span>
          
        </li>
       </ul>

       <button class="TEST2" v-on:click="azaltFiyat">Fiyat Düşür</button>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'HelloWorld',

  data(){
    return{
      yerelSayaç :13,
    }
  },
 computed:{
    localComputed(){
    },
   // ...mapGetters({
     // *alias* dizidekiÜrünler = "ürünler"
    //})

   ürünler(){
   return this.$store.state.ürünler
   },

   //mapGetters içerisinde alias kullanıldı
  ...mapGetters({indirimUygulanmış : "indirimliÜrünler"})
  },
  methods:{
    azaltFiyat:function(){
      this.$store.commit('fiyatAzalt')
    }
  }

}
</script>


<style scoped>
.TEST{
  text-align:start;
  list-style: none;
  font-size: 20px;
  color: brown;
}
.TEST1{
  text-align: start;
  list-style: none;
  font-size: 20px;
  color:blue;
}
.TEST2{
 color:darkcyan;
 font-size: 17px;
 position: relative;
 right: 550px;
}
</style>
