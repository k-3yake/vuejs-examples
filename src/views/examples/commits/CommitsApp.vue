<template>
    <div id="demo">
        <template  v-for="branch in branches">
            <input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch">
            <label v-bind:for="branch">{{ branch }}</label>
        </template>
        <p>vuejs/vue@{{currentBranch}}</p>
        <ul>
            <li v-for="commit of commits">
                <a :href="commit.html_url" >{{ commit.sha | truncate}}</a>
                <div>message:{{ commit.commit.message }}</div>
                <a class="author" :href="commit.committer.html_url">{{ commit.commit.committer.name }}</a>
                <div class="date">date:{{ commit.commit.committer.date | dateFormat}}</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator'
    import moment from 'moment'

    @Component({
        filters: {
            truncate(str: string): string {
                return str.substr(0,5)
            },
            dateFormat(date: Date): string {
                return moment(date).format("YYYY/MM/DD HH:mm")
            }
        }
    })
    export default class CommitsApp extends Vue {
        private apiUrl = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
        private branches: Array<string> = ["master", "dev"];
        private currentBranch: string = this.branches[0];
        private commits: Array<Object> = [];

        public created() {
            this.fetchCommits()
        }


        @Watch("currentBranch")
        private fetchCommits() {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', this.apiUrl + this.currentBranch)
            xhr.send();
            xhr.onload = () => {
                this.commits = JSON.parse(xhr.responseText)
            }
        }
    }
</script>

<style scoped>
    #demo {
        font-family: 'Helvetica', Arial, sans-serif;
    }
    a {
        text-decoration: none;
        color: #f66;
    }
    li {
        line-height: 1.5em;
        margin-bottom: 20px;
    }
    .author, .date {
        font-weight: bold;
    }
</style>
