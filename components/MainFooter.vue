<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__naviAndCopyright">
        <div class="footer__copyright">
          © MK
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class MainFooter extends Vue {
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  border-top: $brand-primary 2px solid;

  #{$a-tags} {
    color: $brand-primary;
  }

  #{$a-tags-hover} {
    color: lighten($brand-primary, 40%);
  }

  &__content {
    @include padding($big-margin null $small-margin null);
    @include contentContainer();
  }

  &__naviAndCopyright {
    margin-top: $small-margin;
    display: flex;
    justify-content: space-between;
  }
}
</style>
