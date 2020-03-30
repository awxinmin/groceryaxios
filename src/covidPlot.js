import {Line} from 'vue-chartjs'
import axios from 'axios'

export default {
    extends: Line,
    data: () => ({
        results: [],
        chartdata: {
            labels: [],
            datasets: [
                {
                    label: 'Number of Covid-19 cases in US for the past 24 hours',
                    data: [],
                    borderWidth: 0.5,
                    borderColor: "blue",
                    backgroundColor: 'blue',
                    fill: false
                }
            ]

        },
        options: {}
    }),
    methods: {

        fetchData: function () {
            axios.get('https://covid19.soficoop.com/country/us').then(response => {
                this.results = response.data.snapshots
                console.log(this.results.length)
                var len = this.results.length

                for (var i = len - 24; i < this.results.length; i++) {
                    this.chartdata.datasets[0].data.push(this.results[i].cases)
                    this.chartdata.labels.push(this.results[i].timestamp + '')

                }
                this.renderChart(this.chartdata, this.options)

            })

        }

    },
    mounted() {
        // console.log('Do I come here')
        this.fetchData()

    }

}
