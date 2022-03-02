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
      @focus="dateFocus"
    />
    <van-popup v-model:show="show.popup" round position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        title="选择时间"
        :formatter="formatter"
        @cancel="closePopup"
        @confirm="confirmDate"
      />
    </van-popup>
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
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getNoteInfo, save as saveAndEdit } from "@/api/index";
import { Notify } from "vant";
import moment from "moment";
export default {
  setup() {
    const form = reactive({
      id: null,
      title: "",
      date: "",
      content: "",
    });
    const currentDate = ref(new Date());
    const show = reactive({
      popup: false,
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
    // 格式化时间
    const formatter = (type, val) => {
      if (type === "year") {
        return val + "年";
      }
      if (type === "month") {
        return val + "月";
      }
      if (type === "day") {
        return val + "日";
      }
      if (type === "hour") {
        return val + "时";
      }
      if (type === "minute") {
        return val + "分";
      }
      return val;
    };

    // 打开选择时间
    const dateFocus = () => {
      show.popup = true;
    };
    // 关闭选择时间
    const closePopup = () => {
      show.popup = false;
    };
    // 确认选择时间
    const confirmDate = (value) => {
      show.popup = false;
      form.date = moment(value).format("YYYY-MM-DD hh:mm:ss");
    };

    return {
      moment,
      form,
      isEdit,
      save,
      show,
      currentDate,
      formatter,
      dateFocus,
      closePopup,
      confirmDate,
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
