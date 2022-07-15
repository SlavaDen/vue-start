<template>
  <input :value="modelValue" @input="updateInput" type="text" class="inpt" />
</template>

<script>
export default {
  name: "custom-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.inpt {
  background-color: rgb(220, 220, 220);
  color: black;
}
</style>
