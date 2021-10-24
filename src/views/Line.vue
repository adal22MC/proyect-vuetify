<template>
    <div>
        <lineC :data="chartData" :options="chartOptions"></lineC>
    </div>    
</template>

<script>
import lineC from "../LineChar.js";
export default {
    components:{
        lineC,
    },
    data() {
        return {
        chartOptions: {
            hoverBorderWidth: 20
        },
        chartData: {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
            {
                label: "Data One",
                backgroundColor: '#f87979',
                data: [40, 39, 10, 40, 39, 80, 40]
            }
            ]
        }
        };
    }

}
</script>