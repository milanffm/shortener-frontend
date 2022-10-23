<template>
  <section class="page">
    <main-header />
    <main>
      <nuxt />
    </main>
    <main-footer />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainHeader from '~/components/MainHeader.vue'
import MainFooter from '~/components/MainFooter.vue'

@Component({
  components: {
    MainHeader, MainFooter
  }
})
export default class Default extends Vue {

}
</script>

<style lang="scss">
.page {
  width: 100%;
}
</style>
