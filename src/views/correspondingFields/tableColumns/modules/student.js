
import { parseTimeMilliSecond } from '@/utils/index.js'
// 列表列
const Columns = [
  { label: '编号', name: 'number', fixed: 'left' },
  { label: '名称', name: 'title', fixed: 'left', minWidth: 155 },
  { label: 'ID', name: 'mechNo' },
  { label: '账号', name: 'account' },
  { label: '省份', name: 'province' },
  { label: '创建时间', name: 'creatTime', formater: formaterByDay, width: 140 },
  { label: '创建人', name: 'creator' }
]

// 年月日
function formaterByDay(v) {
  const cFormat = '{y}-{m}-{d}'
  return v === null || v === 'null' ? '------' : parseTimeMilliSecond(v, cFormat)
}

/** 模板
 *authority:权限（默认为true）
  valueType:列中数据类型（默认data）'@/utils/constantsParam.js'->TABLECOLUMNSTYPE
  label:列头名
  name：普通数据对应tableData中的字段
  formater：回调函数
  value:操作列
 * const Columns = [
  {
    authority: true,
    valueType: ConstantsParam.TABLECOLUMNSTYPE.IMAGE.key,
    label: ConstantsParam.TABLECOLUMNSTYPE.IMAGE.label,
    name: '',
    value: [{
      src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg',
      callBackFunName: 'show1',
      alt: '图片1',
      style: ConstantsParam.TABLECOLUMNSTYPE.IMAGE.style
    },
    {
      src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg',
      callBackFunName: 'show2',
      alt: '图片2',
      style: ConstantsParam.TABLECOLUMNSTYPE.IMAGE.style
    }],
    fixed: 'left',
    width: 50
  },
 { label: '编号', name: 'number', fixed: 'left' },
  { label: '名称', name: 'title', fixed: 'left', minWidth: 155 },
  { label: 'ID', name: 'mechNo' },
  { label: '账号', name: 'account' },
  { label: '省份', name: 'province' },
  { label: '创建时间', name: 'creatTime', formater: formaterByDay, width: 140 },
  { label: '创建人', name: 'creator' }
  {
    authority: true,
    valueType: ConstantsParam.TABLECOLUMNSTYPE.BUTTON.key,
    label: ConstantsParam.TABLECOLUMNSTYPE.BUTTON.label,
    name: '',
    value: [{
      label: '编辑',
      entity: ConstantsParam.TABLECOLUMNSTYPE.BUTTON,
      callBackFunName: 'show3'
    },
    { label: '查看',
      entity: ConstantsParam.TABLECOLUMNSTYPE.BUTTON,
      callBackFunName: 'show4'
    }
    ],
    fixed: 'right',
    width: 50
  }
]
 */

export default Columns
