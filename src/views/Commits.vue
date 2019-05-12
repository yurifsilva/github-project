<template>
  <div class="commits">
    <h1>
      Commits
      <i class="material-icons back" @click="navigateBack">arrow_back</i>
    </h1>
    <v-timeline v-if="Commits.length > 0">
      <v-timeline-item
        v-for="Commit in Commits"
        :key="Commit.id"
        color="orange"
        large
      >
        <template v-slot:opposite>
          <span class="date">{{
            formatedDate(Commit.commit.committer.date)
          }}</span>
        </template>
        <div class="message">
          <a :href="Commit.html_url" target="_blank">{{
            Commit.commit.message
          }}</a>
        </div>
      </v-timeline-item>
    </v-timeline>

    <infinite-loading @infinite="infiniteHandler">
      <div slot="spinner" v-if="IsLoadingCommits">
        <v-progress-circular indeterminate color="orange" />
      </div>
    </infinite-loading>
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import VProgressCircular from "vuetify/es5/components/VProgressCircular";
import * as VTimeline from "vuetify/es5/components/VTimeline";

import GithubService from "services/GithubService";
import moment from "moment";

export default {
  name: "Repositories",
  data() {
    return {
      Commits: [],
      IsLoadingCommits: false,
      Name: null,
      User: null,
      Page: 1,
      PageSize: 10
    };
  },
  created() {
    this.Name = this.$route.params.Name;
    this.User = this.$route.params.User;
  },
  methods: {
    async getCommitsByName() {
      try {
        this.IsLoadingCommits = true;
        const result = await GithubService.getCommitsByName(
          this.Name,
          this.User,
          this.Page,
          this.PageSize
        );
        return result;
      } catch (error) {
        console.error(error);
      } finally {
        this.IsLoadingCommits = false;
      }
    },
    async infiniteHandler($state) {
      try {
        let commits = await this.getCommitsByName();
        if (commits.length) {
          this.Commits.splice(this.Commits.length, 0, ...commits);
          this.Page++;
          $state.loaded();
        } else {
          $state.complete();
        }
      } catch (error) {
        console.error(error);
      }
    },
    formatedDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
      }
    },
    navigateBack() {
      this.$router.push({
        name: "Repositories",
        params: { Name: this.User }
      });
    }
  },
  components: {
    InfiniteLoading,
    VProgressCircular,
    ...VTimeline
  }
};
</script>
<style lang="scss" src="assets/scss/Commits.scss" scoped />
