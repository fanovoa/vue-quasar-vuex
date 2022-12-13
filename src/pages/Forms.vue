<template>
  <q-page >
   <span class="text-h3"> Forms</span>
   <q-separator spaced />

   <div class="row justify-center">
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-xs  col-xs-12 col-sm-12 col-md-6 q-pt-xl"
    >
      <q-input
        filled
        v-model="useForm.email"
        type="email"
        label="Correo electronico *"
        hint="Name and surname"
        lazy-rules
        no-error-icon=""
        :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio',
                  isValidEmail]"
      />

      <q-input
        filled
        type="password"
        v-model="useForm.password1"
        label="Contraseña"
        lazy-rules
        no-error-icon=""
        :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']"
      />

      <q-input
        filled
        type="password"
        v-model="useForm.password2"
        label="Repetir contraseña"
        lazy-rules
        no-error-icon=""
        :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio',
                  isSamePassword]"
      />
      <q-checkbox
          v-model="useForm.conditions"
          label="Aceptos las condiciones y terminos de uso"
          :style="useForm.errorInConditions
            && !useForm.conditions
            && 'color:red'"/>

      <div class="row justify-end">
        <q-btn unelevated label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn unelevated label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
   </div>

  </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FormsPage",
  setup(){
    const $q = useQuasar()

    const useForm = ref({
      email:'',
      password1:'',
      password2:'',
      conditions: false,
      errorInConditions:false
    })


    return {
        useForm,
        onSubmit(){

          useForm.value.errorInConditions=false

          if(!useForm.value.conditions){
            $q.notify({
              message:'Debe de aceptar las condiciones y terminos',
              icon:'las la-exclamation-circle'
            })
            // console.log( 'Debe de aceptar las condiciones' )
            useForm.value.errorInConditions  = true
            return
          }
          console.log( useForm.value )
        },
        onReset(){
          useForm.value = {
            email:'',
            password1:'',
            password2:'',
            conditions:false,
            errorInConditions:false
          }
        },
        isValidEmail( val ) {
          const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
          return emailPattern.test(val) || 'El correo no parece ser válido';
        },
        isSamePassword(val){
          return (val ===useForm.value.password1) || 'Las contraseñas no son iguales'
        }
    }
  }
});
</script>
