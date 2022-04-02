<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo">智能接口平台</div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/">工程</router-link>
        </a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <router-view />
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
  </a-layout>
</template>
<script setup>
import { ref } from 'vue';
const selectedKeys = ref(['1'])
</script>
<style>
.logo {
  width: 120px;
  height: 31px;
  float: left;
  margin: 16px 24px 16px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}
</style>