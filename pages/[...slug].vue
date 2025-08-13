<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const { data: post } = await useAsyncData(() => queryCollection('content').path(route.path).first())
</script>

<!-- <template>
  <main class="container mx-auto py-10">
    <NuxtLink to="/" class="text-blue-600 hover:underline">&larr; Back to blog</NuxtLink>
    <article class="prose lg:prose-xl mt-6">
      <h1>{{ post?.title }}</h1>
      <p class="text-gray-500 text-sm">{{ post?.description }}</p>
      <ContentRenderer :value="post!" />
    </article>
  </main>
</template> -->
<template>
  <div class="max-w-3xl mx-auto py-10">
    <ContentDoc>
        <article class="prose dark:prose-invert prose-lg">
          <h1>{{ post?.title }}</h1>
          <p class="text-gray-500 text-sm">{{ post?.description }}</p>
          <ContentRenderer :value="post!" />
        </article>
    </ContentDoc>
  </div>
</template>