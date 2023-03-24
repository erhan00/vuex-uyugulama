import { createStore } from 'vuex'

export default createStore({
  state: {
    ürünler:[
      { isim: 'televizyon', fiyat:4000 },
      { isim:'saat', fiyat:2000 },
      { isim:'laptop', fiyat:18000 },
      { isim:'mause', fiyat:500 },
      { isim:'klavye', fiyat:700 },
  ],
  yapilacaklar:[]
  },
  getters: {
    indirimliÜrünler(state){
      let indirim = state.ürünler.map(myFonksyn);

      function myFonksyn(ürün){
        return {
          fiyat: ürün.fiyat/2 
        }
      }
      return indirim;
    },

    tamamlananİşlemler(state){
      return state.yapilacaklar.filter((todo) => todo.completed);
    }

  },
  //Bu metot 2 parametre almaktadır ve ilk parametresi state diğer parametre ise data.
  mutations: {
    fiyatAzalt:(state)=>{
      state.ürünler.forEach(ürün=>{
        ürün.fiyat -=10;
      });
    },

   yapilacakEkle(state,payload){
    state.yapilacaklar = payload;
   }  
  },
  /* Actions asenkron Çalısmayı destekler, Genellikle Api cağrılarında kullanılır
   
   Action içerisine tanımlanan metotlar context adında bir parametre almaktadır. Context kendi içerisinde; 
   state, getters, commit, dispatch gibi özellikleri barındırmaktadır. 

   -- Duruma göre sürece uygun olan işlem kullanılabilir.
   --* Tanımlanan action’un component içerisindeki çağrımı dispatch işlemi ile gerçekleştirilir.
     
   */
  actions: {
    fetchTodos(context) {
      fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((data) => {
              context.commit("yapilacakEkle", data);
          });
  },
  },






  modules: {
  }
})
