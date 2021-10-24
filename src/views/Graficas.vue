<template>
    <div>
        <h1 text-center>Graficas</h1>

        <v-layout align-center> 
            <v-flex xs6 sm6 text-xs-center>
                <pie :data="edades"></pie>
            </v-flex>
            <v-flex xs6 sm6 text-xs-center>
                <lineE></lineE>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import pie from "./Pie.vue";
import lineE from "./Line.vue";
import axios from 'axios'
export default {
     components:{
        pie,
        lineE
    },
    data(){
        return{
            edades: [],
        }
    },
    Created(){
        this.inicializacion();
    },
    methods:{
        inicializacion(){
            axios
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
                this.edades.push(con1)
                this.edades.push(con2)
                this.edades.push(con3)
                this.edades.push(con4)
                this.edades.push(con5)
                this.edades.push(con6)
                console.log(this.edades);
            })
            .catch(({response})=> {
                console.log(response)
            })
        }
    },
}
</script>