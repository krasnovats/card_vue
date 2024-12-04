const Counter = { //присваиваем объект
    data () { //функции, котоорые нах-ся внутри объекта - это методы
      return { //функция возвращает объект, этот объект будет хранилищем наших данных
           
        title: '',
        price: '',
        count: '',
             
        order: [
            // {
            //     id: 1,
            //     title: "Товар 1",
            //     price: 100,
            //     count: 1
            // } ,
        ]
        }
    },
    methods: {
        addProduct(e) {
            e.preventDefault(); //отменяем стандартные действия отправки, чтобы страница не перезагружалась

            this.order.push({
                id: Date.now(), //получаем текущую дату и время, тем самым создаем произвольный айди
                title: this.title,
                price: Number(this.price),
                count: Number(this.count)
            });

            this.title = '', //сбрасываем чистим форму
            this.price = '',
            this.count = ''
        }

    },
    computed: { //тут вычисляемые свойства и функция должна что-то вернуть, вычисляемые св-ва всегда возвращают
        totalPrice() {
            let totalPrice = 0;
            for(const product of this.order){
                totalPrice += product.price*product.count;
            }
            return totalPrice //в computed надо возвращать результат
        },
        sortOrder() {
            return this.order.sort((a, b) => b.price - a.price);
        }
    }   
}


Vue.createApp(Counter).mount('#app');
