<template>
  <div>
    <section class="homepage__mainContent">
      <h1>URL Shortener</h1>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {
  }
})
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
.homepage {
  &__mainContent {
    @include contentContainer();
    margin-top: 10vh;
  }
}
</style>
