<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <CreatePost @update="loadPosts" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(post, index) in posts"
        cols="12"
        class="d-flex justify-center"
        :key="index"
      >
        <v-card width="700">
          <v-card-title>
            <div class="d-flex">
              <Avatar :user="post.user" />

              <div class="ml-5">
                <div>
                  {{ post.user.name }}
                </div>
                <div class="caption ml-5">
                  {{ post.createdAt }}
                </div>
              </div>
            </div>
            <v-spacer></v-spacer>
            <v-menu offset-y offset-x>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon v-text="icons.mdiDotsHorizontal"></v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item link>
                  <v-list-item-content> Editar </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-content> Excluir </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text>
            <span>
              {{ post.description }}
            </span>
            <v-row class="mt-5">
              <v-col v-for="(image, index) in post.files" :key="index">
                <v-img :src="image.url" contain></v-img>
              </v-col>
            </v-row>
            <div class="d-flex">
              <div class="mr-6">{{ post.reactions.length }} Curtidas</div>
              <div>{{ post.comments.length }} Comentários</div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-row>
              <v-col class="d-flex justify-center" cols="6" md="4">
                <v-btn text>
                  <v-icon v-text="icons.mdiHandPeace" class="mr-5"></v-icon>
                  Curtir
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center" cols="12" md="4">
                <v-btn text>
                  <v-icon v-text="icons.mdiComment" class="mr-5"></v-icon
                  >Comentar</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
          <div>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" class="d-flex align-center pa-5">
                <Avatar class="mr-5" :user="post.user" />
                <v-text-field
                  rounded
                  hide-details
                  dense
                  outlined
                  label="Comentar..."
                  v-model="comment"
                  @keyup.enter="saveComment(post.id)"
                ></v-text-field>
              </v-col>
            </v-row>
            <div class="mt-3 mx-3">
              <div v-for="(comment, index) in post.comments" :key="index">
                <div class="d-flex">
                  <Avatar :user="comment.user" />
                  <div class="ml-5">
                    <div>
                      {{ comment.user.name }}
                    </div>
                    <div class="ml-3">
                      {{ comment.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiDotsHorizontal, mdiHand, mdiComment, mdiHandPeace } from "@mdi/js";
import { getPosts } from "../repositories/postRepository";
import { createComment } from "../repositories/commentRepository";
export default {
  components: {
    Avatar: () => import("@/modules/app/components/Avatar"),
    CreatePost: () => import("../components/CreatePost.vue")
  },
  data() {
    return {
      icons: {
        mdiDotsHorizontal,
        mdiHand,
        mdiComment,
        mdiHandPeace
      },
      posts: [],
      comment: "",
      user: {
        id: 2,
        name: "João"
      }
    };
  },
  methods: {
    loadPosts() {
      getPosts().then(res => {
        console.log(res.data);
        this.posts = res.data;
      });
    },
    saveComment(postId) {
      createComment({
        user_id: this.user.id,
        post_id: postId,
        description: this.comment
      })
        .then(() => {
          this.comment = "";
          this.loadPosts();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.loadPosts();
  }
};
</script>

<style>
</style>