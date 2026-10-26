<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const visible = computed(() => Boolean(frontmatter.value.book))
const fields = computed(() => {
  const fm = frontmatter.value
  return [
    { label: '书名', value: fm.book },
    { label: '版本', value: fm.edition }
  ].filter((item) => item.value)
})
</script>

<template>
  <section v-if="visible" class="source-note">
    <p class="source-note__title">来源</p>
    <ul class="source-note__list">
      <li v-for="item in fields" :key="item.label">
        <span class="source-note__label">{{ item.label }}：</span>{{ item.value }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.source-note {
  margin-top: 3rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.8125rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.source-note__title {
  margin: 0 0 0.25rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.source-note__list {
  margin: 0;
  padding-left: 1rem;
  list-style: disc;
}

.source-note__label {
  color: var(--vp-c-text-3);
}
</style>
