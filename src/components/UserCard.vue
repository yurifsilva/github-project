<template>
  <router-link
    tag="div"
    :to="{ name: 'Repositories', params: { User: User.login } }"
    class="user-card"
  >
    <img class="avatar" :src="Avatar" alt />
    <span class="name">{{ User.name }}</span>
    <div class="login">
      <img src="/img/github.png" alt />
      {{ User.login }}
    </div>
  </router-link>
</template>
<script>
export default {
  name: "UserCard",
  data() {
    return {
      AvatarDefault: "/img/sem-foto.jpg"
    };
  },
  computed: {
    Avatar() {
      return this.User.avatar_url ? this.User.avatar_url : this.AvatarDefault;
    }
  },
  props: {
    User: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" src="assets/scss/UserCard.scss" scoped />
