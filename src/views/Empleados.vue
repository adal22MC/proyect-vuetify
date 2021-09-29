<template>
  <v-data-table
    :headers="headers"
    :items="empleados"
    sort-by="calories"
    class="elevation-1"
    :loading="dataloading"
    loading-text="Loading... Please wait"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Empleados</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Agregar Empleado
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.employee_name"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.employee_salary"
                      label="Salario"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.employee_age"
                      label="Edad"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h6 text-center">¿Estas seguro de eliminar este empleado?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Aceptar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      dataloading: true,
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'employee_name',
        },
        { text: 'Salario', value: 'employee_salary' },
        { text: 'Edad', value: 'employee_age' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      empleados: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        employee_name: '',
        employee_salary: 0,
        employee_age: 0,
      },
      defaultItem: {
        id: 0,
        employee_name: '',
        employee_salary: 0,
        employee_age: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Empleado' : 'Editar Empleado'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        axios
        .get("https://dummy.restapiexample.com/api/v1/employees")
        .then((response) =>{
            this.empleados = response.data.data
            this.dataloading = false
            console.log(response.data.data)
        })
        .catch(({response})=> {
            console.log(response)
        })
      },

      editItem (item) {
        this.editedIndex = this.empleados.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.empleados.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.empleados.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.empleados[this.editedIndex], this.editedItem)
        } else {
          this.empleados.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>