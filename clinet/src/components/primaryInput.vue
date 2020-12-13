<template>
  <div class="primary-input">
    <input
      class="primary-input__input"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <label
      v-if="label"
      class="primary-input__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'primary-input',
  props: ['value', 'type', 'label']
}
</script>

<style lang="scss" scoped>
.primary-input {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;

  .primary-input__label {
    margin-bottom: 6px;
    color: $black;
  }
  .primary-input__input {
    display: block;
    width: 100%;
    height: 36px;
    padding: 0 10px;
    line-height: 36px;
    border-radius: $radius;
    border-width: 1px;
    border-style: solid;
    border-color: $black;
    font-size: 13px;
    color: $black;
    outline: none;

    // Hide arrow buttons
    &[type=number] {
      -moz-appearance: textfield;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      border-color: $green !important;
      box-shadow: 0 0 10px -3px $green !important;

      & ~ .primary-input__label {
        color: $green;
      }
    }
  }
}
</style>