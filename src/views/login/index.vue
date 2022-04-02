<script setup>
import { reactive } from 'vue';
const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

</script>

<template>
  <div class="smart-login">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: '请输入账号' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
.smart-login {
  margin: 200px auto;
  width: 500px;
  height: 300px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 10px;
  box-shadow: 2px 2px 2px #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>