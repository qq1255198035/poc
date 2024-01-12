<template>
  <div class="policy">
    <common-title title="政策" >
      <div class="tool-box">
        <el-button :icon="Download" plain type="primary" @click="saveReport('download')" />
        <el-button plain type="primary" @click="saveReport('save')">保存报告</el-button>
      </div>
    </common-title>
    <div></div>
    <common-layout>
      <template #left>
        <div class="form-box">
          <div class="title">基本信息</div>
          <div class="form-content">
            <el-form :model="form" label-width="120px" :rules="rules">
              <el-row>
                <el-col :span="24">
                  <el-form-item label="车系:" prop="series">
                    <el-select v-model="form.series" placeholder="请选择车系" style="width: 100%;">
                      <el-option label="奥迪Q3" value="q3" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="车款:" prop="year">
                    <el-select v-model="form.year" disabled style="width: 100%;">
                      <el-option label="2023款" value="2023" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="地区:" prop="area">
                    <el-select v-model="form.area" style="width: 100%;" placeholder="请选择地区">
                      <el-option label="东南区" value="dn" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="车型:" prop="model">
                    <el-select v-model="form.model" disabled style="width: 100%;">
                      <el-option label="35TFSI 进取雅致型" value="35" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="月份:" prop="month">
                    <el-date-picker
                      v-model="form.month"
                      type="month"
                      placeholder="请选择月份"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="竞品:">
                    <el-select v-model="form.competitors" multiple style="width: 100%;" placeholder="请选择竞品">
                      <el-option label="特斯拉 Model Y" value="1"  />
                      <el-option label="宝马 X1" value="2" />
                      <el-option label="奔驰 GLA" value="3" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <span class="sub-title">特斯拉 Model Y</span>
                  <el-form-item label="车型:" prop="modelC">
                    <el-select v-model="form.modelC" style="width: 100%;" placeholder="请选择车型">
                      <el-option label="长续航性" value="long" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <span class="sub-title">宝马 X1</span>
                  <el-form-item label="车型:" prop="modelB">
                    <el-select v-model="form.modelB" style="width: 100%;" placeholder="请选择车型">
                      <el-option label="2024款sDrive20LiX" value="2024" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <span class="sub-title">奔驰 GLA</span>
                  <el-form-item label="车型:" prop="modelA">
                    <el-select v-model="form.modelA" style="width: 100%;" placeholder="请选择车型">
                      <el-option label="2024款 GLA 200" value="2024" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="btn-box">
            <el-button plain type="primary">保存</el-button>
            <el-button type="primary" @click="loading = true">生成报告</el-button>
          </div>
        </div>
      </template>
      <template #right>
        <div class="report-box" v-loading="loading"></div>
      </template>
    </common-layout>
    <el-dialog
      v-model="dialogVisible"
      :title="dialogTitle"
      destroy-on-close
      width="30%"
    >
      <div>
        <div class="download-box" v-if="dialogKey === 'download'">
          <p>请选择报告格式:</p>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="word" border>
              <div class="check-item">
                <img src="@/assets/imgs/common/word.png"> Word
              </div>
            </el-checkbox>
            <el-checkbox label="excel" border>
              <div class="check-item">
                <img src="@/assets/imgs/common/excel.png"> Excel
              </div>
            </el-checkbox>
            <el-checkbox label="pdf" border>
              <div class="check-item">
                <img src="@/assets/imgs/common/pdf.png"> PDF
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <div v-else>
          <el-form ref="formRef" :form="form1" :rules="rules1" label-width="100px">
            <el-row>
              <el-col :span="24">
                <el-form-item label="报告名称:" prop="name">
                  <el-input
                    v-model="form1.name"
                    maxlength="60"
                    placeholder="原报告名称、此处可继续编辑"
                    show-word-limit
                    type="text"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="保存到:" prop="type">
                  <el-radio-group v-model="form1.type" size="small">
                    <el-radio-button label="mine">我的报告</el-radio-button>
                    <el-radio-button label="project">项目空间</el-radio-button>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item prop="enum">
                  <el-select v-model="form1.enum" style="width: 100%;" placeholder="请选择分组">
                      <el-option label="未分组" value="undefind" />
                    </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer" v-if="dialogKey === 'save'">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            保存
          </el-button>
        </span>
        <span class="dialog-footer" v-if="dialogKey === 'download'">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button @click="dialogVisible = false">预览</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            下载
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import CommonTitle from '@/components/CommonTitle'
import CommonLayout from '@/components/CommonLayout'
import { Download } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
const loading = ref(false)
const dialogVisible = ref(false)
const dialogTitle = ref('')
const dialogKey = ref('')
const form = reactive({
  series: 'q3',
  year: '2023',
  area: 'dn',
  model: '35',
  month: '2024-01',
  competitors: ['1', '2', '3'],
  modelC: 'long',
  modelA: '2024',
  modelB: '2024'
})
const form1 = reactive({
  name: '',
  type: 'mine',
  enum: 'undefind'
})
const rules1 = reactive({
  name: [{ required: true, message: '请选择填写报告名称', trigger: 'blur' }],
  enum: [{ required: true, message: '请选择分组', trigger: 'change' }]
})
const rules = reactive({
  series: [{ required: true, message: '请选择车系', trigger: 'change' }],
  year: [{ required: true, message: '请选择年份', trigger: 'change' }],
  area: [{ required: true, message: '请选择地区', trigger: 'change' }],
  model: [{ required: true, message: '请选择车型', trigger: 'change' }],
  month: [{ required: true, message: '请选择月份', trigger: 'change' }],
  competitors: [{ required: true, message: '请选择竞品', trigger: 'change' }],
  modelC: [{ required: true, message: '请选择车型', trigger: 'change' }],
  modelA: [{ required: true, message: '请选择月份', trigger: 'change' }],
  modelB: [{ required: true, message: '请选择月份', trigger: 'change' }]
})
const checkList = ref([])
const formRef = ref(null)
const saveReport = (key) => {
  dialogKey.value = key
  if (key === 'save') {
    dialogTitle.value = '保存报告'
  } else {
    dialogTitle.value = '下载报告'
  }
  dialogVisible.value = true
}

</script>
<style lang="scss" scoped>
  .policy{
    height: 100%;
    .title{
      font-size: 16px;
      color: $primary-color;
      font-weight: bold;
    }
    .form-box{
      height: 100%;
      position: relative;
      .form-content{
        padding-top: $basic-margin;
        .sub-title{
          font-size: 14px;
          color: $primary-color;
          margin-bottom: 16px;
        }
      }
      .btn-box{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        padding-top: 16px;
        border-top: 1px solid $border-color;
        text-align: right;
      }
    }
    .report-box{
      height: 100%;
    }
  }
  .check-item{
    display: flex;
    align-items: center;
    img{
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
</style>