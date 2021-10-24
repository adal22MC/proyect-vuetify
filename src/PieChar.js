import { Doughnut } from "vue-chartjs";
import axios from 'axios'

export default {
    extends: Doughnut,
    props: ["data", "options"],
    data() {
        return {
            edades: []
        }
    },
    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        this.inicializacion();

    },
    methods: {
        inicializacion() {
            axios
                .get("https://dummy.restapiexample.com/api/v1/employees")
                .then((response) => {
                    //this.empleados = response.data.data
                    //this.dataloading = false
                    let con1 = 0,
                        con2 = 0,
                        con3 = 0,
                        con4 = 0,
                        con5 = 0,
                        con6 = 0;
                    console.log(response.data.data)
                    response.data.data.forEach(element => {
                        switch (true) {
                            case element.employee_age >= 18 && element.employee_age <= 25:
                                con1++;
                                break;
                            case element.employee_age >= 26 && element.employee_age <= 35:
                                con2++;
                                break;
                            case element.employee_age >= 36 && element.employee_age <= 45:
                                con3++;
                                break;
                            case element.employee_age >= 46 && element.employee_age <= 55:
                                con4++;
                                break;
                            case element.employee_age >= 56 && element.employee_age <= 65:
                                con5++;
                                break;
                            case element.employee_age >= 66 && element.employee_age <= 75:
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

                    let chartData = {
                        hoverBackgroundColor: "red",
                        hoverBorderWidth: 10,
                        labels: ["18-25", "26-35", "36-45", "46-55", "56-65", "66-75"],
                        datasets: [{
                            label: "Data One",
                            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#ABE7BD", "#ABCDE7", "#EEBD4B"],
                            data: this.edades
                        }]
                    };
                    this.renderChart(chartData, {
                        borderWidth: "10px",
                        hoverBackgroundColor: "red",
                        hoverBorderWidth: "10px"
                    });
                    console.log(this.edades);

                })
                .catch(({ response }) => {
                    console.log(response)
                })
        }
    },
};