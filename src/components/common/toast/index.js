import Toast from './toast'

const obj ={}

obj.install = function(Vue){
  console.log('安装了');
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 2.new的方式，根据组件构造器，创建出来一个组件对象
  const toast = new toastContrustor()
  // 3.将组件对象、手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  // 4.将组件加入到body上面
  document.body.appendChild(toast.$el)
  // 5.将toast放在Vue的原型上面
  Vue.prototype.$toast = toast;
}

export default obj