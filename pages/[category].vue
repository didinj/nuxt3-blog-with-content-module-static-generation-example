<template>
  <div class="max-w-3xl mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6">
      Posts in "{{ category }}"
    </h1>

    <div v-for="post in posts" :key="post.path" class="mb-6">
      <NuxtLink :to="post.path" class="text-xl font-semibold hover:underline">
        {{ post.title }}
      </NuxtLink>
      <p class="text-gray-600">{{ post.description }}</p>
      <div class="text-sm text-gray-500">
        {{ new Date(post.date).toLocaleDateString() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const category = route.params.category as string

const { data: posts } = await useAsyncData(() => {
  return queryCollection('blog')
  .where('category', '=', category)
  .order('date', 'desc')
  .all()
})
</script>
