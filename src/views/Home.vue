<template>
	<div class="home">
		<div class="add-user">
			<v-text-field
				outline
				:disabled="IsLoadingUser"
				v-model="UserInput"
				@keyup.enter="addUser"
				label="New User"
				:error-messages="error"
			/>
			<v-btn round color="orange" :loading="IsLoadingUser" dark @click="addUser">Add</v-btn>
		</div>
		<div class="users">
			<user-card v-for="User in UsersLocal" :key="User.id" :User="User"/>
		</div>
	</div>
</template>

<script>
import UserCard from "components/UserCard";

import GithubService from "services/GithubService";

import VTextField from "vuetify/es5/components/VTextField";
import VBtn from "vuetify/es5/components/VBtn";

import { mapGetters, mapActions } from "vuex";
import { findIndex } from "lodash";

export default {
	name: "home",
	data() {
		return {
			UsersLocal: [],
			UserInput: null,
			IsLoadingUser: false,
			error: ""
		};
	},
	computed: {
		...mapGetters({
			Users: "github/Users"
		})
	},
	created() {
		this.UsersLocal = this.Users;
		if (this.UsersLocal.length == 0) {
			this.UserInput = "yurifsilva";
			this.addUser();
			this.UserInput = "yyx990803";
			this.addUser();
		}
	},
	methods: {
		...mapActions({
			updateUsers: "github/updateUsers"
		}),
		async addUser() {
			if (!this.UserInput || this.UserInput == "") {
				return;
			}
			const checkUserAdded = findIndex(this.UsersLocal, [
				"login",
				this.UserInput
			]);
			if (checkUserAdded > 0) {
				this.error = "User already added";
				return;
			}
			try {
				this.IsLoadingUser = true;
				const result = await GithubService.getUserByName(
					this.UserInput
				);

				this.UsersLocal.push(result);
				this.updateUsers(this.UsersLocal);
				this.UserInput = null;
				this.error = "";
			} catch (error) {
				this.error = "User not found";
				console.error(error);
			} finally {
				this.IsLoadingUser = false;
			}
		}
	},
	components: {
		UserCard,
		VTextField,
		VBtn
	}
};
</script>
<style lang="scss" src="assets/scss/Home.scss" scoped />
