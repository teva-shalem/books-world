<template>
  <sup class="tooltip" v-tooltip="{
    content: content,
    placement: 'top-end',
    trigger: 'click',
    popperOptions: {
      modifiers: {
        preventOverflow: { enabled: true },
      },
    }
  }">*</sup>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="stylus">
.tooltip
  cursor pointer
  font-size 1.3em
  line-height 0

  .tooltip-inner
    font-size 0.7em
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
    line-height 1em

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  
  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
</style>
Î