<template>
	<div class="repositories">
		<h1>
			Repositories de
			<span>{{ User }}</span>
			<i class="material-icons back" @click="navigateBack">arrow_back</i>
		</h1>
		<div class="repositories-content" v-if="Repositories.length > 0">
			<div class="sort">
				Ordenar por:
				<v-btn round color="black" :class="{ orange: Filter.Name }" dark @click="sortName">Name</v-btn>
				<v-btn round color="black" :class="{ orange: Filter.Star }" dark @click="sortStar">Star</v-btn>
				<v-btn round color="black" :class="{ orange: Filter.Fork }" dark @click="sortForks">Forks</v-btn>
				<v-btn round color="black" :class="{ orange: Filter.Watch }" dark @click="sortWatchs">Watchers</v-btn>
			</div>
			<repositorie-github :Repo="Repo" v-for="Repo in Repositories" :key="Repo.id"/>
		</div>
		<infinite-loading @infinite="infiniteHandler">
			<div slot="spinner" v-if="IsLoadingRepositories">
				<v-progress-circular indeterminate color="orange"/>
			</div>
		</infinite-loading>
	</div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import VProgressCircular from "vuetify/es5/components/VProgressCircular";

import GithubService from "services/GithubService";

import RepositorieGithub from "components/RepositorieGithub";

import { orderBy } from "lodash";

export default {
	name: "Repositories",
	data() {
		return {
			Repositories: [],
			User: null,
			IsLoadingRepositories: false,
			Page: 1,
			PageSize: 20,
			Filter: {
				Name: false,
				Start: false,
				Fork: false,
				Watch: false
			}
		};
	},
	created() {
		this.User = this.$route.params.User;
	},
	methods: {
		async getRepositoriesByName() {
			try {
				this.IsLoadingRepositories = true;
				const result = await GithubService.getRepositoriesByName(
					this.User,
					this.Page,
					this.PageSize
				);
				return result;
			} catch (error) {
				console.error(error);
			} finally {
				this.IsLoadingRepositories = false;
			}
		},
		async infiniteHandler($state) {
			try {
				let repositories = await this.getRepositoriesByName();
				if (repositories.length) {
					this.Repositories.splice(
						this.Repositories.length,
						0,
						...repositories
					);
					this.Page++;
					$state.loaded();
				} else {
					$state.complete();
				}
			} catch (error) {
				console.error(error);
			}
		},
		navigateBack() {
			this.$router.push({
				name: "Home"
			});
		},
		sortName() {
			this.filterReset();
			this.Filter.Name = true;
			this.Repositories = orderBy(this.Repositories, ["name"], ["asc"]);
		},
		sortStar() {
			this.filterReset();
			this.Filter.Star = true;
			this.Repositories = orderBy(
				this.Repositories,
				["stargazers_count"],
				["desc"]
			);
		},
		sortForks() {
			this.filterReset();
			this.Filter.Fork = true;
			this.Repositories = orderBy(this.Repositories, "forks", "desc");
		},
		sortWatchs() {
			this.filterReset();
			this.Filter.Watch = true;
			this.Repositories = orderBy(this.Repositories, "watchers", "desc");
		},
		filterReset() {
			this.Filter = {
				Name: false,
				Star: false,
				Fork: false,
				Watch: false
			};
		}
	},
	components: {
		InfiniteLoading,
		VProgressCircular,
		RepositorieGithub
	}
};
</script>
<style lang="scss" src="assets/scss/Repositories.scss" scoped />
