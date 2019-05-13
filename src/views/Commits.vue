<template>
	<div class="commits">
		<div class="search">
			<v-text-field
				label="Buscar por texto"
				hide-details
				outline
				v-model="textSearch"
				@keyup.enter="searchCommit"
			/>
			<v-btn round color="orange" dark @click="searchCommit">Search</v-btn>
			<v-btn round color="black" dark @click="resetSearch">Reset</v-btn>
		</div>
		<div class="commits-content">
			<h1>
				Commits
				<i class="material-icons back" @click="navigateBack">arrow_back</i>
			</h1>
			<h3 v-if="!filterActived">Count Commits loaded: {{Commits.length || 0}}</h3>
			<h3 v-else>
				Search Total:
				<span>{{searchResultCount > 0 && filterActived ? searchResultCount : 0}}</span>
			</h3>
			<v-timeline v-if="Commits.length > 0">
				<v-timeline-item
					v-for="Commit in Commits"
					:key="Commit.id"
					:class="{'filtered' : !Commit.Filtered && filterActived}"
					color="orange"
					large
				>
					<template v-slot:opposite>
						<span class="date">
							{{
							formatedDate(Commit.commit.committer.date)
							}}
						</span>
					</template>
					<div class="message">
						<a :href="Commit.html_url" target="_blank">
							{{
							Commit.commit.message
							}}
						</a>
					</div>
				</v-timeline-item>
			</v-timeline>

			<infinite-loading ref="infiniteLoading" @infinite="infiniteHandler">
				<div slot="spinner">
					<v-progress-circular v-show="!filterActived" indeterminate color="orange"/>
				</div>
			</infinite-loading>
		</div>
	</div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import VProgressCircular from "vuetify/es5/components/VProgressCircular";
import * as VTimeline from "vuetify/es5/components/VTimeline";
import VTextField from "vuetify/es5/components/VTextField";

import GithubService from "services/GithubService";
import moment from "moment";

import { some, unary, partialRight, includes } from "lodash";

export default {
	name: "Repositories",
	data() {
		return {
			Commits: [],
			IsLoadingCommits: false,
			Name: null,
			User: null,
			Page: 1,
			PageSize: 20,
			textSearch: null,
			filterActived: false,
			searchEmpty: false,
			searchResultCount: 0
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
				if (this.filterActived) return;
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
		},
		searchCommit() {
			if (this.textSearch == "") {
				this.resetSearch();
				return;
			}
			this.searchResultCount = 0;
			let CommitsFiltered = this.Commits.filter(Commit => {
				const CommitNameSplited = Commit.commit.message.split(" ");
				let match = some(
					CommitNameSplited,
					unary(partialRight(includes, this.textSearch))
				);
				if (match) {
					this.$set(Commit, "Filtered", true);
					this.searchResultCount++;
				} else {
					this.$set(Commit, "Filtered", false);
				}
				this.filterActived = true;
				return match;
			});
			this.searchEmpty = !CommitsFiltered.length > 0;
		},
		resetSearch() {
			this.textSearch = "";
			this.filterActived = false;
			this.$refs.infiniteLoading.stateChanger.reset();
		}
	},
	components: {
		InfiniteLoading,
		VProgressCircular,
		VTextField,
		...VTimeline
	}
};
</script>
<style lang="scss" src="assets/scss/Commits.scss" scoped />
