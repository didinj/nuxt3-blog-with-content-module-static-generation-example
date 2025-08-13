<template>
  <div class="max-w-3xl mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6">Blog</h1>

    <div v-for="post in paginatedPosts" :key="post.path" class="mb-6">
      <NuxtLink :to="post.path" class="text-xl font-semibold hover:underline">
        {{ post.title }}
      </NuxtLink>
      <p class="text-gray-600">{{ post.description }}</p>
      <div class="text-sm text-gray-500">
        {{ new Date(post.date).toLocaleDateString() }}
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-between mt-8">
      <button
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        Prev
      </button>
      <button
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const postsPerPage = 5
const currentPage = ref(1)

const { data: allPosts } = await useAsyncData(() => {
  return queryCollection('blog')
  .where('_partial', '=', false)
  .order('date', 'desc')
  .all()
})

const totalPages = computed(() =>
  Math.ceil(allPosts.value?.length! / postsPerPage)
)

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return allPosts.value?.slice(start, start + postsPerPage)
})
</script>
