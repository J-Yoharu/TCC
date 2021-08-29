<template>
  <v-card width="700">
    <v-card-text>
      <v-row>
        <v-col cols="1">
          <Avatar :user="user" />
        </v-col>
        <v-col cols="10" class="d-flex">
          <v-text-field
            v-model="post.description"
            :disabled="loading"
            rounded
            filled
            dense
            placeholder="DIGAMEEE"
          >
          </v-text-field>
          <v-btn
            icon
            class="ml-2"
            :disabled="loading"
            :loading="loading"
            @click="save"
          >
            <v-icon v-text="icons.mdiSend"> </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="d-flex align-center">
          <v-file-input
            v-model="post.file"
            small-chips
            multiple
            :prepend-icon="icons.mdiFolderImage"
          >
            <template v-slot:prepend-inner> Foto/Vídeo </template>
          </v-file-input>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiFolderImage, mdiSend } from "@mdi/js";
import { createPost } from "../repositories/postRepository";
export default {
  components: {
    Avatar: () => import("@/modules/app/components/Avatar")
  },
  data() {
    return {
      icons: {
        mdiFolderImage,
        mdiSend
      },
      post: {
        description: "",
        file: []
      },
      user: {
        id: "1",
        name: "Joãozinho Lindão e maravilhoso"
      },
      loading: false
    };
  },
  methods: {
    save() {
      this.loading = true;
      createPost(this.buildFormData(), {
        headers: {
          "content-type": "multipart / form-data"
        }
      })
        .then(() => {
          this.$emit("update", true);
          this.clear();
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
      this.loading = false;
    },
    buildFormData() {
      let formData = new FormData();
      Object.keys(this.post).forEach(index => {
        Array.isArray(this.post[index])
          ? this.post[index].forEach(value => {
              formData.append(`${index}[]`, value);
            })
          : formData.append(index, this.post[index]);
      });
      formData.append("user_id", 1);
      return formData;
    },
    clear() {
      this.post = {
        description: "",
        file: []
      };
    }
  }
};
</script>

<style>
</style>