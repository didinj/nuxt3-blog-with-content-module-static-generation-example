<script setup lang="ts">
const { data: posts } = await useAsyncData(() => queryCollection('content').all())
console.log(`List of posts: ${posts.value?.length}`)
</script>

<template>
  <main class="container mx-auto py-10">
    <h1 class="text-4xl font-bold mb-8">My Nuxt 3 Blog</h1>
    <div v-if="posts">
      <div v-for="post in posts" :key="post.path" class="mb-6">
        <NuxtLink :to="post.path" class="text-2xl text-blue-600 hover:underline">
          {{ post.title }}
        </NuxtLink>
      </div>
    </div>
    <p v-else>No posts found.</p>
  </main>
</template>