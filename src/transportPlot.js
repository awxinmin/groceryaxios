import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
            labels:[],
            datasets: [
                {
                    label: 'MRT',
                    data:[],
                    borderWidth:0.5,
                    borderColor:"blue",
                    backgroundColor:'blue',
                    fill:false
                },
                {
                    label: 'LRT',
                    data:[],
                    borderWidth:0.5,
                    borderColor:"orange",
                    backgroundColor:'orange',
                    fill:false
                },
                {
                    label: 'Bus',
                    data:[],
                    borderWidth:0.5,
                    borderColor:"green",
                    backgroundColor:'green',
                    fill:false
                },
                {
                    label: 'Taxi',
                    data:[],
                    borderWidth:0.5,
                    borderColor:"yellow",
                    backgroundColor:'yellow',
                    fill:false
                }
            ]

        },
        options: {


        }
    }),
    methods:{

        fetchData : function(){
            axios.get('http://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
                this.results=response.data.result.records
                console.log(this.results)

                for(let key in this.results){
                    if (this.results[key].type_of_public_transport == 'MRT') {
                        this.chartdata.datasets[0].data.push(this.results[key].average_ridership)
                        if (!this.chartdata.labels.includes(this.results[key].year))
                            this.chartdata.labels.push(this.results[key].year+'')
                    } else if (this.results[key].type_of_public_transport == 'LRT') {
                        this.chartdata.datasets[1].data.push(this.results[key].average_ridership)
                        if (!this.chartdata.labels.includes(this.results[key].year))
                            this.chartdata.labels.push(this.results[key].year+'')
                    } else if (this.results[key].type_of_public_transport == 'Bus') {
                        this.chartdata.datasets[2].data.push(this.results[key].average_ridership)
                        if (!this.chartdata.labels.includes(this.results[key].year))
                            this.chartdata.labels.push(this.results[key].year+'')
                    } else{
                        this.chartdata.datasets[3].data.push(this.results[key].average_ridership)
                        if (!this.chartdata.labels.includes(this.results[key].year))
                            this.chartdata.labels.push(this.results[key].year+'')
                    }
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
