<script setup lang="ts">
import { useUpdatingTips } from '~/composable/updatingtips';
useUpdatingTips();
</script>
<template>
  <Toast position="bottom-left" group="bl" />
</template>