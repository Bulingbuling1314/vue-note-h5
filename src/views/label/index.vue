<template>
  <div class="label">
    <div class="label_list">
      <div class="label_item item_add" @click="addLabel">
        <img src="@/assets/images/add.png" alt="" />
      </div>

      <div
        class="label_item"
        v-for="item in label.list"
        :key="item.id"
        @click="editLabel(item.id)"
      >
        <div class="label_item_top">
          <span>{{ item.name || "-" }}</span>
          <span>{{ item.date || "-" }}</span>
        </div>
        <div class="label_item_content">
          {{ item.content || "-" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { getNoteList, removeById } from "@/api/index";
import { Dialog, Notify } from "vant";
export default {
  setup() {
    const label = reactive({
      list: [],
    });
    const list = () => {
      getNoteList({}).then((res) => {
        label.list = res.data;
      });
    };
    onMounted(() => {
      list();
    });
    const router = useRouter();
    function addLabel() {
      router.push("/label/add");
    }
    const editLabel = (id: number) => {
      Dialog.confirm({
        title: "请选择",
        message: "编辑还是删除！",
        confirmButtonText: "编辑",
        cancelButtonText: "删除",
      })
        .then(() => {
          router.push(`/label/edit/${id}`);
        })
        .catch(() => {
          removeById({ id }).then((res) => {
            Notify({ type: "success", message: res.data });
            list();
          });
        });
    };
    return {
      label,
      addLabel,
      editLabel,
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
};
</script>
<style scoped lang="less">
.label_list {
  width: 100%;
  column-count: 2; //多列的列数
  column-gap: 8px; //列间距
  padding: 8px;
  .label_item {
    background-color: #e1e1e1;
    margin-bottom: 8px;
    break-inside: avoid;
    border-radius: 10px;
    .label_item_top {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;
      padding: 8px;
      font-size: 12px;
    }
    .label_item_content {
      text-indent: 28px;
      padding: 8px;
      text-align: left;
    }
  }
  .item_add {
    height: 150px;
    img {
      width: 60px;
      margin-top: 45px;
    }
  }
}
</style>
