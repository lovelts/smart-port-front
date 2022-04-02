<template>
  <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
    <a-card
      style="width: 100%"
      :tab-list="tabListNoTitle"
      :active-tab-key="noTitleKey"
      @tabChange="key => onTabChange(key)"
    >
      <div v-if="noTitleKey === 'article'">
        <a-card hoverable style="width: 300px">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </div>
      <p v-else-if="noTitleKey === 'app'">app content</p>
      <template #tabBarExtraContent>
        <a-button type="primary" @click="showModal">添加项目</a-button>
      </template>
    </a-card>
    <a-modal v-model:visible="visible" title="添加项目" @ok="handleOk" okText="确定" cancelText="取消">
      <a-form
        ref="modalFormRef"
        :model="formState"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 12 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="项目名称"
          name="project-name"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.projectName" />
        </a-form-item>

        <a-form-item
          label="项目描述"
          name="project-desc"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input v-model:value="formState.projectDesc" />
        </a-form-item>
        <a-form-item
          label="项目路径"
          name="project-url"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input v-model:value="formState.projectUrl" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script setup>
import { SettingOutlined, EditOutlined, EllipsisOutlined, HomeOutlined } from '@ant-design/icons-vue';
import { ref, reactive, watch } from 'vue';
const visible = ref(false);
const formState = reactive({
  projectName: '',
  projectDesc: '',
  projectUrl: '',
});
const modalFormRef = ref();

const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const tabListNoTitle = [
  {
    key: 'article',
    tab: '全部',
  }, {
    key: 'app',
    tab: '我的',
  }
];
watch(visible, () => {
  formState.value = {};
}, {
  // flush: 'post',
});
const noTitleKey = ref('article');

const onTabChange = (value) => {
  noTitleKey.value = value;
};
const handleOk = e => {
  modalFormRef.value.validateFields().then(() => {
    // formState.users.push({ ...modalFormState.value, key: Date.now() });
    visible.value = false;
  });
};
const showModal = () => {
  visible.value = true;
};
</script>
<style lang="less">
</style>
