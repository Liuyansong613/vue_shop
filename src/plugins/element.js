import Vue from 'vue'
import { Option, Select, Tree, Tag, MessageBox, Pagination, Tooltip, Switch, Table, TableColumn, Row, Col, Card, BreadcrumbItem, Breadcrumb, Menu, Submenu, MenuItemGroup,Container, Header, Aside, Main, Message,Form,FormItem,Input,Button, MenuItem, Dialog } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Main)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)



//挂载弹框组件
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm