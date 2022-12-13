<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Typography</span>
    <span class="text-h2">Typography</span>
    <span class="text-h3">Typography</span>
    <span class="text-h4">Typography</span>
    <span class="text-h5">Typography</span>
    <span class="text-h6">Typography</span>

    <q-separator></q-separator>

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>
    <q-separator></q-separator>
    <p class="text-body1">
      Dolore irure amet in labore tempor anim laborum nulla anim adipisicing.
      Non incididunt nisi anim in consectetur do aliqua sit labore et officia
      tempor aliqua esse. Reprehenderit dolor ad ea sunt elit magna exercitation
      anim amet eu culpa aliquip commodo. Elit sit Lorem laboris laboris amet
      eiusmod fugiat veniam magna id culpa amet officia. Dolore fugiat ipsum
      Lorem voluptate pariatur mollit consequat. Adipisicing nulla consequat
      esse id excepteur ex ipsum.
    </p>
    <p class="text-body2">
      Cupidatat sit ipsum aute esse Lorem labore officia aliquip adipisicing
      esse do Lorem deserunt. Non tempor aute consectetur sint dolor elit sit
      anim esse sit aliquip do ipsum. Nisi fugiat cupidatat in non officia amet
      fugiat nulla nulla deserunt non esse. Consectetur ad ipsum magna aliquip
      deserunt esse velit nostrud velit labore cupidatat. Tempor aliqua aliquip
      ex nulla Lorem elit ex elit velit minim amet velit pariatur. Id cillum
      deserunt labore Lorem sit minim reprehenderit incididunt minim est.
    </p>
    <!-- <h1>TypographyPage</h1> -->

    <q-btn
        color="primary"
        :label="sideMenuOpen ? 'Cerrar menú lateral': 'Abrir menú lateral'"
        class="q-mt-md"
        @click="toogleSideMenu"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUI from '../composables/useUI'

export default defineComponent({
  name: "TypographyPage",
  setup(){
    const {sideMenuOpen, toogleSideMenu } =useUI()

    return {
      sideMenuOpen,
      toogleSideMenu
    }
  }
});
</script>
