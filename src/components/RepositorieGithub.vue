<template>
  <router-link
    tag="a"
    class="repo"
    :to="{
      name: 'Commits',
      params: { User: Repo.owner.login, Name: Repo.name }
    }"
    :key="Repo.id"
  >
    <span class="name">{{ Repo.name }}</span>

    <div class="infos">
      <div class="stars">
        <i class="material-icons">star</i>
        {{ Repo.stargazers_count }}
      </div>
      <div class="shared">
        <i class="material-icons">share</i>
        {{ Repo.forks }}
      </div>
      <div class="watch">
        <i class="material-icons">remove_red_eye</i>
        {{ Repo.watchers }}
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "RepositorieGithub",
  props: {
    Repo: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" src="assets/scss/RepositorieGithub.scss" scoped />
