<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>

        </div>
         <div id="chart">
            <PSIIndex></PSIIndex>

        </div>
        <div id="chart">
            <covid-plot></covid-plot>

        </div>
        <div id="chart">
            <transportPlot></transportPlot>

        </div>
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import covidPlot from '../covidPlot.js'
import transportPlot from '../transportPlot.js'

export default {
    components:{
        axiosExample,PSIIndex,covidPlot,transportPlot
    }

}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>
