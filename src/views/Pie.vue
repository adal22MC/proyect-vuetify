<template>
    <div>
        <pie :data="chartData" :options="chartOptions"></pie>
    </div>
</template>

<script>
//import axios from 'axios'
import pie from "../PieChar.js"

export default {
     props: ["data"],
    components:{
        pie,
    },
     data() {
        return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      },
  
        edades: [],
    };
    },
    mounted(){
       // this.inicializacion();
    },
    methods:{
        inicializacion(){
           /* axios
            .get("https://dummy.restapiexample.com/api/v1/employees")
            .then((response) =>{
                //this.empleados = response.data.data
                //this.dataloading = false
                let con1 =0,con2=0,con3=0,con4=0,con5=0,con6=0;
                console.log(response.data.data)
                response.data.data.forEach(element => {
                    switch (true) {
                        case element.employee_age>=18 && element.employee_age<=25:
                            con1++;
                            break;
                        case element.employee_age>=26 && element.employee_age<=35:
                            con2++;
                            break;
                        case element.employee_age>=36 && element.employee_age<=45:
                            con3++;
                            break;
                        case element.employee_age>=46 && element.employee_age<=55:
                            con4++;
                            break;
                        case element.employee_age>=56 && element.employee_age<=65:
                            con5++;
                            break;
                        case element.employee_age>=66 && element.employee_age<=75:
                            con6++;
                            break;
                        default:
                            break;
                    }
                });
                this.edades.push(33)
                this.edades.push(44)
                this.edades.push(21)
                this.edades.push(22)
                this.edades.push(33)
                this.edades.push(55)
                console.log(this.edades);
                self.$root.$emit("nose");
                
            })
            .catch(({response})=> {
                console.log(response)
            })*/
        }
    },
}
</script>