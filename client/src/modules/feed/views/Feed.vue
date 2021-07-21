<template>
  <div>
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
                  {{ post.user.first_name }}
                </div>
                <div class="caption ml-5">
                  {{ post.created_at }}
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
              <v-col v-for="(image, index) in post.images" :key="index">
                <v-img :src="image" contain></v-img>
              </v-col>
            </v-row>
            <div class="d-flex">
              <div class="mr-6">{{ post.likes.length }} Curtidas</div>
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
              <v-col class="d-flex justify-center" cols="6" md="4">
                <v-btn text>
                  <v-icon v-text="icons.mdiHand" class="mr-5"></v-icon>
                  Ajudar</v-btn
                >
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
                ></v-text-field>
              </v-col>
            </v-row>
            <div class="d-flex justify-center mt-3 mb-3">
              <v-progress-circular indeterminate></v-progress-circular>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiDotsHorizontal, mdiHand, mdiComment, mdiHandPeace } from "@mdi/js";
export default {
  components: {
    Avatar: () => import("@/modules/app/components/Avatar")
  },
  data() {
    return {
      icons: {
        mdiDotsHorizontal,
        mdiHand,
        mdiComment,
        mdiHandPeace
      },
      posts: [
        {
          description: "Aqui jáz uma descrição de um simples post",
          images: [
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          ],
          created_at: "07/07/2021",
          user: {
            first_name: "Jonathas Augusto",
            last_name: "Augusto",
            initials: "JA",
            avatar:
              "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/06/legiao_1dUgHsj4Oy_Z.jpg.jpeg"
          },
          likes: [
            {
              first_name: "Jonathas",
              last_name: "Augusto",
              initials: "JA",
              avatar:
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            },
            {
              first_name: "Jonathas",
              last_name: "Augusto",
              initials: "JA",
              avatar:
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            },
            {
              first_name: "Jonathas",
              last_name: "Augusto",
              initials: "JA",
              avatar:
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            },
            {
              first_name: "Jonathas",
              last_name: "Augusto",
              initials: "JA",
              avatar:
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }
          ],
          comments: [
            {
              comment: "Porra, tu é daora",
              user: {
                first_name: "Jonathas",
                last_name: "Augusto",
                initials: "JA",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              }
            },
            {
              comment: "Porra, tu é feio",
              user: {
                first_name: "Jonathas",
                last_name: "Augusto",
                initials: "JA",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              }
            }
          ]
        },
        {
          description: "Aqui jáz uma descrição de um simples post",
          images: [
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          ],
          created_at: "07/07/2021",
          user: {
            first_name: "Jonathas Augusto",
            last_name: "Augusto",
            initials: "JA",
            avatar:
              "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/06/legiao_1dUgHsj4Oy_Z.jpg.jpeg"
          },
          likes: [
            {
              first_name: "Jonathas",
              last_name: "Augusto",
              initials: "JA",
              avatar:
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            },
            {
              first_name: "Jonathas",
              last_name: "Augusto",
              initials: "JA",
              avatar:
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            },
            {
              first_name: "Jonathas",
              last_name: "Augusto",
              initials: "JA",
              avatar:
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            },
            {
              first_name: "Jonathas",
              last_name: "Augusto",
              initials: "JA",
              avatar:
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }
          ],
          comments: [
            {
              comment: "Porra, tu é daora",
              user: {
                first_name: "Jonathas",
                last_name: "Augusto",
                initials: "JA",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              }
            },
            {
              comment: "Porra, tu é feio",
              user: {
                first_name: "Jonathas",
                last_name: "Augusto",
                initials: "JA",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              }
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>