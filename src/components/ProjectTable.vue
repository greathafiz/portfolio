<template>
    <div>
        <h2>Explore My Recent Projects</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Technologies Used</th>
                    <th>Links</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(project, index) in projects" :key="index">
                    <td>{{ project.name }}</td>
                    <td>{{ project.techUsed }}</td>
                    <td>
                        <a :href="project.demoLink" target="_blank">Demo</a>
                        <span> | </span>
                        <a :href="project.sourceCodeLink" target="_blank">Source Code</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "ProjectTable",
    data () {
        return {
            projects: [
                {name: 'Blog API', techUsed: 'Node.js, Express, MongoDB', demoLink: 'https://github.com/greathafiz/blog-api#readme', sourceCodeLink: 'https://github.com/greathafiz/blog-api'},
                {name: 'TaskManager API', techUsed: 'Node.js, Express, MongoDB', demoLink: 'https://github.com/greathafiz/task-manager-api#readme', sourceCodeLink: 'https://github.com/greathafiz/task-manager-api'},
                {name: 'Mini Blogging Platform', techUsed: 'Node.js, Express, MongoDB, Handlebars', demoLink: 'https://mini-blog-app.onrender.com/', sourceCodeLink: 'https://github.com/greathafiz/mini-blog-app'},
                {name: 'URL Shortener', techUsed: 'Node.js, Express, MongoDB', demoLink: 'https://express-url-shortener.onrender.com/', sourceCodeLink: 'https://github.com/greathafiz/url_shortener'},
                {name: 'Chat App', techUsed: 'Node.js, Express, MongoDB, Socket.io', demoLink: 'https://chat-app-uajv.onrender.com/', sourceCodeLink: 'https://github.com/greathafiz/chat_app'}
            ]
        }
    }
}
</script>

<style scoped>

div {
  min-height: 100vh;
}

  h2 {
    color: black;
    text-align: center;
  }

  .table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    border: 1px solid #e2e3e5;
  }

  th, td {
    padding: 12px;
    border: 1px solid #e2e3e5;
  }

  th {
    background-color: black;
    color: white;
  }

  td {
    background-color: white;
    color: black;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>