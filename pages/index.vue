<template>
  <div>
    <section class="homepage__mainContent">
      <h1>URL Shortener</h1>
      <input v-model="url" class="homepage__input">
      {{ url.length }}
      <button
        :disabled="url.length < 11"
        class="homepage__button"
        @click="sendUrl"
      >
        Mach die URL kurz
      </button>
      <div v-if="shortUrl.length > 0" class="homepage__shortUrl">
        <h2>Kurze Url</h2>
        <p class="homepage__url">
          {{ shortUrl }}
        </p>
        <h3>Ursprüngliche URL</h3>
        <p class="homepage__url">
          {{ orginalUrl }}
        </p>
      </div>
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
  url = ''
  shortUrl = ''
  orginalUrl = ''
  async sendUrl () {
    console.log('SEND ======>')
    if (this.url) {
      const body = { origUrl: this.url }
      const response = await this.$axios.post('/api/short', body)
      console.log(response)
      this.shortUrl = response?.data?.shortUrl
      this.orginalUrl = response.data?.origUrl
    }

    this.url = ''
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  &__mainContent {
    @include contentContainer();
    margin-top: 10vh;
  }
  &__input {
    background: $brand-second;
    border:0;
    border-bottom:1px solid $gray-dark;
    width: 100%;
    padding: 5px;
    margin-bottom: 15px;
  }
  &__button {
    background: $brand-primary;
    border:0;
    color: $white;
    font-size: 14px;
    padding: 5px;
    border-bottom:1px solid $gray-lighter;
    margin-bottom: 15px;
  }
  &__shortUrl {
    margin: 50px 0;
  }
  &__url {
    font-size: 16px;
    letter-spacing: 0;
  }
}
</style>
