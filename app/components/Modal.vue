<template lang="pug">
  //-#modal
    div I am {{ title }}
    div {{ showModal }}
    button(v-on:click='closeModal') Close
  
  transition(name="modal")
    .modal-mask
      .modal-wrapper
        .modal-container
          .modal-header
            slot(name="header")
              h2 {{ title }}

          .modal-body
            slot(name="body") Modal Body

          .modal-footer
            slot(name="footer")
              button(v-on:click='closeModal') Close
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      title: 'Modal'
    }
  },
  methods: {
    closeModal: function() {
      let vm = this;
      vm.$emit('close');
    }
  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../node_modules/jeet/styl/index.styl'
  @import '../styles/vars.styl'

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;

  .modal-header
    h2
      margin-top 0
      color $black

  .modal-body
    margin 20px 0

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
