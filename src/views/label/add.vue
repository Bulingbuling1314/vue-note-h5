<template>
  <div class="label_title">
    <van-field
      class="field"
      v-model="form.title"
      label="标题"
      placeholder="请输入"
    />
    <van-field
      class="field"
      v-model="form.date"
      label="日期"
      placeholder="请输入"
    />
  </div>
  <div class="label_content">
    <van-field
      v-model="form.content"
      rows="10"
      autosize
      type="textarea"
      maxlength="500"
      placeholder="请输入内容"
      show-word-limit
    />
  </div>
  <van-button type="primary" size="large" @click="save">{{
    isEdit ? "修改" : "新增"
  }}</van-button>
</template>

<script>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getNoteInfo, save as saveAndEdit } from "@/api/index";
import { Notify } from "vant";
export default {
  setup() {
    const form = reactive({
      id: null,
      title: "",
      date: "",
      content: "",
    });
    const route = useRoute();
    const router = useRouter();
    const isEdit = route.name === "LABEL-EDIT";
    if (isEdit) {
      getNoteInfo({ id: route.params.id }).then((res) => {
        const result = res.data;
        form.id = result.id;
        form.title = result.title;
        form.date = result.date;
        form.content = result.content;
      });
    }
    const save = () => {
      saveAndEdit(form).then(() => {
        Notify({ type: "success", message: "操作成功" });
        router.back(-1);
      });
    };
    return {
      form,
      isEdit,
      save,
    };
  },
};
</script>

<style lang="less" scoped>
.label_title {
  .field {
    /deep/ .van-field__label {
      width: 50px;
    }
  }
}
</style>
