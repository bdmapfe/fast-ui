<template>
  <div class="Radiogroup-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Radiogroup",
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "base"
    },
    animated: {
      type: Boolean,
      default: true
    }
  }
};
</script>