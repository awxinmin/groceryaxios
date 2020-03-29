import {Line} from 'vue-chartjs'
import axios from 'axios'


export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
            //labels:['2020-3-05',4,5,6],
            labels:[],
            datasets: [
                {
                    label: 'Bitcoin price in USD',
                    data:[],
                    //backgroundColor:['aqua','lightgreen','red','orange'],
                    borderWidth:0.5,
                    borderColor:"magenta",
                    backgroundColor:'orange',
                    fill:false
                }
            ]

        },
        options: {


        }
    }),
    methods:{

        fetchData : function(){
            axios.get('http://covid19.soficoop.com/country/us').then(response=>{
                this.results=response.data.bpi

                for(let key in this.results){
                    this.chartdata.datasets[0].data.push(this.results[key])
                    this.chartdata.labels.push(key+'')

                }
                this.renderChart(this.chartdata,this.options)

            })

        }

    },
    mounted(){
        // console.log('Do I come here')
        this.fetchData()

    }




}
