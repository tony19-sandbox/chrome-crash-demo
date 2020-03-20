<template>
  <div>
    <filepond/>
    <v-gallery :images="images"/>
  </div>
</template>

<script>
import Vue from "vue";
import VGallery from "v-gallery";
import VueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";

Vue.use(VGallery);
export default {
  components: {
    filepond: VueFilePond()
  },
  data() {
    return {
      images: [
        {
          title: "",
          url: "https://placekitten.com/200/200"
        }
      ]
    };
  }
};
</script>