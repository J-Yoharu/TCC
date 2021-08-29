<template>
  <v-list two-line>
    <v-list-item class="mb-2" link v-for="(user, index) in users" :key="index">
      <v-list-item-avatar class="mr-2">
        <Avatar :user="user" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          {{ user.self ? "Você" : user.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <i class="icon" :class="{ connected: user.connected }"></i>
          {{ user.connected ? "online" : "offline" }}
        </v-list-item-subtitle>
        <v-divider></v-divider>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    users: { type: Array }
  },
  components: {
    Avatar: () => import("@/modules/app/components/Avatar.vue")
  },
  computed: {
    status() {
      let actualStatus;
      for (let i = 0; i < this.users.lenght; i++) {
        const user = this.users[i];
        actualStatus = user.connected;
      }
      return actualStatus ? "online" : "offline";
    }
  }
};
</script>

<style scoped>
.icon {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
  background-color: #e38968;
  margin-right: 6px;
}

.icon.connected {
  background-color: #86bb71;
}
</style>