webpackJsonp([1],{

/***/ "+JzG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/I4v":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2KK6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6F6W":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6mNm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EjzY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EsDT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FQ65":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "H41p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HFrb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HemK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Mv6D":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vue@2.6.10@vue/dist/vue.esm.js
var vue_esm = __webpack_require__("xd7I");

// EXTERNAL MODULE: ./node_modules/_fastclick@1.0.6@fastclick/lib/fastclick.js
var fastclick = __webpack_require__("iDdd");
var fastclick_default = /*#__PURE__*/__webpack_require__.n(fastclick);

// EXTERNAL MODULE: ./node_modules/_object-assign@4.1.1@object-assign/index.js
var _object_assign_4_1_1_object_assign = __webpack_require__("+Up5");
var _object_assign_4_1_1_object_assign_default = /*#__PURE__*/__webpack_require__.n(_object_assign_4_1_1_object_assign);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-header/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var x_header = ({
  name: 'x-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default() {
        return {
          showMore: false
        };
      }
    }
  },
  beforeMount() {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true;
    }
  },
  computed: {
    _leftOptions() {
      return _object_assign_4_1_1_object_assign_default()({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {});
    }
  },
  methods: {
    onClickBack() {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back');
      } else {
        this.$router ? this.$router.back() : window.history.back();
      }
    }
  },
  data() {
    return {
      shouldOverWriteTitle: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-header/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_x_header = ({
  name: 'x-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default() {
        return {
          showMore: false
        };
      }
    }
  },
  beforeMount() {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true;
    }
  },
  computed: {
    _leftOptions() {
      return _object_assign_4_1_1_object_assign_default()({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {});
    }
  },
  methods: {
    onClickBack() {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back');
      } else {
        this.$router ? this.$router.back() : window.history.back();
      }
    }
  },
  data() {
    return {
      shouldOverWriteTitle: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-2cba1308","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-header/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-header"},[_c('div',{staticClass:"vux-header-left"},[_vm._t("overwrite-left",[_c('transition',{attrs:{"name":_vm.transition}},[_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm._leftOptions.showBack),expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{"click":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"preventDefault",undefined,$event.key,undefined)){ return null; }},_vm.onClickBack]}},[_vm._v(_vm._s(typeof _vm._leftOptions.backText === 'undefined' ? '返回' : _vm._leftOptions.backText))])]),_vm._v(" "),_c('transition',{attrs:{"name":_vm.transition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm._leftOptions.showBack),expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{"click":_vm.onClickBack}})])]),_vm._v(" "),_vm._t("left")],2),_vm._v(" "),(!_vm.shouldOverWriteTitle)?_c('h1',{staticClass:"vux-header-title",on:{"click":function($event){return _vm.$emit('on-click-title')}}},[_vm._t("default",[_c('transition',{attrs:{"name":_vm.transition}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.title),expression:"title"}]},[_vm._v(_vm._s(_vm.title))])])])],2):_vm._e(),_vm._v(" "),(_vm.shouldOverWriteTitle)?_c('div',{staticClass:"vux-header-title-area"},[_vm._t("overwrite-title")],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vux-header-right"},[(_vm.rightOptions.showMore)?_c('a',{staticClass:"vux-header-more",on:{"click":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"preventDefault",undefined,$event.key,undefined)){ return null; }},function($event){return _vm.$emit('on-click-more')}]}}):_vm._e(),_vm._v(" "),_vm._t("right")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_x_header = (esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/x-header/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("+JzG")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_x_header,
  src_components_x_header,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ var _vux_2_9_4_vux_src_components_x_header = (Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/actionsheet/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var actionsheet = ({
  name: 'actionsheet',
  mounted() {
    this.hasHeaderSlot = !!this.$slots.header;
    this.$nextTick(() => {
      this.$tabbar = document.querySelector('.weui-tabbar');
      this.$refs.iOSMenu && this.$refs.iOSMenu.addEventListener('transitionend', this.onTransitionEnd);
    });
  },
  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    theme: {
      type: String,
      default: 'ios'
    },
    menus: {
      type: [Object, Array],
      default: () => ({})
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hasHeaderSlot: false,
      show: false
    };
  },
  methods: {
    onTransitionEnd() {
      this.$emit(this.show ? 'on-after-show' : 'on-after-hide');
    },
    onMenuClick(text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key, text);
      } else {
        if (text.type !== 'disabled' && text.type !== 'info') {
          if (text.value || text.value === 0) {
            this.emitEvent('on-click-menu', text.value, text);
          } else {
            this.emitEvent('on-click-menu', '', text);
            this.show = false;
          }
        }
      }
    },
    onClickingMask() {
      this.$emit('on-click-mask');
      this.closeOnClickingMask && (this.show = false);
    },
    emitEvent(event, menu, item) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        let _item = item;
        if (typeof _item === 'object') {
          _item = JSON.parse(JSON.stringify(_item));
        }
        this.$emit(event, menu, _item);
        this.$emit(`${event}-${menu}`);
        this.closeOnClickingMenu && (this.show = false);
      }
    },
    fixIos(zIndex) {
      if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
        return;
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    }
  },
  watch: {
    show(val) {
      this.$emit('input', val);
      if (val) {
        this.fixIos(-1);
      } else {
        setTimeout(() => {
          this.fixIos(100);
        }, 200);
      }
    },
    value: {
      handler: function (val) {
        this.show = val;
      },
      immediate: true
    }
  },
  beforeDestroy() {
    this.fixIos(100);
    this.$refs.iOSMenu && this.$refs.iOSMenu.removeEventListener('transitionend', this.onTransitionEnd);
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/actionsheet/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var components_actionsheet = ({
  name: 'actionsheet',
  mounted() {
    this.hasHeaderSlot = !!this.$slots.header;
    this.$nextTick(() => {
      this.$tabbar = document.querySelector('.weui-tabbar');
      this.$refs.iOSMenu && this.$refs.iOSMenu.addEventListener('transitionend', this.onTransitionEnd);
    });
  },
  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    theme: {
      type: String,
      default: 'ios'
    },
    menus: {
      type: [Object, Array],
      default: () => ({})
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hasHeaderSlot: false,
      show: false
    };
  },
  methods: {
    onTransitionEnd() {
      this.$emit(this.show ? 'on-after-show' : 'on-after-hide');
    },
    onMenuClick(text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key, text);
      } else {
        if (text.type !== 'disabled' && text.type !== 'info') {
          if (text.value || text.value === 0) {
            this.emitEvent('on-click-menu', text.value, text);
          } else {
            this.emitEvent('on-click-menu', '', text);
            this.show = false;
          }
        }
      }
    },
    onClickingMask() {
      this.$emit('on-click-mask');
      this.closeOnClickingMask && (this.show = false);
    },
    emitEvent(event, menu, item) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        let _item = item;
        if (typeof _item === 'object') {
          _item = JSON.parse(JSON.stringify(_item));
        }
        this.$emit(event, menu, _item);
        this.$emit(`${event}-${menu}`);
        this.closeOnClickingMenu && (this.show = false);
      }
    },
    fixIos(zIndex) {
      if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
        return;
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    }
  },
  watch: {
    show(val) {
      this.$emit('input', val);
      if (val) {
        this.fixIos(-1);
      } else {
        setTimeout(() => {
          this.fixIos(100);
        }, 200);
      }
    },
    value: {
      handler: function (val) {
        this.show = val;
      },
      immediate: true
    }
  },
  beforeDestroy() {
    this.fixIos(100);
    this.$refs.iOSMenu && this.$refs.iOSMenu.removeEventListener('transitionend', this.onTransitionEnd);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-72f58432","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/actionsheet/index.vue
var actionsheet_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-actionsheet"},[_c('transition',{attrs:{"name":"vux-actionsheet-mask"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-mask weui-mask_transparent",on:{"click":_vm.onClickingMask}})]),_vm._v(" "),(_vm.theme === 'android')?_c('div',{staticClass:"weui-skin_android"},[_c('transition',{attrs:{"name":"vux-android-actionsheet"},on:{"after-enter":function($event){return _vm.$emit('on-after-show')},"after-leave":function($event){return _vm.$emit('on-after-hide')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-actionsheet"},[_c('div',{staticClass:"weui-actionsheet__menu"},_vm._l((_vm.menus),function(text,key){return _c('div',{staticClass:"weui-actionsheet__cell",domProps:{"innerHTML":_vm._s(text.label || text)},on:{"click":function($event){return _vm.onMenuClick(text, key)}}})}),0)])])],1):_c('div',{ref:"iOSMenu",staticClass:"weui-actionsheet",class:{'weui-actionsheet_toggle': _vm.show}},[_c('div',{staticClass:"weui-actionsheet__menu"},[(_vm.hasHeaderSlot)?_c('div',{staticClass:"weui-actionsheet__cell"},[_vm._t("header")],2):_vm._e(),_vm._v(" "),_vm._l((_vm.menus),function(text,key){return _c('div',{staticClass:"weui-actionsheet__cell",class:("vux-actionsheet-menu-" + (text.type || 'default')),domProps:{"innerHTML":_vm._s(text.label || text)},on:{"click":function($event){return _vm.onMenuClick(text, key)}}})})],2),_vm._v(" "),(_vm.showCancel)?_c('div',{staticClass:"weui-actionsheet__action",on:{"click":function($event){return _vm.emitEvent('on-click-menu', 'cancel')}}},[_c('div',{staticClass:"weui-actionsheet__cell"},[_vm._v(_vm._s(_vm.cancelText || '取消'))])]):_vm._e()])],1)}
var actionsheet_staticRenderFns = []
var actionsheet_esExports = { render: actionsheet_render, staticRenderFns: actionsheet_staticRenderFns }
/* harmony default export */ var src_components_actionsheet = (actionsheet_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/actionsheet/index.vue
function actionsheet_injectStyle (ssrContext) {
  __webpack_require__("/I4v")
}
var actionsheet_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var actionsheet___vue_template_functional__ = false
/* styles */
var actionsheet___vue_styles__ = actionsheet_injectStyle
/* scopeId */
var actionsheet___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var actionsheet___vue_module_identifier__ = null
var actionsheet_Component = actionsheet_normalizeComponent(
  components_actionsheet,
  src_components_actionsheet,
  actionsheet___vue_template_functional__,
  actionsheet___vue_styles__,
  actionsheet___vue_scopeId__,
  actionsheet___vue_module_identifier__
)


/* harmony default export */ var _vux_2_9_4_vux_src_components_actionsheet = (actionsheet_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/badge/index.vue
//
//
//
//

/* harmony default export */ var badge = ({
  name: 'badge',
  props: {
    text: [String, Number]
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/badge/index.vue
//
//
//
//

/* harmony default export */ var components_badge = ({
  name: 'badge',
  props: {
    text: [String, Number]
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-1cfb6c47","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/badge/index.vue
var badge_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:['vux-badge', {'vux-badge-dot': typeof _vm.text === 'undefined', 'vux-badge-single': typeof _vm.text !== 'undefined' && _vm.text.toString().length === 1}],domProps:{"textContent":_vm._s(_vm.text)}})}
var badge_staticRenderFns = []
var badge_esExports = { render: badge_render, staticRenderFns: badge_staticRenderFns }
/* harmony default export */ var src_components_badge = (badge_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/badge/index.vue
function badge_injectStyle (ssrContext) {
  __webpack_require__("bwpr")
}
var badge_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var badge___vue_template_functional__ = false
/* styles */
var badge___vue_styles__ = badge_injectStyle
/* scopeId */
var badge___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var badge___vue_module_identifier__ = null
var badge_Component = badge_normalizeComponent(
  components_badge,
  src_components_badge,
  badge___vue_template_functional__,
  badge___vue_styles__,
  badge___vue_scopeId__,
  badge___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_badge = (badge_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vuex@2.5.0@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("HVJf");

// EXTERNAL MODULE: ./node_modules/_vue-multiple-back-top@1.0.2@vue-multiple-back-top/lib/back-top.js
var back_top = __webpack_require__("RDYZ");
var back_top_default = /*#__PURE__*/__webpack_require__.n(back_top);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







/* harmony default export */ var App = ({
  name: 'app',
  data: function () {
    return {
      badgeText: ''
    };
  },
  components: {
    XHeader: _vux_2_9_4_vux_src_components_x_header,
    Actionsheet: _vux_2_9_4_vux_src_components_actionsheet,
    VmBackTop: back_top_default.a,
    Badge: _vux_2_9_4_vux_src_components_badge
  },
  computed: _extends({}, Object(vuex_esm["b" /* mapGetters */])(['moreMenus']), Object(vuex_esm["d" /* mapState */])(['topics', 'loginedMoreMenus', 'unLoginedMoreMenus', 'isLogined']), {
    isShowMoreMenus: {
      get: function () {
        return this.$store.state.isShowMoreMenus;
      },
      set: function (navl) {

        this.$store.commit('mutationIsShowMoreMenus', navl);
      }
    }
  }),

  created: function () {

    var loginStatus = window.localStorage.getItem('loginStatus');

    if (loginStatus) {

      this.mutationLogin();
      this.mutationLoginname(window.localStorage.getItem('loginname'));
      this.mutationAccessToken(window.localStorage.getItem('accesstoken'));
      this.mutationAuthorId(window.localStorage.getItem('author_id'));
    }

    if (this.isLogined) {

      this.getUnreadMsgCount();

      var app = this;
      window.setInterval(function () {
        app.getUnreadMsgCount();
      }, 1 * 60 * 3000);
    }
  },
  methods: _extends({}, Object(vuex_esm["c" /* mapMutations */])(['mutationLogin', 'mutationLoginname', 'mutationAccessToken', 'mutationAuthorId']), {
    routetohome() {
      this.$router.replace('/');
    },

    showMoreMenus() {

      this.isShowMoreMenus = true;
    },

    handleClickMoreMenu(menukey, menuitem) {

      this.$router.push('/' + menukey);
    },

    getUnreadMsgCount: function () {
      var app = this;
      this.$http.get('/message/count', {

        params: {
          accesstoken: this.$store.state.accesstoken
        }
      }).then(function (response) {

        if (response.data.success) {
          //如果请求成功，response是请求成功的数据
          app.badgeText = response.data.data;
        }
      });
    }
  })
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
var App__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







/* harmony default export */ var selectortype_script_index_0_src_App = ({
  name: 'app',
  data: function () {
    return {
      badgeText: ''
    };
  },
  components: {
    XHeader: _vux_2_9_4_vux_src_components_x_header,
    Actionsheet: _vux_2_9_4_vux_src_components_actionsheet,
    VmBackTop: back_top_default.a,
    Badge: _vux_2_9_4_vux_src_components_badge
  },
  computed: App__extends({}, Object(vuex_esm["b" /* mapGetters */])(['moreMenus']), Object(vuex_esm["d" /* mapState */])(['topics', 'loginedMoreMenus', 'unLoginedMoreMenus', 'isLogined']), {
    isShowMoreMenus: {
      get: function () {
        return this.$store.state.isShowMoreMenus;
      },
      set: function (navl) {

        this.$store.commit('mutationIsShowMoreMenus', navl);
      }
    }
  }),

  created: function () {

    var loginStatus = window.localStorage.getItem('loginStatus');

    if (loginStatus) {

      this.mutationLogin();
      this.mutationLoginname(window.localStorage.getItem('loginname'));
      this.mutationAccessToken(window.localStorage.getItem('accesstoken'));
      this.mutationAuthorId(window.localStorage.getItem('author_id'));
    }

    if (this.isLogined) {

      this.getUnreadMsgCount();

      var app = this;
      window.setInterval(function () {
        app.getUnreadMsgCount();
      }, 1 * 60 * 3000);
    }
  },
  methods: App__extends({}, Object(vuex_esm["c" /* mapMutations */])(['mutationLogin', 'mutationLoginname', 'mutationAccessToken', 'mutationAuthorId']), {
    routetohome() {
      this.$router.replace('/');
    },

    showMoreMenus() {

      this.isShowMoreMenus = true;
    },

    handleClickMoreMenu(menukey, menuitem) {

      this.$router.push('/' + menukey);
    },

    getUnreadMsgCount: function () {
      var app = this;
      this.$http.get('/message/count', {

        params: {
          accesstoken: this.$store.state.accesstoken
        }
      }).then(function (response) {

        if (response.data.success) {
          //如果请求成功，response是请求成功的数据
          app.badgeText = response.data.data;
        }
      });
    }
  })
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-bfaeee9c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('x-header',{staticStyle:{"background-color":"#444"},on:{"on-click-more":_vm.showMoreMenus,"on-click-title":_vm.routetohome}},[_vm._v("\n    cnode移动端社区\n    "),_vm._v(" "),_c('div',{attrs:{"slot":"right"},on:{"click":_vm.showMoreMenus},slot:"right"},[_c('a',{staticClass:"vux-header-more"}),_vm._v(" "),(_vm.badgeText)?_c('badge',{staticStyle:{"margin-left":"3px"},attrs:{"text":_vm.badgeText}}):_vm._e()],1)]),_vm._v(" "),_c('router-view'),_vm._v(" "),_c('actionsheet',{attrs:{"menus":_vm.moreMenus},on:{"on-click-menu":_vm.handleClickMoreMenu},model:{value:(_vm.isShowMoreMenus),callback:function ($$v) {_vm.isShowMoreMenus=$$v},expression:"isShowMoreMenus"}}),_vm._v(" "),_c('vm-back-top')],1)}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (App_esExports);
// CONCATENATED MODULE: ./src/App.vue
function App_injectStyle (ssrContext) {
  __webpack_require__("YThD")
}
var App_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  selectortype_script_index_0_src_App,
  selectortype_template_index_0_src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vue-router@3.0.6@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("3XdE");

// EXTERNAL MODULE: ./node_modules/_vux@2.9.4@vux/src/libs/clean-style.js
var clean_style = __webpack_require__("gjrJ");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/group/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var group = ({
  name: 'group',
  methods: {
    cleanStyle: clean_style["a" /* default */]
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/group/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_group = ({
  name: 'group',
  methods: {
    cleanStyle: clean_style["a" /* default */]
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-9cbac0a2","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/group/index.vue
var group_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.title)?_c('div',{staticClass:"weui-cells__title",style:(_vm.cleanStyle({
    color: _vm.titleColor
  })),domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_vm._t("title"),_vm._v(" "),_c('div',{staticClass:"weui-cells",class:{
    'vux-no-group-title': !_vm.title
  },style:(_vm.cleanStyle({
    marginTop: typeof _vm.gutter === 'number' ? (_vm.gutter + 'px') : _vm.gutter
  }))},[_vm._t("after-title"),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),(_vm.footerTitle)?_c('div',{staticClass:"weui-cells__title vux-group-footer-title",style:(_vm.cleanStyle({
    color: _vm.footerTitleColor
  })),domProps:{"innerHTML":_vm._s(_vm.footerTitle)}}):_vm._e()],2)}
var group_staticRenderFns = []
var group_esExports = { render: group_render, staticRenderFns: group_staticRenderFns }
/* harmony default export */ var src_components_group = (group_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/group/index.vue
function group_injectStyle (ssrContext) {
  __webpack_require__("FQ65")
}
var group_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var group___vue_template_functional__ = false
/* styles */
var group___vue_styles__ = group_injectStyle
/* scopeId */
var group___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var group___vue_module_identifier__ = null
var group_Component = group_normalizeComponent(
  components_group,
  src_components_group,
  group___vue_template_functional__,
  group___vue_styles__,
  group___vue_scopeId__,
  group___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_group = (group_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/inline-desc/index.vue
//
//
//
//

/* harmony default export */ var inline_desc = ({
  name: 'inline-desc'
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/inline-desc/index.vue
//
//
//
//

/* harmony default export */ var components_inline_desc = ({
  name: 'inline-desc'
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-0f36864e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/inline-desc/index.vue
var inline_desc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"vux-label-desc"},[_vm._t("default")],2)}
var inline_desc_staticRenderFns = []
var inline_desc_esExports = { render: inline_desc_render, staticRenderFns: inline_desc_staticRenderFns }
/* harmony default export */ var src_components_inline_desc = (inline_desc_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/inline-desc/index.vue
function inline_desc_injectStyle (ssrContext) {
  __webpack_require__("2KK6")
}
var inline_desc_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var inline_desc___vue_template_functional__ = false
/* styles */
var inline_desc___vue_styles__ = inline_desc_injectStyle
/* scopeId */
var inline_desc___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var inline_desc___vue_module_identifier__ = null
var inline_desc_Component = inline_desc_normalizeComponent(
  components_inline_desc,
  src_components_inline_desc,
  inline_desc___vue_template_functional__,
  inline_desc___vue_styles__,
  inline_desc___vue_scopeId__,
  inline_desc___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_inline_desc = (inline_desc_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vux@2.9.4@vux/src/libs/router.js
var router = __webpack_require__("adVT");

// EXTERNAL MODULE: ./node_modules/_vux@2.9.4@vux/src/components/cell/props.js
var props = __webpack_require__("VOBM");

// EXTERNAL MODULE: ./node_modules/_vux@2.9.4@vux/src/libs/get-parent-prop.js
var get_parent_prop = __webpack_require__("L2it");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/cell/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var cell = ({
  name: 'cell',
  components: {
    InlineDesc: _vux_2_9_4_vux_src_components_inline_desc
  },
  props: Object(props["a" /* default */])(),
  created() {
    /* istanbul ignore if */
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
    /* istanbul ignore if */
    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },
  computed: {
    labelStyles() {
      return Object(clean_style["a" /* default */])({
        width: Object(get_parent_prop["a" /* default */])(this, 'labelWidth'),
        textAlign: Object(get_parent_prop["a" /* default */])(this, 'labelAlign'),
        marginRight: Object(get_parent_prop["a" /* default */])(this, 'labelMarginRight')
      });
    },
    valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent && (this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify')
      };
    },
    style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick() {
      /* istanbul ignore next */
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/cell/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var components_cell = ({
  name: 'cell',
  components: {
    InlineDesc: _vux_2_9_4_vux_src_components_inline_desc
  },
  props: Object(props["a" /* default */])(),
  created() {
    /* istanbul ignore if */
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
    /* istanbul ignore if */
    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },
  computed: {
    labelStyles() {
      return Object(clean_style["a" /* default */])({
        width: Object(get_parent_prop["a" /* default */])(this, 'labelWidth'),
        textAlign: Object(get_parent_prop["a" /* default */])(this, 'labelAlign'),
        marginRight: Object(get_parent_prop["a" /* default */])(this, 'labelMarginRight')
      });
    },
    valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent && (this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify')
      };
    },
    style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick() {
      /* istanbul ignore next */
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-086b37c1","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/cell/index.vue
var cell_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell",class:{
    'vux-tap-active': _vm.isLink || !!_vm.link,
    'weui-cell_access': _vm.isLink || !!_vm.link,
    'vux-cell-no-border-intent': !_vm.borderIntent,
    'vux-cell-disabled': _vm.disabled
  },style:(_vm.style),on:{"click":_vm.onClick}},[_c('div',{staticClass:"weui-cell__hd"},[_vm._t("icon")],2),_vm._v(" "),_c('div',{staticClass:"vux-cell-bd",class:{'vux-cell-primary': _vm.primary === 'title' && _vm.valueAlign !== 'left'}},[_c('p',[(_vm.title || _vm.hasTitleSlot)?_c('label',{staticClass:"vux-label",class:_vm.labelClass,style:(_vm.labelStyles)},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2):_vm._e(),_vm._v(" "),_vm._t("after-title")],2),_vm._v(" "),_c('inline-desc',[_vm._t("inline-desc",[_vm._v(_vm._s(_vm.inlineDesc))])],2)],1),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft",class:_vm.valueClass},[_vm._t("value"),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.value))]),_vm._v(" "),(_vm.isLoading)?_c('i',{staticClass:"weui-loading"}):_vm._e()],2),_vm._v(" "),_vm._t("child")],2)}
var cell_staticRenderFns = []
var cell_esExports = { render: cell_render, staticRenderFns: cell_staticRenderFns }
/* harmony default export */ var src_components_cell = (cell_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/cell/index.vue
function cell_injectStyle (ssrContext) {
  __webpack_require__("6F6W")
}
var cell_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var cell___vue_template_functional__ = false
/* styles */
var cell___vue_styles__ = cell_injectStyle
/* scopeId */
var cell___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var cell___vue_module_identifier__ = null
var cell_Component = cell_normalizeComponent(
  components_cell,
  src_components_cell,
  cell___vue_template_functional__,
  cell___vue_styles__,
  cell___vue_scopeId__,
  cell___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_cell = (cell_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vux-xscroll@3.1.12@vux-xscroll/build/cmd/xscroll.js
var xscroll = __webpack_require__("pGA8");
var xscroll_default = /*#__PURE__*/__webpack_require__.n(xscroll);

// EXTERNAL MODULE: ./node_modules/_vux-xscroll@3.1.12@vux-xscroll/build/cmd/plugins/pulldown.js
var pulldown = __webpack_require__("n7TE");
var pulldown_default = /*#__PURE__*/__webpack_require__.n(pulldown);

// EXTERNAL MODULE: ./node_modules/_vux-xscroll@3.1.12@vux-xscroll/build/cmd/plugins/pullup.js
var pullup = __webpack_require__("gTEw");
var pullup_default = /*#__PURE__*/__webpack_require__.n(pullup);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/scroller/index.vue
//
//
//
//
//
//
//
//
//
//






const pulldownDefaultConfig = () => ({
  content: 'Pull Down To Refresh',
  height: 60,
  autoRefresh: false,
  downContent: 'Pull Down To Refresh',
  upContent: 'Release To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pulldown-'
});

const pullupDefaultConfig = () => ({
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
});

/* harmony default export */ var scroller = ({
  name: 'scroller',
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          pulldownStatus: '',
          pullupStatus: ''
        };
      }
    },
    height: String,
    lockX: Boolean,
    lockY: Boolean,
    scrollbarX: Boolean,
    scrollbarY: Boolean,
    bounce: {
      type: Boolean,
      default: true
    },
    useOriginScroll: {
      type: Boolean,
      default: false
    },
    useTransition: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    stopPropagation: Boolean,
    boundryCheck: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    usePulldown: {
      type: Boolean,
      default: false
    },
    usePullup: {
      type: Boolean,
      default: false
    },
    /**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */
    pulldownConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    pullupConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    enableHorizontalSwiping: {
      type: Boolean,
      default: false
    },
    scrollBottomOffset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    reset(scrollPosition, duration, easing) {
      if (scrollPosition) {
        if (typeof scrollPosition.left !== 'undefined') {
          this._xscroll.scrollLeft(scrollPosition.left, duration, easing);
        }
        if (typeof scrollPosition.top !== 'undefined') {
          this._xscroll.scrollTop(scrollPosition.top, duration, easing);
        }
      }
      this._xscroll && this._xscroll.resetSize();
    },
    donePulldown() {
      this.pulldown.reset(() => {
        // repaint
        this.reset();
      });
      this.currentValue.pulldownStatus = 'default';
    },
    disablePullup() {
      // this._xscroll.unplug(this.pullup)
      this.pullup.stop();
      this.currentValue.pullupStatus = 'disabled';
    },
    enablePullup() {
      this.currentValue.pullupStatus = 'default';
      this.pullup.restart();
    },
    donePullup() {
      this.pullup.complete();
      this.reset();
      this.currentValue.pullupStatus = 'default';
    },
    getStyles() {
      let height = this.height;
      if (!this.height && this.$el && !this.$el.style.height && this.lockX) {
        height = `${document.documentElement.clientHeight}px`;
        this.reset();
      }

      if (this.height && this.height.indexOf('-') === 0) {
        height = `${document.documentElement.clientHeight + parseInt(this.height)}px`;
      }
      this.styles = {
        height: `${height}`
      };
    }
  },
  created() {
    if (!this.value) {
      this.currentValue = {
        pulldownStatus: '',
        pullupStatus: ''
      };
    } else {
      this.currentValue = this.value;
    }
    this.handleOrientationchange = () => {
      setTimeout(() => {
        this.reset();
      }, 100);
    };
  },
  data() {
    return {
      currentValue: {},
      styles: {}
    };
  },
  watch: {
    currentValue: {
      handler: function (val) {
        this.$emit('input', pure(val));
      },
      deep: true
    },
    height() {
      this.getStyles();
    },
    value: {
      handler: function (val) {
        if (val.pullupStatus === 'default' && this.currentValue.pullupStatus !== 'default') {
          this.donePullup();
        }
        if (val.pulldownStatus === 'default' && this.currentValue.pulldownStatus !== 'default') {
          this.donePulldown();
        }
        if (val.pullupStatus === 'disabled' && this.currentValue.pullupStatus !== 'disabled') {
          this.disablePullup();
        }
        if (val.pullupStatus === 'enabled' && this.currentValue.pullupStatus === 'disabled') {
          this.enablePullup();
        }
      },
      deep: true
    }
  },
  mounted() {
    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(() => {
      this.$el.setAttribute('id', `vux-scroller-${this.uuid}`);
      let content = null;
      if (this.$slots.default) {
        content = this.$slots.default[0].elm;
      }
      if (!content) {
        throw new Error('no content is found');
      }

      this._xscroll = new xscroll_default.a({
        renderTo: `#vux-scroller-${this.uuid}`,
        lockX: this.lockX,
        lockY: this.lockY,
        scrollbarX: this.scrollbarX,
        scrollbarY: this.scrollbarY,
        content: content,
        bounce: this.bounce,
        useOriginScroll: this.useOriginScroll,
        useTransition: this.useTransition,
        preventDefault: this.preventDefault,
        boundryCheck: this.boundryCheck,
        gpuAcceleration: this.gpuAcceleration,
        stopPropagation: this.stopPropagation
      });

      this._xscroll.on('scroll', () => {
        if (this._xscroll) {
          const top = this._xscroll.getScrollTop();
          this.$emit('on-scroll', {
            top: top,
            left: this._xscroll.getScrollLeft()
          });
          const containerHeight = this._xscroll.containerHeight;
          const scrollHeight = this._xscroll.height;
          if (top >= containerHeight - scrollHeight - this.scrollBottomOffset) {
            this.$emit('on-scroll-bottom');
          }
        }
      });

      if (this.usePulldown) {
        // if use slot=pulldown
        let container = this.$slots.pulldown;
        let config = _object_assign_4_1_1_object_assign_default()(pulldownDefaultConfig(), this.pulldownConfig);
        if (container) {
          config.container = container[0].elm;
        }
        this.pulldown = new pulldown_default.a(config);
        this._xscroll.plug(this.pulldown);
        this.pulldown.on('loading', e => {
          this.$emit('on-pulldown-loading', this.uuid);
        });
        this.pulldown.on('statuschange', val => {
          this.currentValue.pulldownStatus = val.newVal;
        });
      }

      if (this.usePullup) {
        // if use slot=pullup
        let container = this.$slots.pullup;
        let config = _object_assign_4_1_1_object_assign_default()(pullupDefaultConfig(), this.pullupConfig);

        if (container) {
          config.container = container[0].elm;
        }
        this.pullup = new pullup_default.a(config);
        this._xscroll.plug(this.pullup);
        this.pullup.on('loading', e => {
          this.$emit('on-pullup-loading', this.uuid);
        });
        this.pullup.on('statuschange', val => {
          this.currentValue.pullupStatus = val.newVal;
        });
      }

      if (this.enableHorizontalSwiping) {
        this._xscroll.on('panstart', e => {
          if (e.direction === 2 || e.direction === 4) {
            e.preventDefault();
            if (this.scrollbarY) {
              this._xscroll.userConfig.scrollbarY = false;
            }
            this._xscroll.userConfig.lockY = true;
          }
        });
        this._xscroll.on('panend', () => {
          if (this.scrollbarY) {
            this._xscroll.userConfig.scrollbarY = true;
          }
          this._xscroll.userConfig.lockY = false;
        });
      }

      this._xscroll.render();
      window.addEventListener('orientationchange', this.handleOrientationchange, false);
    });
    this.getStyles();
  },
  updated() {
    this.reset();
  },
  destroyed() {
    if (this.pullup) {
      this._xscroll.unplug(this.pullup);
      this.pullup.pluginDestructor();
    }
    if (this.pulldown) {
      this._xscroll.unplug(this.pulldown);
      this.pulldown.pluginDestructor();
    }
    window.removeEventListener('orientationchange', this.handleOrientationchange, false);
    this._xscroll.destroy();
    this._xscroll = null;
  }
});

function pure(obj) {
  return JSON.parse(JSON.stringify(obj));
}
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/scroller/index.vue
//
//
//
//
//
//
//
//
//
//






const scroller_pulldownDefaultConfig = () => ({
  content: 'Pull Down To Refresh',
  height: 60,
  autoRefresh: false,
  downContent: 'Pull Down To Refresh',
  upContent: 'Release To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pulldown-'
});

const scroller_pullupDefaultConfig = () => ({
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
});

/* harmony default export */ var components_scroller = ({
  name: 'scroller',
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          pulldownStatus: '',
          pullupStatus: ''
        };
      }
    },
    height: String,
    lockX: Boolean,
    lockY: Boolean,
    scrollbarX: Boolean,
    scrollbarY: Boolean,
    bounce: {
      type: Boolean,
      default: true
    },
    useOriginScroll: {
      type: Boolean,
      default: false
    },
    useTransition: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    stopPropagation: Boolean,
    boundryCheck: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    usePulldown: {
      type: Boolean,
      default: false
    },
    usePullup: {
      type: Boolean,
      default: false
    },
    /**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */
    pulldownConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    pullupConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    enableHorizontalSwiping: {
      type: Boolean,
      default: false
    },
    scrollBottomOffset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    reset(scrollPosition, duration, easing) {
      if (scrollPosition) {
        if (typeof scrollPosition.left !== 'undefined') {
          this._xscroll.scrollLeft(scrollPosition.left, duration, easing);
        }
        if (typeof scrollPosition.top !== 'undefined') {
          this._xscroll.scrollTop(scrollPosition.top, duration, easing);
        }
      }
      this._xscroll && this._xscroll.resetSize();
    },
    donePulldown() {
      this.pulldown.reset(() => {
        // repaint
        this.reset();
      });
      this.currentValue.pulldownStatus = 'default';
    },
    disablePullup() {
      // this._xscroll.unplug(this.pullup)
      this.pullup.stop();
      this.currentValue.pullupStatus = 'disabled';
    },
    enablePullup() {
      this.currentValue.pullupStatus = 'default';
      this.pullup.restart();
    },
    donePullup() {
      this.pullup.complete();
      this.reset();
      this.currentValue.pullupStatus = 'default';
    },
    getStyles() {
      let height = this.height;
      if (!this.height && this.$el && !this.$el.style.height && this.lockX) {
        height = `${document.documentElement.clientHeight}px`;
        this.reset();
      }

      if (this.height && this.height.indexOf('-') === 0) {
        height = `${document.documentElement.clientHeight + parseInt(this.height)}px`;
      }
      this.styles = {
        height: `${height}`
      };
    }
  },
  created() {
    if (!this.value) {
      this.currentValue = {
        pulldownStatus: '',
        pullupStatus: ''
      };
    } else {
      this.currentValue = this.value;
    }
    this.handleOrientationchange = () => {
      setTimeout(() => {
        this.reset();
      }, 100);
    };
  },
  data() {
    return {
      currentValue: {},
      styles: {}
    };
  },
  watch: {
    currentValue: {
      handler: function (val) {
        this.$emit('input', scroller_pure(val));
      },
      deep: true
    },
    height() {
      this.getStyles();
    },
    value: {
      handler: function (val) {
        if (val.pullupStatus === 'default' && this.currentValue.pullupStatus !== 'default') {
          this.donePullup();
        }
        if (val.pulldownStatus === 'default' && this.currentValue.pulldownStatus !== 'default') {
          this.donePulldown();
        }
        if (val.pullupStatus === 'disabled' && this.currentValue.pullupStatus !== 'disabled') {
          this.disablePullup();
        }
        if (val.pullupStatus === 'enabled' && this.currentValue.pullupStatus === 'disabled') {
          this.enablePullup();
        }
      },
      deep: true
    }
  },
  mounted() {
    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(() => {
      this.$el.setAttribute('id', `vux-scroller-${this.uuid}`);
      let content = null;
      if (this.$slots.default) {
        content = this.$slots.default[0].elm;
      }
      if (!content) {
        throw new Error('no content is found');
      }

      this._xscroll = new xscroll_default.a({
        renderTo: `#vux-scroller-${this.uuid}`,
        lockX: this.lockX,
        lockY: this.lockY,
        scrollbarX: this.scrollbarX,
        scrollbarY: this.scrollbarY,
        content: content,
        bounce: this.bounce,
        useOriginScroll: this.useOriginScroll,
        useTransition: this.useTransition,
        preventDefault: this.preventDefault,
        boundryCheck: this.boundryCheck,
        gpuAcceleration: this.gpuAcceleration,
        stopPropagation: this.stopPropagation
      });

      this._xscroll.on('scroll', () => {
        if (this._xscroll) {
          const top = this._xscroll.getScrollTop();
          this.$emit('on-scroll', {
            top: top,
            left: this._xscroll.getScrollLeft()
          });
          const containerHeight = this._xscroll.containerHeight;
          const scrollHeight = this._xscroll.height;
          if (top >= containerHeight - scrollHeight - this.scrollBottomOffset) {
            this.$emit('on-scroll-bottom');
          }
        }
      });

      if (this.usePulldown) {
        // if use slot=pulldown
        let container = this.$slots.pulldown;
        let config = _object_assign_4_1_1_object_assign_default()(scroller_pulldownDefaultConfig(), this.pulldownConfig);
        if (container) {
          config.container = container[0].elm;
        }
        this.pulldown = new pulldown_default.a(config);
        this._xscroll.plug(this.pulldown);
        this.pulldown.on('loading', e => {
          this.$emit('on-pulldown-loading', this.uuid);
        });
        this.pulldown.on('statuschange', val => {
          this.currentValue.pulldownStatus = val.newVal;
        });
      }

      if (this.usePullup) {
        // if use slot=pullup
        let container = this.$slots.pullup;
        let config = _object_assign_4_1_1_object_assign_default()(scroller_pullupDefaultConfig(), this.pullupConfig);

        if (container) {
          config.container = container[0].elm;
        }
        this.pullup = new pullup_default.a(config);
        this._xscroll.plug(this.pullup);
        this.pullup.on('loading', e => {
          this.$emit('on-pullup-loading', this.uuid);
        });
        this.pullup.on('statuschange', val => {
          this.currentValue.pullupStatus = val.newVal;
        });
      }

      if (this.enableHorizontalSwiping) {
        this._xscroll.on('panstart', e => {
          if (e.direction === 2 || e.direction === 4) {
            e.preventDefault();
            if (this.scrollbarY) {
              this._xscroll.userConfig.scrollbarY = false;
            }
            this._xscroll.userConfig.lockY = true;
          }
        });
        this._xscroll.on('panend', () => {
          if (this.scrollbarY) {
            this._xscroll.userConfig.scrollbarY = true;
          }
          this._xscroll.userConfig.lockY = false;
        });
      }

      this._xscroll.render();
      window.addEventListener('orientationchange', this.handleOrientationchange, false);
    });
    this.getStyles();
  },
  updated() {
    this.reset();
  },
  destroyed() {
    if (this.pullup) {
      this._xscroll.unplug(this.pullup);
      this.pullup.pluginDestructor();
    }
    if (this.pulldown) {
      this._xscroll.unplug(this.pulldown);
      this.pulldown.pluginDestructor();
    }
    window.removeEventListener('orientationchange', this.handleOrientationchange, false);
    this._xscroll.destroy();
    this._xscroll = null;
  }
});

function scroller_pure(obj) {
  return JSON.parse(JSON.stringify(obj));
}
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-2fc1253b","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/scroller/index.vue
var scroller_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.styles)},[_c('div',{staticClass:"xs-container"},[_vm._t("default"),_vm._v(" "),_vm._t("pulldown"),_vm._v(" "),_vm._t("pullup")],2)])}
var scroller_staticRenderFns = []
var scroller_esExports = { render: scroller_render, staticRenderFns: scroller_staticRenderFns }
/* harmony default export */ var src_components_scroller = (scroller_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/scroller/index.vue
function scroller_injectStyle (ssrContext) {
  __webpack_require__("fFCe")
}
var scroller_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var scroller___vue_template_functional__ = false
/* styles */
var scroller___vue_styles__ = scroller_injectStyle
/* scopeId */
var scroller___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var scroller___vue_module_identifier__ = null
var scroller_Component = scroller_normalizeComponent(
  components_scroller,
  src_components_scroller,
  scroller___vue_template_functional__,
  scroller___vue_styles__,
  scroller___vue_scopeId__,
  scroller___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_scroller = (scroller_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vux@2.9.4@vux/src/mixins/multi-items.js
var multi_items = __webpack_require__("/Bf6");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/tab/tab.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab = ({
  name: 'tab',
  mixins: [multi_items["b" /* parentMixin */]],
  mounted() {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true;
      }, 0);
    });
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator(val) {
        return ['bottom', 'top'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    barLeft() {
      if (this.hasReady) {
        const nav = this.$refs.nav;
        const count = this.scrollable ? nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${this.currentIndex * (100 / count)}%`;
      }
    },
    barRight() {
      if (this.hasReady) {
        const nav = this.$refs.nav;
        const count = this.scrollable ? nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${(count - this.currentIndex - 1) * (100 / count)}%`;
      }
    },
    // when prop:custom-bar-width
    innerBarStyle() {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        background: this.barActiveColor || this.activeColor
      };
    },
    // end
    barStyle() {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.background = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.background = 'transparent'; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass() {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    },
    scrollable() {
      return this.number > this.scrollThreshold;
    }
  },
  watch: {
    currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
      this.hasReady && this.scrollToActiveTab();
    }
  },
  data() {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  },
  methods: {
    scrollToActiveTab() {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return;
      }
      const currentIndexTab = this.$children[this.currentIndex].$el;
      let count = 0;
      // scroll animation
      const step = () => {
        const scrollDuration = 15;
        const nav = this.$refs.nav;
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration;
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/tab/tab.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab_tab = ({
  name: 'tab',
  mixins: [multi_items["b" /* parentMixin */]],
  mounted() {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true;
      }, 0);
    });
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator(val) {
        return ['bottom', 'top'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    barLeft() {
      if (this.hasReady) {
        const nav = this.$refs.nav;
        const count = this.scrollable ? nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${this.currentIndex * (100 / count)}%`;
      }
    },
    barRight() {
      if (this.hasReady) {
        const nav = this.$refs.nav;
        const count = this.scrollable ? nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${(count - this.currentIndex - 1) * (100 / count)}%`;
      }
    },
    // when prop:custom-bar-width
    innerBarStyle() {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        background: this.barActiveColor || this.activeColor
      };
    },
    // end
    barStyle() {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.background = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.background = 'transparent'; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass() {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    },
    scrollable() {
      return this.number > this.scrollThreshold;
    }
  },
  watch: {
    currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
      this.hasReady && this.scrollToActiveTab();
    }
  },
  data() {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  },
  methods: {
    scrollToActiveTab() {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return;
      }
      const currentIndexTab = this.$children[this.currentIndex].$el;
      let count = 0;
      // scroll animation
      const step = () => {
        const scrollDuration = 15;
        const nav = this.$refs.nav;
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration;
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-5dbc8d5c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/tab/tab.vue
var tab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-tab-wrap",class:_vm.barPosition === 'top' ? 'vux-tab-bar-top' : ''},[_c('div',{staticClass:"vux-tab-container"},[_c('div',{ref:"nav",staticClass:"vux-tab",class:[{'vux-tab-no-animate': !_vm.animate},{ scrollable: _vm.scrollable }]},[_vm._t("default"),_vm._v(" "),(_vm.animate)?_c('div',{staticClass:"vux-tab-ink-bar",class:_vm.barClass,style:(_vm.barStyle)},[(_vm.customBarWidth)?_c('span',{staticClass:"vux-tab-bar-inner",style:(_vm.innerBarStyle)}):_vm._e()]):_vm._e()],2)])])}
var tab_staticRenderFns = []
var tab_esExports = { render: tab_render, staticRenderFns: tab_staticRenderFns }
/* harmony default export */ var components_tab_tab = (tab_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/tab/tab.vue
function tab_injectStyle (ssrContext) {
  __webpack_require__("kF+h")
}
var tab_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var tab___vue_template_functional__ = false
/* styles */
var tab___vue_styles__ = tab_injectStyle
/* scopeId */
var tab___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tab___vue_module_identifier__ = null
var tab_Component = tab_normalizeComponent(
  tab_tab,
  components_tab_tab,
  tab___vue_template_functional__,
  tab___vue_styles__,
  tab___vue_scopeId__,
  tab___vue_module_identifier__
)

/* harmony default export */ var src_components_tab_tab = (tab_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/tab/tab-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab_item = ({
  name: 'tab-item',
  mixins: [multi_items["a" /* childMixin */]],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/tab/tab-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab_tab_item = ({
  name: 'tab-item',
  mixins: [multi_items["a" /* childMixin */]],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-1b6a630e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/tab/tab-item.vue
var tab_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-tab-item",class:[_vm.currentSelected ? _vm.activeClass : '', {
    'vux-tab-selected': _vm.currentSelected,
    'vux-tab-disabled': _vm.disabled 
  }],style:(_vm.style),on:{"click":_vm.onItemClick}},[_vm._t("default"),_vm._v(" "),(typeof _vm.badgeLabel !== 'undefined' && _vm.badgeLabel !== '')?_c('span',{staticClass:"vux-tab-item-badge",style:({
      background: _vm.badgeBackground,
      color: _vm.badgeColor
    })},[_vm._v("\n  "+_vm._s(_vm.badgeLabel))]):_vm._e()],2)}
var tab_item_staticRenderFns = []
var tab_item_esExports = { render: tab_item_render, staticRenderFns: tab_item_staticRenderFns }
/* harmony default export */ var components_tab_tab_item = (tab_item_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/tab/tab-item.vue
var tab_item_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var tab_item___vue_template_functional__ = false
/* styles */
var tab_item___vue_styles__ = null
/* scopeId */
var tab_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tab_item___vue_module_identifier__ = null
var tab_item_Component = tab_item_normalizeComponent(
  tab_tab_item,
  components_tab_tab_item,
  tab_item___vue_template_functional__,
  tab_item___vue_styles__,
  tab_item___vue_scopeId__,
  tab_item___vue_module_identifier__
)

/* harmony default export */ var src_components_tab_tab_item = (tab_item_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/TopicList.vue
var TopicList__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








/* harmony default export */ var TopicList = ({
  name: 'topiclist',
  props: ['name'],
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    Cell: _vux_2_9_4_vux_src_components_cell,
    Scroller: _vux_2_9_4_vux_src_components_scroller,
    Tab: src_components_tab_tab,
    TabItem: src_components_tab_tab_item
  },
  computed: TopicList__extends({}, Object(vuex_esm["d" /* mapState */])(['topics'])),
  data: function () {
    return {
      lists: [],

      page: 1,

      limit: 15,

      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },

      pulldownConfig: {
        content: '下拉刷新',
        downContent: '松开刷新数据',
        upContent: '下拉刷新数据',
        loadingContent: '加载中...'
      }
    };
  },
  methods: {

    getDescByTab(tab) {
      return this.$store.getters.getTopicDescByTab(tab);
    },

    onItemClick(index) {

      this.$router.push({ path: '/topiclist/' + this.topics[index].name });
    },

    freshData: function () {
      var app = this;
      this.$http.get('/topics', {
        params: {
          tab: this.name,
          page: 1, //初始化页数为1
          limit: this.limit
        }
      }).then(function (response) {
        if (response.data.success) {
          app.lists = response.data.data;

          app.$refs.pullup.donePulldown();
        }
      });
    },

    loadMoreData() {
      var app = this;
      this.page = this.page + 1;

      this.$http.get('./topics', {
        params: {
          tab: this.name,
          page: this.page,
          limit: this.limit
        }
      }).then(function (response) {
        if (response.data.success) {

          for (var i = 0; i < response.data.data.length; i++) {
            app.lists.push(response.data.data[i]);
          }

          app.$refs.pullup.donePullup();
        }
      });
    }
  },

  beforeRouteEnter: function (to, from, next) {

    next(function (vm) {

      vm.$http.get('./topics', {
        params: {
          tab: to.params.name,
          page: vm.page,
          limit: vm.limit
        }
      }).then(function (response) {

        if (response.data.success) {
          vm.lists = response.data.data;
        }
      });
    });
  },

  beforeRouteUpdate: function (to, from, next) {

    var app = this;

    this.$http.get('/topics', {
      params: {
        tab: to.params.name,
        page: this.page,
        limit: this.limit
      }
    }).then(function (response) {
      if (response.data.success) {

        app.lists = response.data.data;
      }
    });

    next();
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/TopicList.vue
var components_TopicList__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








/* harmony default export */ var components_TopicList = ({
  name: 'topiclist',
  props: ['name'],
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    Cell: _vux_2_9_4_vux_src_components_cell,
    Scroller: _vux_2_9_4_vux_src_components_scroller,
    Tab: src_components_tab_tab,
    TabItem: src_components_tab_tab_item
  },
  computed: components_TopicList__extends({}, Object(vuex_esm["d" /* mapState */])(['topics'])),
  data: function () {
    return {
      lists: [],

      page: 1,

      limit: 15,

      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },

      pulldownConfig: {
        content: '下拉刷新',
        downContent: '松开刷新数据',
        upContent: '下拉刷新数据',
        loadingContent: '加载中...'
      }
    };
  },
  methods: {

    getDescByTab(tab) {
      return this.$store.getters.getTopicDescByTab(tab);
    },

    onItemClick(index) {

      this.$router.push({ path: '/topiclist/' + this.topics[index].name });
    },

    freshData: function () {
      var app = this;
      this.$http.get('/topics', {
        params: {
          tab: this.name,
          page: 1, //初始化页数为1
          limit: this.limit
        }
      }).then(function (response) {
        if (response.data.success) {
          app.lists = response.data.data;

          app.$refs.pullup.donePulldown();
        }
      });
    },

    loadMoreData() {
      var app = this;
      this.page = this.page + 1;

      this.$http.get('./topics', {
        params: {
          tab: this.name,
          page: this.page,
          limit: this.limit
        }
      }).then(function (response) {
        if (response.data.success) {

          for (var i = 0; i < response.data.data.length; i++) {
            app.lists.push(response.data.data[i]);
          }

          app.$refs.pullup.donePullup();
        }
      });
    }
  },

  beforeRouteEnter: function (to, from, next) {

    next(function (vm) {

      vm.$http.get('./topics', {
        params: {
          tab: to.params.name,
          page: vm.page,
          limit: vm.limit
        }
      }).then(function (response) {

        if (response.data.success) {
          vm.lists = response.data.data;
        }
      });
    });
  },

  beforeRouteUpdate: function (to, from, next) {

    var app = this;

    this.$http.get('/topics', {
      params: {
        tab: to.params.name,
        page: this.page,
        limit: this.limit
      }
    }).then(function (response) {
      if (response.data.success) {

        app.lists = response.data.data;
      }
    });

    next();
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-73e8ddda","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/TopicList.vue
var TopicList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('tab',{attrs:{"line-width":2,"scroll-threshold":6,"active-color":"#FF00FF","bar-active-color":"#00BFFF"}},_vm._l((_vm.topics),function(item,index){return _c('tab-item',{key:index,attrs:{"selected":_vm.$route.path == '/topiclist/' + item.name,"to":'/topiclist/' + item.name},on:{"on-item-click":_vm.onItemClick}},[_vm._v(_vm._s(item.desc))])}),1),_vm._v(" "),_c('scroller',{ref:"pullup",attrs:{"lock-x":"","scrollbarY":"","use-pullup":"","pullup-config":_vm.pullupConfig,"use-pulldown":"","pulldown-config":_vm.pulldownConfig,"height":"-46"},on:{"on-pullup-loading":_vm.loadMoreData,"on-pulldown-loading":_vm.freshData}},[_c('div',[_c('group',_vm._l((_vm.lists),function(item,index){return _c('cell',{key:index,attrs:{"link":'/topic/' + item.id}},[_c('span',{staticClass:"cell_title",attrs:{"slot":"title"},slot:"title"},[_c('span',{staticClass:"reply_count"},[_vm._v(_vm._s(item.reply_count))]),_vm._v(" /\r\n                    "),_c('span',{staticClass:"visit_count"},[_vm._v(_vm._s(item.visit_count))]),_vm._v(" "),(item.top)?_c('span',{staticClass:"top"},[_vm._v("置顶")]):_vm._e(),_vm._v(" "),(_vm.$route.path == '/topiclist/all')?_c('span',{staticClass:"tab"},[_vm._v(_vm._s(_vm.getDescByTab(item.tab)))]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"title"},[_vm._v(_vm._s(item.title))])]),_vm._v(" "),_c('span',{staticClass:"cell_author_avatar",attrs:{"slot":"icon"},slot:"icon"},[_c('img',{attrs:{"src":item.author.avatar_url}})])])}),1)],1)])],1)}
var TopicList_staticRenderFns = []
var TopicList_esExports = { render: TopicList_render, staticRenderFns: TopicList_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_TopicList = (TopicList_esExports);
// CONCATENATED MODULE: ./src/components/TopicList.vue
function TopicList_injectStyle (ssrContext) {
  __webpack_require__("Z2k1")
}
var TopicList_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var TopicList___vue_template_functional__ = false
/* styles */
var TopicList___vue_styles__ = TopicList_injectStyle
/* scopeId */
var TopicList___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TopicList___vue_module_identifier__ = null
var TopicList_Component = TopicList_normalizeComponent(
  components_TopicList,
  selectortype_template_index_0_src_components_TopicList,
  TopicList___vue_template_functional__,
  TopicList___vue_styles__,
  TopicList___vue_scopeId__,
  TopicList___vue_module_identifier__
)

/* harmony default export */ var src_components_TopicList = (TopicList_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/cell-box/index.vue
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var cell_box = ({
  name: 'cell-box',
  props: {
    isLink: Boolean,
    link: [String, Object],
    borderIntent: {
      type: Boolean,
      default: true
    },
    noFlex: Boolean,
    alignItems: String
  },
  computed: {
    style() {
      if (this.alignItems) {
        return {
          'align-items': this.alignItems
        };
      }
    },
    className() {
      return {
        'vux-tap-active': this.isLink || !!this.link,
        'weui-cell_access': this.isLink || !!this.link,
        'vux-cell-no-border-intent': !this.borderIntent
      };
    }
  },
  methods: {
    onClick() {
      this.link && Object(router["a" /* go */])(this.link, this.$router);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/cell-box/index.vue
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_cell_box = ({
  name: 'cell-box',
  props: {
    isLink: Boolean,
    link: [String, Object],
    borderIntent: {
      type: Boolean,
      default: true
    },
    noFlex: Boolean,
    alignItems: String
  },
  computed: {
    style() {
      if (this.alignItems) {
        return {
          'align-items': this.alignItems
        };
      }
    },
    className() {
      return {
        'vux-tap-active': this.isLink || !!this.link,
        'weui-cell_access': this.isLink || !!this.link,
        'vux-cell-no-border-intent': !this.borderIntent
      };
    }
  },
  methods: {
    onClick() {
      this.link && Object(router["a" /* go */])(this.link, this.$router);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-dd846348","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/cell-box/index.vue
var cell_box_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-cell-box weui-cell",class:_vm.className,style:(_vm.style),on:{"click":_vm.onClick}},[_vm._t("default")],2)}
var cell_box_staticRenderFns = []
var cell_box_esExports = { render: cell_box_render, staticRenderFns: cell_box_staticRenderFns }
/* harmony default export */ var src_components_cell_box = (cell_box_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/cell-box/index.vue
function cell_box_injectStyle (ssrContext) {
  __webpack_require__("Mv6D")
}
var cell_box_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var cell_box___vue_template_functional__ = false
/* styles */
var cell_box___vue_styles__ = cell_box_injectStyle
/* scopeId */
var cell_box___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var cell_box___vue_module_identifier__ = null
var cell_box_Component = cell_box_normalizeComponent(
  components_cell_box,
  src_components_cell_box,
  cell_box___vue_template_functional__,
  cell_box___vue_styles__,
  cell_box___vue_scopeId__,
  cell_box___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_cell_box = (cell_box_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/flexbox/flexbox.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var flexbox = ({
  name: 'flexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles() {
      const styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      };
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/flexbox/flexbox.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var flexbox_flexbox = ({
  name: 'flexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles() {
      const styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      };
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-c65b5366","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/flexbox/flexbox.vue
var flexbox_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-flexbox",class:{
  'vux-flex-col': _vm.orient === 'vertical',
  'vux-flex-row': _vm.orient === 'horizontal'
},style:(_vm.styles)},[_vm._t("default")],2)}
var flexbox_staticRenderFns = []
var flexbox_esExports = { render: flexbox_render, staticRenderFns: flexbox_staticRenderFns }
/* harmony default export */ var components_flexbox_flexbox = (flexbox_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/flexbox/flexbox.vue
function flexbox_injectStyle (ssrContext) {
  __webpack_require__("kf5t")
}
var flexbox_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var flexbox___vue_template_functional__ = false
/* styles */
var flexbox___vue_styles__ = flexbox_injectStyle
/* scopeId */
var flexbox___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var flexbox___vue_module_identifier__ = null
var flexbox_Component = flexbox_normalizeComponent(
  flexbox_flexbox,
  components_flexbox_flexbox,
  flexbox___vue_template_functional__,
  flexbox___vue_styles__,
  flexbox___vue_scopeId__,
  flexbox___vue_module_identifier__
)

/* harmony default export */ var src_components_flexbox_flexbox = (flexbox_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/flexbox/flexbox-item.vue
//
//
//
//
//
//

const prefixList = ['-moz-box-', '-webkit-box-', ''];

/* harmony default export */ var flexbox_item = ({
  name: 'flexbox-item',
  props: {
    span: [Number, String],
    order: [Number, String]
  },
  beforeMount() {
    this.bodyWidth = document.documentElement.offsetWidth;
  },
  methods: {
    buildWidth(width) {
      if (typeof width === 'number') {
        if (width < 1) {
          return width;
        } else {
          return width / 12;
        }
      } else if (typeof width === 'string') {
        return width.replace('px', '') / this.bodyWidth;
      }
    }
  },
  computed: {
    style() {
      let styles = {};
      let marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop';

      if (this.$parent.gutter * 1 !== 0) {
        styles[marginName] = `${this.$parent.gutter}px`;
      }

      if (this.span) {
        for (let i = 0; i < prefixList.length; i++) {
          styles[`${prefixList[i]}flex`] = `0 0 ${this.buildWidth(this.span) * 100}%`;
        }
      }
      if (typeof this.order !== 'undefined') {
        styles.order = this.order;
      }
      return styles;
    }
  },
  data() {
    return {
      bodyWidth: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/flexbox/flexbox-item.vue
//
//
//
//
//
//

const flexbox_item_prefixList = ['-moz-box-', '-webkit-box-', ''];

/* harmony default export */ var flexbox_flexbox_item = ({
  name: 'flexbox-item',
  props: {
    span: [Number, String],
    order: [Number, String]
  },
  beforeMount() {
    this.bodyWidth = document.documentElement.offsetWidth;
  },
  methods: {
    buildWidth(width) {
      if (typeof width === 'number') {
        if (width < 1) {
          return width;
        } else {
          return width / 12;
        }
      } else if (typeof width === 'string') {
        return width.replace('px', '') / this.bodyWidth;
      }
    }
  },
  computed: {
    style() {
      let styles = {};
      let marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop';

      if (this.$parent.gutter * 1 !== 0) {
        styles[marginName] = `${this.$parent.gutter}px`;
      }

      if (this.span) {
        for (let i = 0; i < flexbox_item_prefixList.length; i++) {
          styles[`${flexbox_item_prefixList[i]}flex`] = `0 0 ${this.buildWidth(this.span) * 100}%`;
        }
      }
      if (typeof this.order !== 'undefined') {
        styles.order = this.order;
      }
      return styles;
    }
  },
  data() {
    return {
      bodyWidth: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-8d62c4e0","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/flexbox/flexbox-item.vue
var flexbox_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-flexbox-item",style:(_vm.style)},[_vm._t("default")],2)}
var flexbox_item_staticRenderFns = []
var flexbox_item_esExports = { render: flexbox_item_render, staticRenderFns: flexbox_item_staticRenderFns }
/* harmony default export */ var components_flexbox_flexbox_item = (flexbox_item_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/flexbox/flexbox-item.vue
var flexbox_item_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var flexbox_item___vue_template_functional__ = false
/* styles */
var flexbox_item___vue_styles__ = null
/* scopeId */
var flexbox_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var flexbox_item___vue_module_identifier__ = null
var flexbox_item_Component = flexbox_item_normalizeComponent(
  flexbox_flexbox_item,
  components_flexbox_flexbox_item,
  flexbox_item___vue_template_functional__,
  flexbox_item___vue_styles__,
  flexbox_item___vue_scopeId__,
  flexbox_item___vue_module_identifier__
)

/* harmony default export */ var src_components_flexbox_flexbox_item = (flexbox_item_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/wechat-emotion/index.vue
//
//
//
//

// gif https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif
// whole https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif
// http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch.2x278965.png
// http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch_active.2x278965.png
const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'];

/* harmony default export */ var wechat_emotion = ({
  name: 'wechat-emotion',
  mounted() {
    const name = this.$el.innerHTML;
    this.index = list.indexOf(name);
    this.backgroundPositionX = -this.index * 24;
    let imgHTML = '';
    if (!this.isGif) {
      imgHTML = `<span class="vux-static-emotion" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif) ${this.backgroundPositionX}px 0;"></span>`;
    } else {
      imgHTML = `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${this.index}.gif">`;
    }
    this.$nextTick(() => {
      this.$el.innerHTML = imgHTML;
    });
  },
  props: {
    isGif: Boolean
  },
  data() {
    return {
      src: '',
      backgroundPositionX: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/wechat-emotion/index.vue
//
//
//
//

// gif https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif
// whole https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif
// http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch.2x278965.png
// http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch_active.2x278965.png
const wechat_emotion_list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'];

/* harmony default export */ var components_wechat_emotion = ({
  name: 'wechat-emotion',
  mounted() {
    const name = this.$el.innerHTML;
    this.index = wechat_emotion_list.indexOf(name);
    this.backgroundPositionX = -this.index * 24;
    let imgHTML = '';
    if (!this.isGif) {
      imgHTML = `<span class="vux-static-emotion" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif) ${this.backgroundPositionX}px 0;"></span>`;
    } else {
      imgHTML = `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${this.index}.gif">`;
    }
    this.$nextTick(() => {
      this.$el.innerHTML = imgHTML;
    });
  },
  props: {
    isGif: Boolean
  },
  data() {
    return {
      src: '',
      backgroundPositionX: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-7ac8a2e6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/wechat-emotion/index.vue
var wechat_emotion_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-emotion"},[_vm._t("default")],2)}
var wechat_emotion_staticRenderFns = []
var wechat_emotion_esExports = { render: wechat_emotion_render, staticRenderFns: wechat_emotion_staticRenderFns }
/* harmony default export */ var src_components_wechat_emotion = (wechat_emotion_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/wechat-emotion/index.vue
function wechat_emotion_injectStyle (ssrContext) {
  __webpack_require__("ls8F")
}
var wechat_emotion_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var wechat_emotion___vue_template_functional__ = false
/* styles */
var wechat_emotion___vue_styles__ = wechat_emotion_injectStyle
/* scopeId */
var wechat_emotion___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var wechat_emotion___vue_module_identifier__ = null
var wechat_emotion_Component = wechat_emotion_normalizeComponent(
  components_wechat_emotion,
  src_components_wechat_emotion,
  wechat_emotion___vue_template_functional__,
  wechat_emotion___vue_styles__,
  wechat_emotion___vue_scopeId__,
  wechat_emotion___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_wechat_emotion = (wechat_emotion_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vux@2.9.4@vux/src/libs/base.js + 1 modules
var base = __webpack_require__("p7Ev");

// EXTERNAL MODULE: ./node_modules/_autosize@3.0.21@autosize/dist/autosize.js
var autosize = __webpack_require__("K2BN");
var autosize_default = /*#__PURE__*/__webpack_require__.n(autosize);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-textarea/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // prop.autosize

/* harmony default export */ var x_textarea = ({
  name: 'x-textarea',
  minxins: [base["a" /* default */]],
  mounted() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    // prop.autosize
    this.$nextTick(() => {
      if (this.autosize) {
        this.bindAutosize();
      }
    });
    // prop.autosize
  },
  components: {
    InlineDesc: _vux_2_9_4_vux_src_components_inline_desc
  },
  props: {
    title: String,
    inlineDesc: String,
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    autosize: Boolean // prop.autosize
  },
  created() {
    this.currentValue = this.value;
  },
  watch: {
    // prop.autosize
    autosize(val) {
      this.unbindAutosize();
      if (val) {
        this.bindAutosize();
      }
    },
    // prop.autosize
    value(val) {
      this.currentValue = val;
    },
    currentValue(newVal) {
      if (this.max && newVal) {
        let len = newVal.replace(/\n/g, 'aa').length;
        if (len > this.max) {
          let newLines = newVal.match(/\n/g).length;
          this.currentValue = newVal.slice(0, this.max - newLines);
          this.$nextTick(() => {
            if (this.autosize) {
              this.updateAutosize();
            }
          });
        }
      }
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    }
  },
  data() {
    return {
      hasRestrictedLabel: false,
      currentValue: ''
    };
  },
  computed: {
    count() {
      let len = 0;
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'aa').length;
      }
      return len > this.max ? this.max : len;
    },
    textareaStyle() {
      if (this.height) {
        return {
          height: `${this.height}px`
        };
      }
    },
    labelStyles() {
      const { $parent = {} } = this;
      return {
        width: $parent.labelWidth || this.labelWidth + 'em',
        textAlign: $parent.labelAlign,
        marginRight: $parent.labelMarginRight
      };
    },
    labelWidth() {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
    },
    labelClass() {
      if (!this.$parent) return {};
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    updateAutosize() {
      autosize_default.a.update(this.$refs.textarea);
    },
    // prop.autosize
    bindAutosize() {
      autosize_default()(this.$refs.textarea);
    },
    unbindAutosize() {
      autosize_default.a.destroy(this.$refs.textarea);
    },
    // prop.autosize
    focus() {
      this.$refs.textarea.focus();
    }
  },
  // prop.autosize
  beforeDestroy() {
    this.unbindAutosize();
  }
  // prop.autosize
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-textarea/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // prop.autosize

/* harmony default export */ var components_x_textarea = ({
  name: 'x-textarea',
  minxins: [base["a" /* default */]],
  mounted() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    // prop.autosize
    this.$nextTick(() => {
      if (this.autosize) {
        this.bindAutosize();
      }
    });
    // prop.autosize
  },
  components: {
    InlineDesc: _vux_2_9_4_vux_src_components_inline_desc
  },
  props: {
    title: String,
    inlineDesc: String,
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    autosize: Boolean // prop.autosize
  },
  created() {
    this.currentValue = this.value;
  },
  watch: {
    // prop.autosize
    autosize(val) {
      this.unbindAutosize();
      if (val) {
        this.bindAutosize();
      }
    },
    // prop.autosize
    value(val) {
      this.currentValue = val;
    },
    currentValue(newVal) {
      if (this.max && newVal) {
        let len = newVal.replace(/\n/g, 'aa').length;
        if (len > this.max) {
          let newLines = newVal.match(/\n/g).length;
          this.currentValue = newVal.slice(0, this.max - newLines);
          this.$nextTick(() => {
            if (this.autosize) {
              this.updateAutosize();
            }
          });
        }
      }
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    }
  },
  data() {
    return {
      hasRestrictedLabel: false,
      currentValue: ''
    };
  },
  computed: {
    count() {
      let len = 0;
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'aa').length;
      }
      return len > this.max ? this.max : len;
    },
    textareaStyle() {
      if (this.height) {
        return {
          height: `${this.height}px`
        };
      }
    },
    labelStyles() {
      const { $parent = {} } = this;
      return {
        width: $parent.labelWidth || this.labelWidth + 'em',
        textAlign: $parent.labelAlign,
        marginRight: $parent.labelMarginRight
      };
    },
    labelWidth() {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
    },
    labelClass() {
      if (!this.$parent) return {};
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    updateAutosize() {
      autosize_default.a.update(this.$refs.textarea);
    },
    // prop.autosize
    bindAutosize() {
      autosize_default()(this.$refs.textarea);
    },
    unbindAutosize() {
      autosize_default.a.destroy(this.$refs.textarea);
    },
    // prop.autosize
    focus() {
      this.$refs.textarea.focus();
    }
  },
  // prop.autosize
  beforeDestroy() {
    this.unbindAutosize();
  }
  // prop.autosize
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-6e755d96","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-textarea/index.vue
var x_textarea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell vux-x-textarea"},[_c('div',{staticClass:"weui-cell__hd"},[(_vm.hasRestrictedLabel)?_c('div',{style:(_vm.labelStyles)},[_vm._t("restricted-label")],2):_vm._e(),_vm._v(" "),_vm._t("label",[(_vm.title)?_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:({width: _vm.$parent.labelWidth || (_vm.labelWidth + 'em'), textAlign: _vm.$parent.labelAlign, marginRight: _vm.$parent.labelMarginRight}),domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()])],2),_vm._v(" "),_c('div',{staticClass:"weui-cell__bd"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"textarea",staticClass:"weui-textarea",style:(_vm.textareaStyle),attrs:{"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled,"name":_vm.name,"rows":_vm.rows,"cols":_vm.cols,"maxlength":_vm.max},domProps:{"value":(_vm.currentValue)},on:{"focus":function($event){return _vm.$emit('on-focus')},"blur":function($event){return _vm.$emit('on-blur')},"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCounter && _vm.max),expression:"showCounter && max"}],staticClass:"weui-textarea-counter",on:{"click":_vm.focus}},[_c('span',[_vm._v(_vm._s(_vm.count))]),_vm._v("/"+_vm._s(_vm.max)+"\n    ")])])])}
var x_textarea_staticRenderFns = []
var x_textarea_esExports = { render: x_textarea_render, staticRenderFns: x_textarea_staticRenderFns }
/* harmony default export */ var src_components_x_textarea = (x_textarea_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/x-textarea/index.vue
function x_textarea_injectStyle (ssrContext) {
  __webpack_require__("NYDs")
}
var x_textarea_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var x_textarea___vue_template_functional__ = false
/* styles */
var x_textarea___vue_styles__ = x_textarea_injectStyle
/* scopeId */
var x_textarea___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_textarea___vue_module_identifier__ = null
var x_textarea_Component = x_textarea_normalizeComponent(
  components_x_textarea,
  src_components_x_textarea,
  x_textarea___vue_template_functional__,
  x_textarea___vue_styles__,
  x_textarea___vue_scopeId__,
  x_textarea___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_x_textarea = (x_textarea_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-button/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var x_button = ({
  name: 'x-button',
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function (val) {
        return val.length === 2;
      }
    }
  },
  methods: {
    onClick() {
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  computed: {
    noBorder() {
      return Array.isArray(this.gradients);
    },
    buttonStyle() {
      if (this.gradients) {
        return {
          background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.gradients[1]})`,
          color: '#FFFFFF'
        };
      }
    },
    classes() {
      return [{
        'weui-btn_disabled': !this.plain && this.disabled,
        'weui-btn_plain-disabled': this.plain && this.disabled,
        'weui-btn_mini': this.mini,
        'vux-x-button-no-border': this.noBorder
      }, !this.plain ? `weui-btn_${this.type}` : '', this.plain ? `weui-btn_plain-${this.type}` : '', this.showLoading ? `weui-btn_loading` : ''];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-button/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_x_button = ({
  name: 'x-button',
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function (val) {
        return val.length === 2;
      }
    }
  },
  methods: {
    onClick() {
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  computed: {
    noBorder() {
      return Array.isArray(this.gradients);
    },
    buttonStyle() {
      if (this.gradients) {
        return {
          background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.gradients[1]})`,
          color: '#FFFFFF'
        };
      }
    },
    classes() {
      return [{
        'weui-btn_disabled': !this.plain && this.disabled,
        'weui-btn_plain-disabled': this.plain && this.disabled,
        'weui-btn_mini': this.mini,
        'vux-x-button-no-border': this.noBorder
      }, !this.plain ? `weui-btn_${this.type}` : '', this.plain ? `weui-btn_plain-${this.type}` : '', this.showLoading ? `weui-btn_loading` : ''];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-8f9b9714","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-button/index.vue
var x_button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"weui-btn",class:_vm.classes,style:(_vm.buttonStyle),attrs:{"disabled":_vm.disabled,"type":_vm.actionType},on:{"click":_vm.onClick}},[(_vm.showLoading)?_c('i',{staticClass:"weui-loading"}):_vm._e(),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var x_button_staticRenderFns = []
var x_button_esExports = { render: x_button_render, staticRenderFns: x_button_staticRenderFns }
/* harmony default export */ var src_components_x_button = (x_button_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/x-button/index.vue
function x_button_injectStyle (ssrContext) {
  __webpack_require__("HemK")
}
var x_button_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var x_button___vue_template_functional__ = false
/* styles */
var x_button___vue_styles__ = x_button_injectStyle
/* scopeId */
var x_button___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_button___vue_module_identifier__ = null
var x_button_Component = x_button_normalizeComponent(
  components_x_button,
  src_components_x_button,
  x_button___vue_template_functional__,
  x_button___vue_styles__,
  x_button___vue_scopeId__,
  x_button___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_x_button = (x_button_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Topic.vue
var Topic__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










/* harmony default export */ var Topic = ({
  name: 'topic',
  props: ['id'],
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    CellBox: _vux_2_9_4_vux_src_components_cell_box,
    Flexbox: src_components_flexbox_flexbox,
    FlexboxItem: src_components_flexbox_flexbox_item,
    WechatEmotion: _vux_2_9_4_vux_src_components_wechat_emotion,
    XTextarea: _vux_2_9_4_vux_src_components_x_textarea,
    XButton: _vux_2_9_4_vux_src_components_x_button
  },
  data: function () {
    return {
      topic: null,
      replyContent: ''
    };
  },
  computed: Topic__extends({}, Object(vuex_esm["d" /* mapState */])(['isLogined'])),
  methods: {

    addreply: function (replyTab) {

      console.log('评论发表成功');
      this.replyContent = '';
    },

    collect: function () {
      var app = this;
      this.$http.post('/topic_collect/collect', {
        accesstoken: this.$store.state.accesstoken,
        topic_id: this.topic.id
      }).then(function (response) {

        if (response.data && response.data.success) {

          app.topic.is_collect = true;
        }
      });
    },

    decollect: function () {
      var app = this;
      this.$http.post('/topic_collect/de_collect', {
        accesstoken: this.$store.state.accesstoken,
        topic_id: this.topic.id
      }).then(function (response) {
        //捕获一下响应消息

        if (response.data && response.data.success) {
          app.topic.is_collect = false;
        }
      });
    }
  },
  beforeRouteEnter: function (to, from, next) {
    next(function (vm) {

      vm.$http.get('/topic/' + to.params.id, {
        params: {
          accesstoken: vm.$store.state.accesstoken
        }
      }).then(function (response) {

        vm.topic = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function (to, from, next) {
    var app = this;
    this.$http.get('/topic/' + to.params.id, {
      params: {
        accesstoken: vm.$store.state.accesstoken
      }
    }).then(function (response) {

      app.topic = response.data.data;
    });
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Topic.vue
var components_Topic__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










/* harmony default export */ var components_Topic = ({
  name: 'topic',
  props: ['id'],
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    CellBox: _vux_2_9_4_vux_src_components_cell_box,
    Flexbox: src_components_flexbox_flexbox,
    FlexboxItem: src_components_flexbox_flexbox_item,
    WechatEmotion: _vux_2_9_4_vux_src_components_wechat_emotion,
    XTextarea: _vux_2_9_4_vux_src_components_x_textarea,
    XButton: _vux_2_9_4_vux_src_components_x_button
  },
  data: function () {
    return {
      topic: null,
      replyContent: ''
    };
  },
  computed: components_Topic__extends({}, Object(vuex_esm["d" /* mapState */])(['isLogined'])),
  methods: {

    addreply: function (replyTab) {

      console.log('评论发表成功');
      this.replyContent = '';
    },

    collect: function () {
      var app = this;
      this.$http.post('/topic_collect/collect', {
        accesstoken: this.$store.state.accesstoken,
        topic_id: this.topic.id
      }).then(function (response) {

        if (response.data && response.data.success) {

          app.topic.is_collect = true;
        }
      });
    },

    decollect: function () {
      var app = this;
      this.$http.post('/topic_collect/de_collect', {
        accesstoken: this.$store.state.accesstoken,
        topic_id: this.topic.id
      }).then(function (response) {
        //捕获一下响应消息

        if (response.data && response.data.success) {
          app.topic.is_collect = false;
        }
      });
    }
  },
  beforeRouteEnter: function (to, from, next) {
    next(function (vm) {

      vm.$http.get('/topic/' + to.params.id, {
        params: {
          accesstoken: vm.$store.state.accesstoken
        }
      }).then(function (response) {

        vm.topic = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function (to, from, next) {
    var app = this;
    this.$http.get('/topic/' + to.params.id, {
      params: {
        accesstoken: vm.$store.state.accesstoken
      }
    }).then(function (response) {

      app.topic = response.data.data;
    });
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-99829ef0","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Topic.vue
var Topic_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.topic)?_c('div',[_c('article',{staticClass:"weui-article"},[_c('h1',[_vm._v("\n            "+_vm._s(_vm.topic.title)+"\n            "),(_vm.topic.is_collect == false)?_c('x-button',{attrs:{"mini":true,"type":"primary"},nativeOn:{"click":function($event){return _vm.collect($event)}}},[_vm._v("收藏")]):_c('x-button',{attrs:{"mini":true},nativeOn:{"click":function($event){return _vm.decollect($event)}}},[_vm._v("取消收藏")]),_vm._v(" "),(_vm.topic.author_id == _vm.$store.state.author_id)?_c('x-button',{attrs:{"mini":true,"typs":"primary","link":'/topic/'+_vm.topic.id + '/edit'}},[_vm._v("编辑")]):_vm._e()],1),_vm._v(" "),_c('section',[_c('span',[_vm._v("\n                作者:"),_c('a',{attrs:{"href":'/#/user/' + _vm.topic.author.loginname}},[_vm._v(_vm._s(_vm.topic.author.loginname))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.topic.visit_count)+"次浏览")]),_vm._v(" "),_c('span',[_vm._v("来自 "),_c('a',{attrs:{"href":'/#/topiclist/' + _vm.topic.tab}},[_vm._v(_vm._s(_vm.topic.tab))])])]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('section',{domProps:{"innerHTML":_vm._s(_vm.topic.content)}})]),_vm._v(" "),_c('group',[_c('x-textarea',{attrs:{"placeholder":"评论内容"},model:{value:(_vm.replyContent),callback:function ($$v) {_vm.replyContent=$$v},expression:"replyContent"}})],1),_vm._v(" "),_c('x-button',{attrs:{"mini":true,"type":"primary"},nativeOn:{"click":function($event){return _vm.addreply(1)}}},[_vm._v("回复")]),_vm._v(" "),_c('group',_vm._l((_vm.topic.replies),function(item,index){return _c('cell-box',{key:index},[_c('flexbox',[_c('flexbox-item',{attrs:{"span":1/10}},[_c('img',{staticStyle:{"width":"30px","height":"30px"},attrs:{"src":item.author.avatar_url}})]),_vm._v(" "),_c('flexbox-item',[_c('section',[_c('div',[_c('a',{attrs:{"href":'/#/user/' + item.author.loginname}},[_vm._v(_vm._s(item.author.loginname))]),_vm._v("\n                            "+_vm._s(index+1)+"楼\n                        ")]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(item.content)}})])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":1/6}},[_c('span',[_c('wechat-emotion',{attrs:{"isGif":true}},[_vm._v("强")]),_vm._v("\n                        "+_vm._s(item.ups.length)+"\n                    ")],1),_vm._v(" "),(_vm.isLogined)?_c('span',[_vm._v("\n                        回复\n                    ")]):_vm._e()])],1)],1)}),1)],1):_vm._e()}
var Topic_staticRenderFns = []
var Topic_esExports = { render: Topic_render, staticRenderFns: Topic_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_Topic = (Topic_esExports);
// CONCATENATED MODULE: ./src/components/Topic.vue
function Topic_injectStyle (ssrContext) {
  __webpack_require__("qNFV")
}
var Topic_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var Topic___vue_template_functional__ = false
/* styles */
var Topic___vue_styles__ = Topic_injectStyle
/* scopeId */
var Topic___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Topic___vue_module_identifier__ = null
var Topic_Component = Topic_normalizeComponent(
  components_Topic,
  selectortype_template_index_0_src_components_Topic,
  Topic___vue_template_functional__,
  Topic___vue_styles__,
  Topic___vue_scopeId__,
  Topic___vue_module_identifier__
)

/* harmony default export */ var src_components_Topic = (Topic_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/icon/index.vue
//
//
//
//

/* harmony default export */ var icon = ({
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className() {
      // compatible with old type param
      return `weui-icon weui_icon_${this.type} weui-icon-${this.type.replace(/_/g, '-')}`;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/icon/index.vue
//
//
//
//

/* harmony default export */ var components_icon = ({
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className() {
      // compatible with old type param
      return `weui-icon weui_icon_${this.type} weui-icon-${this.type.replace(/_/g, '-')}`;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-dc7dd078","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/icon/index.vue
var icon_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:[_vm.className, _vm.isMsg ? 'weui-icon_msg' : '']})}
var icon_staticRenderFns = []
var icon_esExports = { render: icon_render, staticRenderFns: icon_staticRenderFns }
/* harmony default export */ var src_components_icon = (icon_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/icon/index.vue
function icon_injectStyle (ssrContext) {
  __webpack_require__("eIHG")
}
var icon_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var icon___vue_template_functional__ = false
/* styles */
var icon___vue_styles__ = icon_injectStyle
/* scopeId */
var icon___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var icon___vue_module_identifier__ = null
var icon_Component = icon_normalizeComponent(
  components_icon,
  src_components_icon,
  icon___vue_template_functional__,
  icon___vue_styles__,
  icon___vue_scopeId__,
  icon___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_icon = (icon_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vux@2.9.4@vux/src/mixins/safari-fix.js
var safari_fix = __webpack_require__("x6d+");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/toast/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var toast = ({
  name: 'toast',
  mixins: [safari_fix["a" /* default */]],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    if (this.value) {
      this.show = true;
    }
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom';
      }
      return 'vux-fade';
    },
    toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      };
    },
    style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' };
      }
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.show = false;
          this.$emit('input', false);
          this.$emit('on-hide');
          this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value(val) {
      this.show = val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/toast/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_toast = ({
  name: 'toast',
  mixins: [safari_fix["a" /* default */]],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    if (this.value) {
      this.show = true;
    }
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom';
      }
      return 'vux-fade';
    },
    toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      };
    },
    style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' };
      }
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.show = false;
          this.$emit('input', false);
          this.$emit('on-hide');
          this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value(val) {
      this.show = val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-1fa4d632","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/toast/index.vue
var toast_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-toast"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowMask && _vm.show),expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),_vm._v(" "),_c('transition',{attrs:{"name":_vm.currentTransition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-toast",class:_vm.toastClass,style:({width: _vm.width})},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.type !== 'text'),expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),_vm._v(" "),(_vm.text)?_c('p',{staticClass:"weui-toast__content",style:(_vm.style),domProps:{"innerHTML":_vm._s(_vm.text)}}):_c('p',{staticClass:"weui-toast__content",style:(_vm.style)},[_vm._t("default")],2)])])],1)}
var toast_staticRenderFns = []
var toast_esExports = { render: toast_render, staticRenderFns: toast_staticRenderFns }
/* harmony default export */ var src_components_toast = (toast_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/toast/index.vue
function toast_injectStyle (ssrContext) {
  __webpack_require__("w+fm")
}
var toast_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var toast___vue_template_functional__ = false
/* styles */
var toast___vue_styles__ = toast_injectStyle
/* scopeId */
var toast___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var toast___vue_module_identifier__ = null
var toast_Component = toast_normalizeComponent(
  components_toast,
  src_components_toast,
  toast___vue_template_functional__,
  toast___vue_styles__,
  toast___vue_scopeId__,
  toast___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_toast = (toast_Component.exports);

// EXTERNAL MODULE: ./node_modules/_validator@9.4.1@validator/lib/isEmail.js
var isEmail = __webpack_require__("Bv05");
var isEmail_default = /*#__PURE__*/__webpack_require__.n(isEmail);

// EXTERNAL MODULE: ./node_modules/_validator@9.4.1@validator/lib/isMobilePhone.js
var isMobilePhone = __webpack_require__("BzUK");
var isMobilePhone_default = /*#__PURE__*/__webpack_require__.n(isMobilePhone);

// EXTERNAL MODULE: ./node_modules/_vux@2.9.4@vux/src/tools/debounce/index.js
var debounce = __webpack_require__("n0S5");

// EXTERNAL MODULE: ./node_modules/_vanilla-masker@1.2.0@vanilla-masker/lib/vanilla-masker.js
var vanilla_masker = __webpack_require__("IFIB");
var vanilla_masker_default = /*#__PURE__*/__webpack_require__.n(vanilla_masker);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-input/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













const validators = {
  'email': {
    fn: isEmail_default.a,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn(str) {
      return isMobilePhone_default()(str, 'zh-CN');
    },
    msg: '手机号码'
  },
  'china-name': {
    fn(str) {
      return str.length >= 2 && str.length <= 6;
    },
    msg: '中文姓名'
  }
};
/* harmony default export */ var x_input = ({
  name: 'x-input',
  created() {
    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;
    /* istanbul ignore if */
    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = Object(debounce["a" /* default */])(() => {
        this.$emit('on-change', this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    window.removeEventListener('resize', this.scrollIntoView);
  },
  mixins: [base["a" /* default */]],
  components: {
    Icon: _vux_2_9_4_vux_src_components_icon,
    InlineDesc: _vux_2_9_4_vux_src_components_inline_desc,
    Toast: _vux_2_9_4_vux_src_components_toast
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles() {
      const { $parent = {} } = this;
      return {
        width: this.labelWidthComputed || $parent.labelWidth || this.labelWidthComputed,
        textAlign: $parent.labelAlign,
        marginRight: $parent.labelMarginRight
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent && (this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify')
      };
    },
    pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed() {
      const width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
    inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  mounted() {
    window.addEventListener('resize', this.scrollIntoView);
  },
  methods: {
    scrollIntoView(time = 0) {
      // alert('scroll into view')
      if (/iphone/i.test(navigator.userAgent)) {
        // return
      }
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        // alert('will scroll')
        setTimeout(() => {
          // alert(this.$refs.input.length)
          this.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue(val) {
      const val1 = this.mask ? vanilla_masker_default.a.toPattern(val, this.mask) : val;
      return val1;
    },
    reset(value = '') {
      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear() {
      this.currentValue = '';
      this.focus();
      this.$emit('on-click-clear-icon');
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    focusHandler($event) {
      this.$emit('on-focus', this.currentValue, $event);
      this.isFocus = true;
      // this.scrollIntoView(500)
      // this.scrollIntoView(5000)
      setTimeout(() => {
        // 因为有1秒的延迟，如果切换了页面，input已经不存在，所以加个判断
        !this.$refs.input || this.$refs.input.scrollIntoViewIfNeeded(false);
        // this.$refs.input.scrollIntoViewIfNeeded()
      }, 1000);
      // $event.target.
    },
    onBlur($event) {
      this.setTouched();
      this.validate();
      this.isFocus = false;
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError() {
      let key = Object.keys(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        const validator = validators[this.isType];
        if (validator) {
          let value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        const validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符哦`;
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符哦`;
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      let willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    },
    // #2810
    _getInputMaskSelection(selection, direction, maskVal, loop) {
      if (!this.mask || loop && direction === 0) {
        return selection;
      }
      if (direction === 0) {
        direction = this.lastDirection;
      }
      if (direction > 0) {
        const maskChar = this.mask.substr(selection - direction, 1);
        if (!maskChar.match(/[9SA]/)) {
          return this._getInputMaskSelection(selection + 1, direction, maskVal, true);
        }
      }
      return selection;
    }
  },
  data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
      isFocus: false
    };
  },
  watch: {
    mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid() {
      this.getError();
    },
    value(val) {
      this.currentValue = val;
    },
    equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue(newVal, oldVal) {
      let selection = null;
      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
      // #2960
      try {
        selection = this.$refs.input.selectionStart;
        let direction = newVal.length - oldVal.length;
        selection = this._getInputMaskSelection(selection, direction, this.maskValue(newVal));
        this.lastDirection = direction;
      } catch (e) {}
      this.$emit('input', this.maskValue(newVal));
      // #2810
      this.$nextTick(() => {
        if (this.$refs.input.selectionStart !== selection) {
          this.$refs.input.selectionStart = selection;
          this.$refs.input.selectionEnd = selection;
        }
        if (this.currentValue !== this.maskValue(newVal)) {
          this.currentValue = this.maskValue(newVal);
        }
      });

      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-input/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













const x_input_validators = {
  'email': {
    fn: isEmail_default.a,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn(str) {
      return isMobilePhone_default()(str, 'zh-CN');
    },
    msg: '手机号码'
  },
  'china-name': {
    fn(str) {
      return str.length >= 2 && str.length <= 6;
    },
    msg: '中文姓名'
  }
};
/* harmony default export */ var components_x_input = ({
  name: 'x-input',
  created() {
    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;
    /* istanbul ignore if */
    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = Object(debounce["a" /* default */])(() => {
        this.$emit('on-change', this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    window.removeEventListener('resize', this.scrollIntoView);
  },
  mixins: [base["a" /* default */]],
  components: {
    Icon: _vux_2_9_4_vux_src_components_icon,
    InlineDesc: _vux_2_9_4_vux_src_components_inline_desc,
    Toast: _vux_2_9_4_vux_src_components_toast
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles() {
      const { $parent = {} } = this;
      return {
        width: this.labelWidthComputed || $parent.labelWidth || this.labelWidthComputed,
        textAlign: $parent.labelAlign,
        marginRight: $parent.labelMarginRight
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent && (this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify')
      };
    },
    pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed() {
      const width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
    inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  mounted() {
    window.addEventListener('resize', this.scrollIntoView);
  },
  methods: {
    scrollIntoView(time = 0) {
      // alert('scroll into view')
      if (/iphone/i.test(navigator.userAgent)) {
        // return
      }
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        // alert('will scroll')
        setTimeout(() => {
          // alert(this.$refs.input.length)
          this.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue(val) {
      const val1 = this.mask ? vanilla_masker_default.a.toPattern(val, this.mask) : val;
      return val1;
    },
    reset(value = '') {
      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear() {
      this.currentValue = '';
      this.focus();
      this.$emit('on-click-clear-icon');
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    focusHandler($event) {
      this.$emit('on-focus', this.currentValue, $event);
      this.isFocus = true;
      // this.scrollIntoView(500)
      // this.scrollIntoView(5000)
      setTimeout(() => {
        // 因为有1秒的延迟，如果切换了页面，input已经不存在，所以加个判断
        !this.$refs.input || this.$refs.input.scrollIntoViewIfNeeded(false);
        // this.$refs.input.scrollIntoViewIfNeeded()
      }, 1000);
      // $event.target.
    },
    onBlur($event) {
      this.setTouched();
      this.validate();
      this.isFocus = false;
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError() {
      let key = Object.keys(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        const validator = x_input_validators[this.isType];
        if (validator) {
          let value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        const validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符哦`;
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符哦`;
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      let willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    },
    // #2810
    _getInputMaskSelection(selection, direction, maskVal, loop) {
      if (!this.mask || loop && direction === 0) {
        return selection;
      }
      if (direction === 0) {
        direction = this.lastDirection;
      }
      if (direction > 0) {
        const maskChar = this.mask.substr(selection - direction, 1);
        if (!maskChar.match(/[9SA]/)) {
          return this._getInputMaskSelection(selection + 1, direction, maskVal, true);
        }
      }
      return selection;
    }
  },
  data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
      isFocus: false
    };
  },
  watch: {
    mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid() {
      this.getError();
    },
    value(val) {
      this.currentValue = val;
    },
    equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue(newVal, oldVal) {
      let selection = null;
      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
      // #2960
      try {
        selection = this.$refs.input.selectionStart;
        let direction = newVal.length - oldVal.length;
        selection = this._getInputMaskSelection(selection, direction, this.maskValue(newVal));
        this.lastDirection = direction;
      } catch (e) {}
      this.$emit('input', this.maskValue(newVal));
      // #2810
      this.$nextTick(() => {
        if (this.$refs.input.selectionStart !== selection) {
          this.$refs.input.selectionStart = selection;
          this.$refs.input.selectionEnd = selection;
        }
        if (this.currentValue !== this.maskValue(newVal)) {
          this.currentValue = this.maskValue(newVal);
        }
      });

      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-06247374","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/x-input/index.vue
var x_input_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-x-input weui-cell",class:{
			'weui-cell_warn': _vm.showWarn,
			'disabled': _vm.disabled,
			'vux-x-input-has-right-full': _vm.hasRightFullHeightSlot
		}},[_c('div',{staticClass:"weui-cell__hd"},[(_vm.hasRestrictedLabel)?_c('div',{style:(_vm.labelStyles)},[_vm._t("restricted-label")],2):_vm._e(),_vm._v(" "),_vm._t("label",[(_vm.title)?_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:({width: _vm.labelWidth || _vm.$parent.labelWidth || _vm.labelWidthComputed, textAlign: _vm.$parent.labelAlign, marginRight: _vm.$parent.labelMarginRight}),attrs:{"for":("vux-x-input-" + _vm.uuid)},domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()])],2),_vm._v(" "),_c('div',{staticClass:"weui-cell__bd weui-cell__primary",class:_vm.placeholderAlign ? ("vux-x-input-placeholder-" + _vm.placeholderAlign) : ''},[(!_vm.type || _vm.type === 'text')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"text","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'number')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"number","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'email')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"email","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'password')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"password","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'tel')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"tel","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft"},[_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasRightFullHeightSlot && !_vm.equalWith && _vm.showClear && _vm.currentValue !== '' && !_vm.readonly && !_vm.disabled && _vm.isFocus),expression:"!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"}],attrs:{"type":"clear"},nativeOn:{"click":function($event){return _vm.clear($event)}}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.showWarn),expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{"type":"warn","title":!_vm.valid ? _vm.firstError : ''},nativeOn:{"click":function($event){return _vm.onClickErrorIcon($event)}}}),_vm._v(" "),(!_vm.novalidate && _vm.hasLengthEqual && _vm.dirty && _vm.equalWith && !_vm.valid)?_c('icon',{staticClass:"vux-input-icon",attrs:{"type":"warn"},nativeOn:{"click":function($event){return _vm.onClickErrorIcon($event)}}}):_vm._e(),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.novalidate && _vm.equalWith && _vm.equalWith === _vm.currentValue && _vm.valid),expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{"type":"success"}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.novalidate && _vm.iconType === 'success'),expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{"type":"success"}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.novalidate && _vm.iconType === 'error'),expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{"type":"warn"}}),_vm._v(" "),_vm._t("right"),_vm._v(" "),(_vm.hasRightFullHeightSlot)?_c('div',{staticClass:"vux-x-input-right-full"},[_vm._t("right-full-height")],2):_vm._e()],2),_vm._v(" "),_c('toast',{attrs:{"type":"text","width":"auto","time":600},model:{value:(_vm.showErrorToast),callback:function ($$v) {_vm.showErrorToast=$$v},expression:"showErrorToast"}},[_vm._v(_vm._s(_vm.firstError))])],1)}
var x_input_staticRenderFns = []
var x_input_esExports = { render: x_input_render, staticRenderFns: x_input_staticRenderFns }
/* harmony default export */ var src_components_x_input = (x_input_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/x-input/index.vue
function x_input_injectStyle (ssrContext) {
  __webpack_require__("pon3")
}
var x_input_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var x_input___vue_template_functional__ = false
/* styles */
var x_input___vue_styles__ = x_input_injectStyle
/* scopeId */
var x_input___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_input___vue_module_identifier__ = null
var x_input_Component = x_input_normalizeComponent(
  components_x_input,
  src_components_x_input,
  x_input___vue_template_functional__,
  x_input___vue_styles__,
  x_input___vue_scopeId__,
  x_input___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_x_input = (x_input_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Login.vue
var Login__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







/* harmony default export */ var Login = ({
  name: 'login',
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    XInput: _vux_2_9_4_vux_src_components_x_input,
    XButton: _vux_2_9_4_vux_src_components_x_button,
    Toast: _vux_2_9_4_vux_src_components_toast
  },
  data: function () {
    return {
      accesstoken: '',
      isShowToast: false,
      toastText: ''
    };
  },
  methods: Login__extends({}, Object(vuex_esm["c" /* mapMutations */])(['mutationLogin', 'mutationLoginname', 'mutationAccessToken', 'mutationAuthorId']), {

    dologin: function () {
      var app = this;

      this.$http.post('/accesstoken', {
        accesstoken: this.accesstoken
      }).then(function (response) {
        //请求成功后的响应


        if (response && response.data && response.data.success) {

          app.mutationLogin();
          app.mutationLoginname(response.data.loginname);
          app.mutationAccessToken(app.accesstoken);
          app.mutationAuthorId(response.data.id);

          window.localStorage.setItem('loginStatus', true);
          window.localStorage.setItem('loginname', response.data.loginname);
          window.localStorage.setItem('accesstoken', app.accesstoken);
          window.localStorage.setItem('author_id', response.data.id);

          app.$router.push('/#/topiclist/' + response.data.loginname);
        }
      }).catch(function (error) {

        app.isShowToast = true;
        app.toastText = error.response.data.error_msg;
      });
    }
  })
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Login.vue
var components_Login__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







/* harmony default export */ var components_Login = ({
  name: 'login',
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    XInput: _vux_2_9_4_vux_src_components_x_input,
    XButton: _vux_2_9_4_vux_src_components_x_button,
    Toast: _vux_2_9_4_vux_src_components_toast
  },
  data: function () {
    return {
      accesstoken: '',
      isShowToast: false,
      toastText: ''
    };
  },
  methods: components_Login__extends({}, Object(vuex_esm["c" /* mapMutations */])(['mutationLogin', 'mutationLoginname', 'mutationAccessToken', 'mutationAuthorId']), {

    dologin: function () {
      var app = this;

      this.$http.post('/accesstoken', {
        accesstoken: this.accesstoken
      }).then(function (response) {
        //请求成功后的响应


        if (response && response.data && response.data.success) {

          app.mutationLogin();
          app.mutationLoginname(response.data.loginname);
          app.mutationAccessToken(app.accesstoken);
          app.mutationAuthorId(response.data.id);

          window.localStorage.setItem('loginStatus', true);
          window.localStorage.setItem('loginname', response.data.loginname);
          window.localStorage.setItem('accesstoken', app.accesstoken);
          window.localStorage.setItem('author_id', response.data.id);

          app.$router.push('/#/topiclist/' + response.data.loginname);
        }
      }).catch(function (error) {

        app.isShowToast = true;
        app.toastText = error.response.data.error_msg;
      });
    }
  })
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-82d41718","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Login.vue
var Login_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v("用户登录")]),_vm._v(" "),_c('group',[_c('x-input',{attrs:{"placeholder":"Access Token"},model:{value:(_vm.accesstoken),callback:function ($$v) {_vm.accesstoken=$$v},expression:"accesstoken"}})],1),_vm._v(" "),_c('div',{staticStyle:{"height":"10px"}}),_vm._v(" "),_c('x-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.dologin($event)}}},[_vm._v("登录")]),_vm._v(" "),_c('toast',{attrs:{"type":"text"},model:{value:(_vm.isShowToast),callback:function ($$v) {_vm.isShowToast=$$v},expression:"isShowToast"}},[_vm._v(_vm._s(_vm.toastText))])],1)}
var Login_staticRenderFns = []
var Login_esExports = { render: Login_render, staticRenderFns: Login_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_Login = (Login_esExports);
// CONCATENATED MODULE: ./src/components/Login.vue
function Login_injectStyle (ssrContext) {
  __webpack_require__("HFrb")
}
var Login_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var Login___vue_template_functional__ = false
/* styles */
var Login___vue_styles__ = Login_injectStyle
/* scopeId */
var Login___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Login___vue_module_identifier__ = null
var Login_Component = Login_normalizeComponent(
  components_Login,
  selectortype_template_index_0_src_components_Login,
  Login___vue_template_functional__,
  Login___vue_styles__,
  Login___vue_scopeId__,
  Login___vue_module_identifier__
)

/* harmony default export */ var src_components_Login = (Login_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Center.vue
//
//
//
//
//
//

/* harmony default export */ var Center = ({
    name: 'center',
    computed: {
        loginname: function () {
            return this.$store.state.loginname;
        }
    },
    created: function () {
        this.$router.replace('/user/' + this.loginname);
    }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Center.vue
//
//
//
//
//
//

/* harmony default export */ var components_Center = ({
    name: 'center',
    computed: {
        loginname: function () {
            return this.$store.state.loginname;
        }
    },
    created: function () {
        this.$router.replace('/user/' + this.loginname);
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-79881e68","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Center.vue
var Center_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Center_staticRenderFns = []
var Center_esExports = { render: Center_render, staticRenderFns: Center_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_Center = (Center_esExports);
// CONCATENATED MODULE: ./src/components/Center.vue
function Center_injectStyle (ssrContext) {
  __webpack_require__("QkNI")
}
var Center_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var Center___vue_template_functional__ = false
/* styles */
var Center___vue_styles__ = Center_injectStyle
/* scopeId */
var Center___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Center___vue_module_identifier__ = null
var Center_Component = Center_normalizeComponent(
  components_Center,
  selectortype_template_index_0_src_components_Center,
  Center___vue_template_functional__,
  Center___vue_styles__,
  Center___vue_scopeId__,
  Center___vue_module_identifier__
)

/* harmony default export */ var src_components_Center = (Center_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/button-tab/button-tab.vue
//
//
//
//
//
//



/* harmony default export */ var button_tab = ({
  name: 'button-tab',
  mixins: [multi_items["b" /* parentMixin */]],
  props: {
    height: Number
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/button-tab/button-tab.vue
//
//
//
//
//
//



/* harmony default export */ var button_tab_button_tab = ({
  name: 'button-tab',
  mixins: [multi_items["b" /* parentMixin */]],
  props: {
    height: Number
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-8db978f8","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/button-tab/button-tab.vue
var button_tab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-button-group"},[_vm._t("default")],2)}
var button_tab_staticRenderFns = []
var button_tab_esExports = { render: button_tab_render, staticRenderFns: button_tab_staticRenderFns }
/* harmony default export */ var components_button_tab_button_tab = (button_tab_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/button-tab/button-tab.vue
function button_tab_injectStyle (ssrContext) {
  __webpack_require__("arLp")
}
var button_tab_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var button_tab___vue_template_functional__ = false
/* styles */
var button_tab___vue_styles__ = button_tab_injectStyle
/* scopeId */
var button_tab___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var button_tab___vue_module_identifier__ = null
var button_tab_Component = button_tab_normalizeComponent(
  button_tab_button_tab,
  components_button_tab_button_tab,
  button_tab___vue_template_functional__,
  button_tab___vue_styles__,
  button_tab___vue_scopeId__,
  button_tab___vue_module_identifier__
)

/* harmony default export */ var src_components_button_tab_button_tab = (button_tab_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/button-tab/button-tab-item.vue
//
//
//
//
//
//



/* harmony default export */ var button_tab_item = ({
  name: 'button-tab-item',
  mixins: [multi_items["a" /* childMixin */]],
  computed: {
    classes() {
      return {
        'vux-button-group-current': this.currentIndex === this.$parent.currentIndex,
        'vux-button-tab-item-first': this.currentIndex === 0,
        'vux-button-tab-item-last': this.currentIndex === this.$parent.$children.length - 1,
        'vux-button-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
      };
    },
    style() {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/button-tab/button-tab-item.vue
//
//
//
//
//
//



/* harmony default export */ var button_tab_button_tab_item = ({
  name: 'button-tab-item',
  mixins: [multi_items["a" /* childMixin */]],
  computed: {
    classes() {
      return {
        'vux-button-group-current': this.currentIndex === this.$parent.currentIndex,
        'vux-button-tab-item-first': this.currentIndex === 0,
        'vux-button-tab-item-last': this.currentIndex === this.$parent.$children.length - 1,
        'vux-button-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
      };
    },
    style() {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-bb05ad76","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/button-tab/button-tab-item.vue
var button_tab_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"vux-button-tab-item",class:_vm.classes,style:(_vm.style),attrs:{"href":"javascript:"},on:{"click":_vm.onItemClick}},[_vm._t("default")],2)}
var button_tab_item_staticRenderFns = []
var button_tab_item_esExports = { render: button_tab_item_render, staticRenderFns: button_tab_item_staticRenderFns }
/* harmony default export */ var components_button_tab_button_tab_item = (button_tab_item_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/button-tab/button-tab-item.vue
var button_tab_item_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var button_tab_item___vue_template_functional__ = false
/* styles */
var button_tab_item___vue_styles__ = null
/* scopeId */
var button_tab_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var button_tab_item___vue_module_identifier__ = null
var button_tab_item_Component = button_tab_item_normalizeComponent(
  button_tab_button_tab_item,
  components_button_tab_button_tab_item,
  button_tab_item___vue_template_functional__,
  button_tab_item___vue_styles__,
  button_tab_item___vue_scopeId__,
  button_tab_item___vue_module_identifier__
)

/* harmony default export */ var src_components_button_tab_button_tab_item = (button_tab_item_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout.vue
//
//
//
//
//
//

/* harmony default export */ var swipeout = ({
  name: 'swipeout'
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout.vue
//
//
//
//
//
//

/* harmony default export */ var swipeout_swipeout = ({
  name: 'swipeout'
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-58f6cfb4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout.vue
var swipeout_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-swipeout"},[_vm._t("default")],2)}
var swipeout_staticRenderFns = []
var swipeout_esExports = { render: swipeout_render, staticRenderFns: swipeout_staticRenderFns }
/* harmony default export */ var components_swipeout_swipeout = (swipeout_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout.vue
function swipeout_injectStyle (ssrContext) {
  __webpack_require__("S2lv")
}
var swipeout_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var swipeout___vue_template_functional__ = false
/* styles */
var swipeout___vue_styles__ = swipeout_injectStyle
/* scopeId */
var swipeout___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var swipeout___vue_module_identifier__ = null
var swipeout_Component = swipeout_normalizeComponent(
  swipeout_swipeout,
  components_swipeout_swipeout,
  swipeout___vue_template_functional__,
  swipeout___vue_styles__,
  swipeout___vue_scopeId__,
  swipeout___vue_module_identifier__
)

/* harmony default export */ var src_components_swipeout_swipeout = (swipeout_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var swipeout_item = ({
  name: 'swipeout-item',
  props: {
    sensitivity: {
      type: Number,
      default: 0
    },
    autoCloseOnButtonClick: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    threshold: {
      type: Number,
      default: 0.3
    },
    underlayColor: String,
    transitionMode: {
      type: String,
      default: 'reveal'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.render();
    });
  },
  methods: {
    render() {
      this.target = this.$refs.content;
      if (this.$slots['left-menu']) {
        this.hasLeftMenu = true;
        this.caculateMenuWidth('left');
      }
      if (this.$slots['right-menu']) {
        this.hasRightMenu = true;
        this.caculateMenuWidth('right');
      }
    },
    caculateMenuWidth(direction) {
      const list = this.$slots[`${direction}-menu`][0].children.filter(one => one.tag);
      let width = 0;
      list.forEach(one => {
        const propsData = one.componentOptions ? one.componentOptions.propsData : {};
        width += propsData.width || 80;
      });
      this[`${direction}MenuWidth`] = width;
    },
    onContentClick() {
      if (this.styles.transform.indexOf('(0px, 0, 0)') === -1) {
        this._setClose(200);
      }
    },
    onItemClick() {
      if (this.autoCloseOnButtonClick) {
        this._setClose();
      }
    },
    start(ev) {
      if (this.disabled || this.isOpen || ev.target.nodeName.toLowerCase() === 'button') {
        return;
      }
      if (this.$parent.$options._componentTag === 'swipeout') {
        const openItems = this.$parent.$children.filter(item => item.$data.styles.transform.indexOf('(0px, 0, 0)') === -1);
        if (openItems.length > 0) {
          openItems.forEach(item => {
            item.setOffset(0, true);
          });
          ev.preventDefault();
          return;
        }
      }
      const touch = ev.touches ? ev.touches[0] : ev;
      this.pageX = touch.pageX;
      this.pageY = touch.pageY;
    },
    move(ev) {
      if (this.disabled) {
        return;
      }
      if (ev.target.nodeName.toLowerCase() === 'button') {
        ev.preventDefault();
        return;
      }
      if (this.pageX === undefined) {
        ev.preventDefault();
        return;
      }

      const touch = ev.touches ? ev.touches[0] : ev;
      this.distX = touch.pageX - this.pageX;
      this.distY = touch.pageY - this.pageY;

      if (!this.direction) {
        this.direction = this.distX > 0 ? 'left' : 'right';
      }

      if (this.direction === 'right' && this.distX > 0 && this.hasRightMenu || this.direction === 'left' && this.distX < 0 && this.hasLeftMenu) {
        this.valid = true;
        ev.preventDefault();
      }

      if (this.valid === undefined) {
        if (this.distX > 0 && this.hasLeftMenu === false) {
          this.valid = false;
        } else if (this.distX < 0 && this.hasRightMenu === false) {
          this.valid = false;
        } else if (Math.abs(this.distX) > this.sensitivity || Math.abs(this.distY) > this.sensitivity) {
          this.valid = Math.abs(this.distX) > Math.abs(this.distY);
        } else {
          ev.preventDefault();
        }
      }

      if (this.valid === true) {
        if (Math.abs(this.distX) <= this.menuWidth) {
          this.setOffset(this.distX, false);
        } else {
          const extra = (Math.abs(this.distX) - this.menuWidth) * 0.5;
          const offset = (this.menuWidth + extra) * (this.distX < 0 ? -1 : 1);
          this.setOffset(offset, false);
        }
        ev.preventDefault();
      }
    },
    end(ev) {
      if (this.disabled) {
        return;
      }
      if (ev.target.nodeName.toLowerCase() === 'button') {
        return;
      }
      if (this.valid === true) {
        if (this.distX < 0 && this.direction === 'right') {
          const threshold = this.threshold <= 1 ? this.rightMenuWidth * this.threshold : this.threshold;

          if (this.distX < -threshold) {
            this.setOffset(-this.rightMenuWidth, true);
            this.$emit('on-open');
            this.isOpen = true;
          } else {
            this._setClose();
          }
        } else if (this.distX > 0 && this.direction === 'left') {
          const threshold = this.threshold <= 1 ? this.leftMenuWidth * this.threshold : this.threshold;

          if (this.distX > threshold) {
            this.setOffset(this.leftMenuWidth, true);
            this.$emit('on-open');
            this.isOpen = true;
          } else {
            this._setClose();
          }
        }
      } else if (this.pageX !== undefined) {}

      this.pageX = this.pageY = this.valid = undefined;
      this.direction = '';
    },
    setOffset(x, animated = false, force) {
      this.isAnimated = animated;
      if (this.disabled && !force) {
        return;
      }
      if (this.direction === 'right' && x > 0 || this.direction === 'left' && x < 0) {
        x = 0;
      }

      if (x === 0) {
        setTimeout(() => {
          this.isOpen = false;
        }, 300);
      }

      if (x < 0 && Math.abs(x) === this.rightMenuWidth) {
        this.distX = -this.rightMenuWidth;
      } else if (x > 0 && Math.abs(x) === this.leftMenuWidth) {
        this.distX = this.leftMenuWidth;
      }
      if (animated && this.target) {
        this.target && this.target.classList.add('vux-swipeout-content-animated');
        var cb = function (self, target) {
          return function () {
            target.classList.remove('vux-swipeout-content-animated');
            self.isAnimated = false;
            target.removeEventListener('webkitTransitionEnd', cb);
            target.removeEventListener('transitionend', cb);
          };
        }(this, this.target);

        this.target.addEventListener('webkitTransitionEnd', cb);
        this.target.addEventListener('transitionend', cb);
      }
      this.styles.transform = 'translate3d(' + x + 'px, 0, 0)';
    },
    _setClose(delay = 0) {
      this.setOffset(0, true);
      this.$emit('on-close');
      if (!delay) {
        this.isOpen = false;
      } else {
        setTimeout(() => {
          this.isOpen = false;
        }, delay);
      }
      this.distX = 0;
    },
    open(position = 'right') {
      this.setOffset(position === 'right' ? -this.rightMenuWidth : this.leftMenuWidth, true, true);
    },
    close() {
      this.setOffset(0, true, true);
    }
  },
  computed: {
    menuWidth() {
      if (!this.hasLeftMenu && this.hasRightMenu) {
        return this.rightMenuWidth;
      }
      if (this.hasLeftMenu && !this.hasRightMenu) {
        return this.leftMenuWidth;
      }
      if (this.hasLeftMenu && this.hasRightMenu) {
        return this.distX < 0 ? this.rightMenuWidth : this.leftMenuWidth;
      }
    },
    buttonBoxStyle() {
      return {
        backgroundColor: this.underlayColor
      };
    },
    leftButtonBoxStyle() {
      let styles = JSON.parse(JSON.stringify(this.buttonBoxStyle));
      if (this.transitionMode === 'follow') {
        let offset = this.styles.transform.indexOf('(0px, 0, 0)') === -1 ? this.leftMenuWidth - this.distX : this.leftMenuWidth;
        styles.transform = `translate3d(-${offset}px, 0, 0)`;
      }
      return styles;
    },
    rightButtonBoxStyle() {
      let styles = JSON.parse(JSON.stringify(this.buttonBoxStyle));
      if (this.transitionMode === 'follow') {
        let offset = this.styles.transform.indexOf('(0px, 0, 0)') === -1 ? this.rightMenuWidth - Math.abs(this.distX) : this.rightMenuWidth;
        if (offset < 0) {
          offset = 0;
        }
        if (this.isAnimated) {
          styles.transition = 'transform 0.2s';
        }
        styles.transform = `translate3d(${offset}px, 0, 0)`;
      }
      return styles;
    }
  },
  data() {
    return {
      pageX: undefined,
      pageY: undefined,
      distX: 0,
      distY: 0,
      hasLeftMenu: false,
      hasRightMenu: false,
      animated: false,
      isAnimated: false,
      isOpen: false,
      styles: {
        transform: 'translate3d(0px, 0, 0)'
      },
      direction: '',
      leftMenuWidth: 160,
      rightMenuWidth: 160
    };
  },
  watch: {
    disabled(newVal, oldVal) {
      if (newVal === true && !oldVal) {
        this.setOffset(0, true, true);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var swipeout_swipeout_item = ({
  name: 'swipeout-item',
  props: {
    sensitivity: {
      type: Number,
      default: 0
    },
    autoCloseOnButtonClick: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    threshold: {
      type: Number,
      default: 0.3
    },
    underlayColor: String,
    transitionMode: {
      type: String,
      default: 'reveal'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.render();
    });
  },
  methods: {
    render() {
      this.target = this.$refs.content;
      if (this.$slots['left-menu']) {
        this.hasLeftMenu = true;
        this.caculateMenuWidth('left');
      }
      if (this.$slots['right-menu']) {
        this.hasRightMenu = true;
        this.caculateMenuWidth('right');
      }
    },
    caculateMenuWidth(direction) {
      const list = this.$slots[`${direction}-menu`][0].children.filter(one => one.tag);
      let width = 0;
      list.forEach(one => {
        const propsData = one.componentOptions ? one.componentOptions.propsData : {};
        width += propsData.width || 80;
      });
      this[`${direction}MenuWidth`] = width;
    },
    onContentClick() {
      if (this.styles.transform.indexOf('(0px, 0, 0)') === -1) {
        this._setClose(200);
      }
    },
    onItemClick() {
      if (this.autoCloseOnButtonClick) {
        this._setClose();
      }
    },
    start(ev) {
      if (this.disabled || this.isOpen || ev.target.nodeName.toLowerCase() === 'button') {
        return;
      }
      if (this.$parent.$options._componentTag === 'swipeout') {
        const openItems = this.$parent.$children.filter(item => item.$data.styles.transform.indexOf('(0px, 0, 0)') === -1);
        if (openItems.length > 0) {
          openItems.forEach(item => {
            item.setOffset(0, true);
          });
          ev.preventDefault();
          return;
        }
      }
      const touch = ev.touches ? ev.touches[0] : ev;
      this.pageX = touch.pageX;
      this.pageY = touch.pageY;
    },
    move(ev) {
      if (this.disabled) {
        return;
      }
      if (ev.target.nodeName.toLowerCase() === 'button') {
        ev.preventDefault();
        return;
      }
      if (this.pageX === undefined) {
        ev.preventDefault();
        return;
      }

      const touch = ev.touches ? ev.touches[0] : ev;
      this.distX = touch.pageX - this.pageX;
      this.distY = touch.pageY - this.pageY;

      if (!this.direction) {
        this.direction = this.distX > 0 ? 'left' : 'right';
      }

      if (this.direction === 'right' && this.distX > 0 && this.hasRightMenu || this.direction === 'left' && this.distX < 0 && this.hasLeftMenu) {
        this.valid = true;
        ev.preventDefault();
      }

      if (this.valid === undefined) {
        if (this.distX > 0 && this.hasLeftMenu === false) {
          this.valid = false;
        } else if (this.distX < 0 && this.hasRightMenu === false) {
          this.valid = false;
        } else if (Math.abs(this.distX) > this.sensitivity || Math.abs(this.distY) > this.sensitivity) {
          this.valid = Math.abs(this.distX) > Math.abs(this.distY);
        } else {
          ev.preventDefault();
        }
      }

      if (this.valid === true) {
        if (Math.abs(this.distX) <= this.menuWidth) {
          this.setOffset(this.distX, false);
        } else {
          const extra = (Math.abs(this.distX) - this.menuWidth) * 0.5;
          const offset = (this.menuWidth + extra) * (this.distX < 0 ? -1 : 1);
          this.setOffset(offset, false);
        }
        ev.preventDefault();
      }
    },
    end(ev) {
      if (this.disabled) {
        return;
      }
      if (ev.target.nodeName.toLowerCase() === 'button') {
        return;
      }
      if (this.valid === true) {
        if (this.distX < 0 && this.direction === 'right') {
          const threshold = this.threshold <= 1 ? this.rightMenuWidth * this.threshold : this.threshold;

          if (this.distX < -threshold) {
            this.setOffset(-this.rightMenuWidth, true);
            this.$emit('on-open');
            this.isOpen = true;
          } else {
            this._setClose();
          }
        } else if (this.distX > 0 && this.direction === 'left') {
          const threshold = this.threshold <= 1 ? this.leftMenuWidth * this.threshold : this.threshold;

          if (this.distX > threshold) {
            this.setOffset(this.leftMenuWidth, true);
            this.$emit('on-open');
            this.isOpen = true;
          } else {
            this._setClose();
          }
        }
      } else if (this.pageX !== undefined) {}

      this.pageX = this.pageY = this.valid = undefined;
      this.direction = '';
    },
    setOffset(x, animated = false, force) {
      this.isAnimated = animated;
      if (this.disabled && !force) {
        return;
      }
      if (this.direction === 'right' && x > 0 || this.direction === 'left' && x < 0) {
        x = 0;
      }

      if (x === 0) {
        setTimeout(() => {
          this.isOpen = false;
        }, 300);
      }

      if (x < 0 && Math.abs(x) === this.rightMenuWidth) {
        this.distX = -this.rightMenuWidth;
      } else if (x > 0 && Math.abs(x) === this.leftMenuWidth) {
        this.distX = this.leftMenuWidth;
      }
      if (animated && this.target) {
        this.target && this.target.classList.add('vux-swipeout-content-animated');
        var cb = function (self, target) {
          return function () {
            target.classList.remove('vux-swipeout-content-animated');
            self.isAnimated = false;
            target.removeEventListener('webkitTransitionEnd', cb);
            target.removeEventListener('transitionend', cb);
          };
        }(this, this.target);

        this.target.addEventListener('webkitTransitionEnd', cb);
        this.target.addEventListener('transitionend', cb);
      }
      this.styles.transform = 'translate3d(' + x + 'px, 0, 0)';
    },
    _setClose(delay = 0) {
      this.setOffset(0, true);
      this.$emit('on-close');
      if (!delay) {
        this.isOpen = false;
      } else {
        setTimeout(() => {
          this.isOpen = false;
        }, delay);
      }
      this.distX = 0;
    },
    open(position = 'right') {
      this.setOffset(position === 'right' ? -this.rightMenuWidth : this.leftMenuWidth, true, true);
    },
    close() {
      this.setOffset(0, true, true);
    }
  },
  computed: {
    menuWidth() {
      if (!this.hasLeftMenu && this.hasRightMenu) {
        return this.rightMenuWidth;
      }
      if (this.hasLeftMenu && !this.hasRightMenu) {
        return this.leftMenuWidth;
      }
      if (this.hasLeftMenu && this.hasRightMenu) {
        return this.distX < 0 ? this.rightMenuWidth : this.leftMenuWidth;
      }
    },
    buttonBoxStyle() {
      return {
        backgroundColor: this.underlayColor
      };
    },
    leftButtonBoxStyle() {
      let styles = JSON.parse(JSON.stringify(this.buttonBoxStyle));
      if (this.transitionMode === 'follow') {
        let offset = this.styles.transform.indexOf('(0px, 0, 0)') === -1 ? this.leftMenuWidth - this.distX : this.leftMenuWidth;
        styles.transform = `translate3d(-${offset}px, 0, 0)`;
      }
      return styles;
    },
    rightButtonBoxStyle() {
      let styles = JSON.parse(JSON.stringify(this.buttonBoxStyle));
      if (this.transitionMode === 'follow') {
        let offset = this.styles.transform.indexOf('(0px, 0, 0)') === -1 ? this.rightMenuWidth - Math.abs(this.distX) : this.rightMenuWidth;
        if (offset < 0) {
          offset = 0;
        }
        if (this.isAnimated) {
          styles.transition = 'transform 0.2s';
        }
        styles.transform = `translate3d(${offset}px, 0, 0)`;
      }
      return styles;
    }
  },
  data() {
    return {
      pageX: undefined,
      pageY: undefined,
      distX: 0,
      distY: 0,
      hasLeftMenu: false,
      hasRightMenu: false,
      animated: false,
      isAnimated: false,
      isOpen: false,
      styles: {
        transform: 'translate3d(0px, 0, 0)'
      },
      direction: '',
      leftMenuWidth: 160,
      rightMenuWidth: 160
    };
  },
  watch: {
    disabled(newVal, oldVal) {
      if (newVal === true && !oldVal) {
        this.setOffset(0, true, true);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-0e0b4b1b","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout-item.vue
var swipeout_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-swipeout-item",on:{"touchstart":_vm.start,"mousedown":_vm.start,"touchmove":_vm.move,"mousemove":_vm.move,"touchend":_vm.end,"mouseup":_vm.end,"touchcancel":_vm.end}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.distX >= 0),expression:"distX >= 0"}],staticClass:"vux-swipeout-button-box vux-swipeout-button-box-left",style:(_vm.leftButtonBoxStyle)},[_vm._t("left-menu")],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.distX <= 0),expression:"distX <= 0"}],staticClass:"vux-swipeout-button-box",style:(_vm.rightButtonBoxStyle)},[_vm._t("right-menu")],2),_vm._v(" "),_c('div',{ref:"content",staticClass:"vux-swipeout-content",style:(_vm.styles),on:{"mousedown":_vm.onContentClick,"touchstart":_vm.onContentClick}},[_vm._t("content")],2)])}
var swipeout_item_staticRenderFns = []
var swipeout_item_esExports = { render: swipeout_item_render, staticRenderFns: swipeout_item_staticRenderFns }
/* harmony default export */ var components_swipeout_swipeout_item = (swipeout_item_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout-item.vue
var swipeout_item_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var swipeout_item___vue_template_functional__ = false
/* styles */
var swipeout_item___vue_styles__ = null
/* scopeId */
var swipeout_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var swipeout_item___vue_module_identifier__ = null
var swipeout_item_Component = swipeout_item_normalizeComponent(
  swipeout_swipeout_item,
  components_swipeout_swipeout_item,
  swipeout_item___vue_template_functional__,
  swipeout_item___vue_styles__,
  swipeout_item___vue_scopeId__,
  swipeout_item___vue_module_identifier__
)

/* harmony default export */ var src_components_swipeout_swipeout_item = (swipeout_item_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout-button.vue
//
//
//
//
//
//
//

/* harmony default export */ var swipeout_button = ({
  name: 'swipeout-button',
  props: {
    text: String,
    backgroundColor: String,
    type: String,
    width: {
      type: Number,
      default: 80
    }
  },
  methods: {
    onButtonClick() {
      if (this.$parent.$options._componentTag === 'swipeout-item') {
        this.$parent.onItemClick(this.text);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout-button.vue
//
//
//
//
//
//
//

/* harmony default export */ var swipeout_swipeout_button = ({
  name: 'swipeout-button',
  props: {
    text: String,
    backgroundColor: String,
    type: String,
    width: {
      type: Number,
      default: 80
    }
  },
  methods: {
    onButtonClick() {
      if (this.$parent.$options._componentTag === 'swipeout-item') {
        this.$parent.onItemClick(this.text);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-16b5eb22","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout-button.vue
var swipeout_button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"vux-swipeout-button",class:{'vux-swipeout-button-primary': _vm.type === 'primary', 'vux-swipeout-button-warn': _vm.type === 'warn', 'vux-swipeout-button-default': _vm.type === 'default'},style:({width: (_vm.width + "px"), backgroundColor: _vm.backgroundColor}),attrs:{"type":"button"},on:{"click":_vm.onButtonClick}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var swipeout_button_staticRenderFns = []
var swipeout_button_esExports = { render: swipeout_button_render, staticRenderFns: swipeout_button_staticRenderFns }
/* harmony default export */ var components_swipeout_swipeout_button = (swipeout_button_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/swipeout/swipeout-button.vue
var swipeout_button_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var swipeout_button___vue_template_functional__ = false
/* styles */
var swipeout_button___vue_styles__ = null
/* scopeId */
var swipeout_button___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var swipeout_button___vue_module_identifier__ = null
var swipeout_button_Component = swipeout_button_normalizeComponent(
  swipeout_swipeout_button,
  components_swipeout_swipeout_button,
  swipeout_button___vue_template_functional__,
  swipeout_button___vue_styles__,
  swipeout_button___vue_scopeId__,
  swipeout_button___vue_module_identifier__
)

/* harmony default export */ var src_components_swipeout_swipeout_button = (swipeout_button_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Msg.vue









/* harmony default export */ var Msg = ({
  name: 'msg',
  data: function () {
    return {
      selectedTabIndex: 0,
      hasReadMsgs: null,
      hasNotReadMsgs: null
    };
  },
  components: {
    ButtonTab: src_components_button_tab_button_tab,
    ButtonTabItem: src_components_button_tab_button_tab_item,
    Group: _vux_2_9_4_vux_src_components_group,
    Cell: _vux_2_9_4_vux_src_components_cell,
    Swipeout: src_components_swipeout_swipeout,
    SwipeoutItem: src_components_swipeout_swipeout_item,
    SwipeoutButton: src_components_swipeout_swipeout_button
  },
  methods: {

    markRead: function (mid) {

      var app = this;
      this.$http.post('/message/mark_one/' + mid, {
        accesstoken: this.$store.state.accesstoken
      }).then(function () {
        if (response.data && response.data.success) {
          //如果返回的为真时，进行处理

          console.log("已经标记为已读");
        }
      });
    },
    markAll: function (mid) {

      var app = this;
      this.$http.post('/message/mark_all', {
        accesstoken: this.$store.state.accesstoken
      }).then(function () {
        if (response.data && response.data.success) {
          //如果返回的为真时，进行处理

          console.log("已经全部标记为已读");

          app.$route.go(0);
        }
      });
    }
  },
  created: function () {

    var app = this;
    this.$http.get('/messages', {
      params: {
        accesstoken: this.$store.state.accesstoken
      }
    }).then(function (response) {

      if (response.data && response.data.success) {
        //判断是否存在response.data和response.data.success
        app.hasReadMsgs = response.data.data.has_read_messages;
        app.hasNotReadMsgs = response.data.data.hasnot_read_messages;
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Msg.vue









/* harmony default export */ var components_Msg = ({
  name: 'msg',
  data: function () {
    return {
      selectedTabIndex: 0,
      hasReadMsgs: null,
      hasNotReadMsgs: null
    };
  },
  components: {
    ButtonTab: src_components_button_tab_button_tab,
    ButtonTabItem: src_components_button_tab_button_tab_item,
    Group: _vux_2_9_4_vux_src_components_group,
    Cell: _vux_2_9_4_vux_src_components_cell,
    Swipeout: src_components_swipeout_swipeout,
    SwipeoutItem: src_components_swipeout_swipeout_item,
    SwipeoutButton: src_components_swipeout_swipeout_button
  },
  methods: {

    markRead: function (mid) {

      var app = this;
      this.$http.post('/message/mark_one/' + mid, {
        accesstoken: this.$store.state.accesstoken
      }).then(function () {
        if (response.data && response.data.success) {
          //如果返回的为真时，进行处理

          console.log("已经标记为已读");
        }
      });
    },
    markAll: function (mid) {

      var app = this;
      this.$http.post('/message/mark_all', {
        accesstoken: this.$store.state.accesstoken
      }).then(function () {
        if (response.data && response.data.success) {
          //如果返回的为真时，进行处理

          console.log("已经全部标记为已读");

          app.$route.go(0);
        }
      });
    }
  },
  created: function () {

    var app = this;
    this.$http.get('/messages', {
      params: {
        accesstoken: this.$store.state.accesstoken
      }
    }).then(function (response) {

      if (response.data && response.data.success) {
        //判断是否存在response.data和response.data.success
        app.hasReadMsgs = response.data.data.has_read_messages;
        app.hasNotReadMsgs = response.data.data.hasnot_read_messages;
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-7ba69093","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Msg.vue
var Msg_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticStyle:{"margin-top":"10px"}},[_c('button-tab',{model:{value:(_vm.selectedTabIndex),callback:function ($$v) {_vm.selectedTabIndex=$$v},expression:"selectedTabIndex"}},[_c('button-tab-item',[_vm._v("未读消息")]),_vm._v(" "),_c('button-tab-item',[_vm._v("已读消息")])],1)],1),_vm._v(" "),(_vm.selectedTabIndex == 0)?_c('swipeout',[_vm._l((_vm.hasNotReadMsgs),function(item,index){return _c('swipeout-item',{key:index},[_c('div',{attrs:{"slot":"right-menu"},slot:"right-menu"},[_c('swipeout-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.markRead(item.id)}}},[_vm._v("\n                    标记为已读\n                ")])],1),_vm._v(" "),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('a',{staticStyle:{"color":"#08c"},attrs:{"href":'/#/user/' + item.author.loginname}},[_vm._v(_vm._s(item.author.loginname))]),_vm._v(" "),_c('a',{staticStyle:{"color":"#333"}},[_vm._v("回复了您的话题")]),_vm._v(" "),_c('a',{staticStyle:{"color":"#08c"},attrs:{"href":'/#/topic/' + item.topic.id}},[_vm._v(_vm._s(item.topic.title))])])])])}),_vm._v(" "),(_vm.hasNotReadMsgs && _vm.hasNotReadMsgs.length>0)?_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.markAll($event)}}},[_vm._v("全部标记为已读")]):_c('span',[_vm._v("暂无未读消息")])],2):_vm._e(),_vm._v(" "),(_vm.selectedTabIndex == 1)?_c('group',_vm._l((_vm.hasReadMsgs),function(item,index){return _c('cell',{key:index,staticStyle:{"font-size":"15px"}},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('a',{staticStyle:{"color":"#08c"},attrs:{"href":'/#/user/' + item.author.loginname}},[_vm._v(_vm._s(item.author.loginname))]),_vm._v(" "),_c('a',{staticStyle:{"color":"#333"}},[_vm._v("回复了您的话题")]),_vm._v(" "),_c('a',{staticStyle:{"color":"#08c"},attrs:{"href":'/#/topic/' + item.topic.id}},[_vm._v(_vm._s(item.topic.title))])])])}),1):_vm._e()],1)}
var Msg_staticRenderFns = []
var Msg_esExports = { render: Msg_render, staticRenderFns: Msg_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_Msg = (Msg_esExports);
// CONCATENATED MODULE: ./src/components/Msg.vue
function Msg_injectStyle (ssrContext) {
  __webpack_require__("6mNm")
}
var Msg_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var Msg___vue_template_functional__ = false
/* styles */
var Msg___vue_styles__ = Msg_injectStyle
/* scopeId */
var Msg___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Msg___vue_module_identifier__ = null
var Msg_Component = Msg_normalizeComponent(
  components_Msg,
  selectortype_template_index_0_src_components_Msg,
  Msg___vue_template_functional__,
  Msg___vue_styles__,
  Msg___vue_scopeId__,
  Msg___vue_module_identifier__
)

/* harmony default export */ var src_components_Msg = (Msg_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/msg/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var msg = ({
  name: 'msg',
  props: ['icon', 'title', 'description', 'buttons'],
  methods: {
    onClick(handler, link) {
      typeof handler === 'function' && handler();
      link && Object(router["a" /* go */])(link, this.$router);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/msg/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_msg = ({
  name: 'msg',
  props: ['icon', 'title', 'description', 'buttons'],
  methods: {
    onClick(handler, link) {
      typeof handler === 'function' && handler();
      link && Object(router["a" /* go */])(link, this.$router);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-798f987c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/msg/index.vue
var msg_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-msg"},[_c('div',{staticClass:"weui-msg__icon-area"},[_c('i',{staticClass:"weui-icon_msg",class:("weui-icon-" + (_vm.icon || 'success'))})]),_vm._v(" "),_c('div',{staticClass:"weui-msg__text-area"},[_c('h2',{staticClass:"weui-msg__title",domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('p',{staticClass:"weui-msg__desc"},[_vm._t("description")],2),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"weui-msg__desc",domProps:{"innerHTML":_vm._s(_vm.description)}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"weui-msg__opr-area"},[_c('p',{staticClass:"weui-btn-area"},[_vm._t("buttons",_vm._l((_vm.buttons),function(button){return _c('a',{staticClass:"weui-btn",class:("weui-btn_" + (button.type)),attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.onClick(button.onClick, button.link)}}},[_vm._v(_vm._s(button.text))])}))],2)])])}
var msg_staticRenderFns = []
var msg_esExports = { render: msg_render, staticRenderFns: msg_staticRenderFns }
/* harmony default export */ var src_components_msg = (msg_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/msg/index.vue
function msg_injectStyle (ssrContext) {
  __webpack_require__("Qa7N")
}
var msg_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var msg___vue_template_functional__ = false
/* styles */
var msg___vue_styles__ = msg_injectStyle
/* scopeId */
var msg___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var msg___vue_module_identifier__ = null
var msg_Component = msg_normalizeComponent(
  components_msg,
  src_components_msg,
  msg___vue_template_functional__,
  msg___vue_styles__,
  msg___vue_scopeId__,
  msg___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_msg = (msg_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Logout.vue



/* harmony default export */ var Logout = ({
  name: 'logout',
  components: {
    Msg: _vux_2_9_4_vux_src_components_msg
  },
  data: function () {
    return {
      isShowMsg: false,
      buttons: [{
        type: 'primary',
        text: '跳转到登录页面',
        link: '/login'
      }]
    };
  },
  created: function () {

    if (false == this.$store.state.isLogined) {
      this.isShowMsg = true;
      return;
    }

    this.$store.commit('mutationLogout');

    window.localStorage.clear();

    this.$router.push('/topiclist/all');
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Logout.vue



/* harmony default export */ var components_Logout = ({
  name: 'logout',
  components: {
    Msg: _vux_2_9_4_vux_src_components_msg
  },
  data: function () {
    return {
      isShowMsg: false,
      buttons: [{
        type: 'primary',
        text: '跳转到登录页面',
        link: '/login'
      }]
    };
  },
  created: function () {

    if (false == this.$store.state.isLogined) {
      this.isShowMsg = true;
      return;
    }

    this.$store.commit('mutationLogout');

    window.localStorage.clear();

    this.$router.push('/topiclist/all');
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-9e41c1d6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Logout.vue
var Logout_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isShowMsg)?_c('msg',{attrs:{"title":"用户未登录","description":"未登录用户不允许访问该页面，请先登录","icon":"warn","buttons":_vm.buttons}}):_vm._e()],1)}
var Logout_staticRenderFns = []
var Logout_esExports = { render: Logout_render, staticRenderFns: Logout_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_Logout = (Logout_esExports);
// CONCATENATED MODULE: ./src/components/Logout.vue
function Logout_injectStyle (ssrContext) {
  __webpack_require__("EsDT")
}
var Logout_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var Logout___vue_template_functional__ = false
/* styles */
var Logout___vue_styles__ = Logout_injectStyle
/* scopeId */
var Logout___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Logout___vue_module_identifier__ = null
var Logout_Component = Logout_normalizeComponent(
  components_Logout,
  selectortype_template_index_0_src_components_Logout,
  Logout___vue_template_functional__,
  Logout___vue_styles__,
  Logout___vue_scopeId__,
  Logout___vue_module_identifier__
)

/* harmony default export */ var src_components_Logout = (Logout_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/card/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var card = ({
  name: 'card',
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter() {
      this.footer.link && Object(router["a" /* go */])(this.footer.link, this.$router);
      this.$emit('on-click-footer');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.9.4@vux/src/components/card/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_card = ({
  name: 'card',
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter() {
      this.footer.link && Object(router["a" /* go */])(this.footer.link, this.$router);
      this.$emit('on-click-footer');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-561068d4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.9.4@vux/src/components/card/index.vue
var card_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-panel weui-panel_access"},[(_vm.header && _vm.header.title)?_c('div',{staticClass:"weui-panel__hd",domProps:{"innerHTML":_vm._s(_vm.header.title)},on:{"click":function($event){return _vm.$emit('on-click-header')}}}):_vm._e(),_vm._v(" "),_vm._t("header"),_vm._v(" "),_c('div',{staticClass:"weui-panel__bd"},[_c('div',{staticClass:"vux-card-content"},[_vm._t("content")],2)]),_vm._v(" "),_c('div',{staticClass:"weui-panel__ft"},[(_vm.footer && _vm.footer.title)?_c('a',{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{"href":"javascript:"},on:{"click":_vm.onClickFooter}},[_c('div',{staticClass:"weui-cell__bd",domProps:{"innerHTML":_vm._s(_vm.footer.title)}})]):_vm._e()]),_vm._v(" "),_vm._t("footer")],2)}
var card_staticRenderFns = []
var card_esExports = { render: card_render, staticRenderFns: card_staticRenderFns }
/* harmony default export */ var src_components_card = (card_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.9.4@vux/src/components/card/index.vue
function card_injectStyle (ssrContext) {
  __webpack_require__("dqEk")
}
var card_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var card___vue_template_functional__ = false
/* styles */
var card___vue_styles__ = card_injectStyle
/* scopeId */
var card___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var card___vue_module_identifier__ = null
var card_Component = card_normalizeComponent(
  components_card,
  src_components_card,
  card___vue_template_functional__,
  card___vue_styles__,
  card___vue_scopeId__,
  card___vue_module_identifier__
)

/* harmony default export */ var _vux_2_9_4_vux_src_components_card = (card_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/User.vue





/* harmony default export */ var User = ({
  name: 'user',
  props: ['loginname'],
  components: {
    Card: _vux_2_9_4_vux_src_components_card,
    Group: _vux_2_9_4_vux_src_components_group,
    Cell: _vux_2_9_4_vux_src_components_cell
  },
  data: function () {
    return {
      userinfo: null,
      collect_topics: []
    };
  },
  beforeRouteEnter: function (to, from, next) {
    next(function (vm) {
      vm.$http.get('/user/' + to.params.loginname).then(function (response) {

        vm.userinfo = response.data.data;
      });

      vm.$http.get('/topic_collect/' + to.params.loginname).then(function (response) {
        vm.collect_topics = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function (to, from, next) {
    var app = this;
    this.$http.get('/user/' + to.params.loginname).then(function (response) {

      app.userinfo = response.data.data;
    });

    app.$http.get('/topic_collect/' + to.params.loginname).then(function (response) {
      app.collect_topics = response.data.data;
    });
    next();
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/User.vue





/* harmony default export */ var components_User = ({
  name: 'user',
  props: ['loginname'],
  components: {
    Card: _vux_2_9_4_vux_src_components_card,
    Group: _vux_2_9_4_vux_src_components_group,
    Cell: _vux_2_9_4_vux_src_components_cell
  },
  data: function () {
    return {
      userinfo: null,
      collect_topics: []
    };
  },
  beforeRouteEnter: function (to, from, next) {
    next(function (vm) {
      vm.$http.get('/user/' + to.params.loginname).then(function (response) {

        vm.userinfo = response.data.data;
      });

      vm.$http.get('/topic_collect/' + to.params.loginname).then(function (response) {
        vm.collect_topics = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function (to, from, next) {
    var app = this;
    this.$http.get('/user/' + to.params.loginname).then(function (response) {

      app.userinfo = response.data.data;
    });

    app.$http.get('/topic_collect/' + to.params.loginname).then(function (response) {
      app.collect_topics = response.data.data;
    });
    next();
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-6243bb50","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/User.vue
var User_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.userinfo)?_c('div',[_c('card',{attrs:{"header":{ title: _vm.userinfo.loginname },"footer":{ title: _vm.userinfo.create_at }}},[_c('div',{staticClass:"card_content",attrs:{"slot":"content"},slot:"content"},[_c('p',[_c('img',{attrs:{"src":_vm.userinfo.avatar_url,"alt":""}})]),_vm._v(" "),_c('p',[_vm._v("用户积分: "+_vm._s(_vm.userinfo.score))]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"/#/collect/"}},[_vm._v(_vm._s(_vm.collect_topics.length)+"个话题被收藏")])]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":'https://github.com/' + _vm.userinfo.githubUsername}},[_vm._v("@"+_vm._s(_vm.userinfo.githubUsername))])])])]),_vm._v(" "),_c('card',{attrs:{"header":{ tltle: '最近发表的话题' }}},[_c('group',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.userinfo.recent_topics),function(item,index){return _c('cell',{key:index,attrs:{"title":item.title,"is-link":"","link":'/topic/' + item.id}})}),1)],1)],1):_vm._e()}
var User_staticRenderFns = []
var User_esExports = { render: User_render, staticRenderFns: User_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_User = (User_esExports);
// CONCATENATED MODULE: ./src/components/User.vue
function User_injectStyle (ssrContext) {
  __webpack_require__("H41p")
}
var User_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var User___vue_template_functional__ = false
/* styles */
var User___vue_styles__ = User_injectStyle
/* scopeId */
var User___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var User___vue_module_identifier__ = null
var User_Component = User_normalizeComponent(
  components_User,
  selectortype_template_index_0_src_components_User,
  User___vue_template_functional__,
  User___vue_styles__,
  User___vue_scopeId__,
  User___vue_module_identifier__
)

/* harmony default export */ var src_components_User = (User_Component.exports);

// EXTERNAL MODULE: ./node_modules/_mavon-editor@2.7.3@mavon-editor/dist/mavon-editor.js
var mavon_editor = __webpack_require__("VKT6");
var mavon_editor_default = /*#__PURE__*/__webpack_require__.n(mavon_editor);

// EXTERNAL MODULE: ./node_modules/_mavon-editor@2.7.3@mavon-editor/dist/css/index.css
var css = __webpack_require__("EjzY");
var css_default = /*#__PURE__*/__webpack_require__.n(css);

// EXTERNAL MODULE: ./node_modules/_axios@0.15.3@axios/index.js
var _axios_0_15_3_axios = __webpack_require__("6sKG");
var _axios_0_15_3_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_15_3_axios);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Create.vue









/* harmony default export */ var Create = ({
  name: 'create',
  data() {
    return {
      title: '',
      content: '',

      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    XTextarea: _vux_2_9_4_vux_src_components_x_textarea,
    XButton: _vux_2_9_4_vux_src_components_x_button,
    mavonEditor: mavon_editor["mavonEditor"]
  },
  methods: {

    addtopic: function () {
      console.log('title = ' + this.title);
      console.log('content = ' + this.content);
    },

    uploadImage: function (pos, file) {
      //pos表示上传图片的序号

      var app = this;

      var params = new FormData();
      params.append('smfile', file);

      _axios_0_15_3_axios_default.a.post('https://sm.ms/api/upload', params, {

        headers: { 'Content-Type': 'multipart/form-data' }

      }).then(function (response) {

        app.$refs.md.$img2Url(pos, response.data.data.url);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Create.vue









/* harmony default export */ var components_Create = ({
  name: 'create',
  data() {
    return {
      title: '',
      content: '',

      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    XTextarea: _vux_2_9_4_vux_src_components_x_textarea,
    XButton: _vux_2_9_4_vux_src_components_x_button,
    mavonEditor: mavon_editor["mavonEditor"]
  },
  methods: {

    addtopic: function () {
      console.log('title = ' + this.title);
      console.log('content = ' + this.content);
    },

    uploadImage: function (pos, file) {
      //pos表示上传图片的序号

      var app = this;

      var params = new FormData();
      params.append('smfile', file);

      _axios_0_15_3_axios_default.a.post('https://sm.ms/api/upload', params, {

        headers: { 'Content-Type': 'multipart/form-data' }

      }).then(function (response) {

        app.$refs.md.$img2Url(pos, response.data.data.url);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-7f4f2856","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Create.vue
var Create_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h4',[_vm._v("发表新话题")]),_vm._v(" "),_c('group',[_c('x-textarea',{attrs:{"placeholder":"标题","max":100,"rows":1},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}})],1),_vm._v(" "),_c('mavon-editor',{ref:"md",attrs:{"toolbars":_vm.toolbars},on:{"imgAdd":_vm.uploadImage},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}}),_vm._v(" "),_c('x-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.addtopic($event)}}},[_vm._v("添加新话题")])],1)}
var Create_staticRenderFns = []
var Create_esExports = { render: Create_render, staticRenderFns: Create_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_Create = (Create_esExports);
// CONCATENATED MODULE: ./src/components/Create.vue
function Create_injectStyle (ssrContext) {
  __webpack_require__("wU9R")
}
var Create_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var Create___vue_template_functional__ = false
/* styles */
var Create___vue_styles__ = Create_injectStyle
/* scopeId */
var Create___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Create___vue_module_identifier__ = null
var Create_Component = Create_normalizeComponent(
  components_Create,
  selectortype_template_index_0_src_components_Create,
  Create___vue_template_functional__,
  Create___vue_styles__,
  Create___vue_scopeId__,
  Create___vue_module_identifier__
)

/* harmony default export */ var src_components_Create = (Create_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Edit.vue






/* harmony default export */ var Edit = ({

  name: 'edit',
  props: ['id'],
  data: function () {
    return {
      topic: {

        title: '',
        content: ''
      }
    };
  },
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    XTextarea: _vux_2_9_4_vux_src_components_x_textarea,
    XButton: _vux_2_9_4_vux_src_components_x_button,
    mavonEditor: mavon_editor["mavonEditor"]
  },
  methods: {

    edittopic: function () {}
  },
  beforeRouteEnter: function (to, from, next) {
    next(function (vm) {
      vm.$http.get('/topic/' + to.params.id).then(function (response) {
        vm.topic = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function (to, from, next) {
    var app = this;
    app.$http.get('/topic/' + to.params.id).then(function (response) {
      app.topic = response.data.data;
    });
    next();
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Edit.vue






/* harmony default export */ var components_Edit = ({

  name: 'edit',
  props: ['id'],
  data: function () {
    return {
      topic: {

        title: '',
        content: ''
      }
    };
  },
  components: {
    Group: _vux_2_9_4_vux_src_components_group,
    XTextarea: _vux_2_9_4_vux_src_components_x_textarea,
    XButton: _vux_2_9_4_vux_src_components_x_button,
    mavonEditor: mavon_editor["mavonEditor"]
  },
  methods: {

    edittopic: function () {}
  },
  beforeRouteEnter: function (to, from, next) {
    next(function (vm) {
      vm.$http.get('/topic/' + to.params.id).then(function (response) {
        vm.topic = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function (to, from, next) {
    var app = this;
    app.$http.get('/topic/' + to.params.id).then(function (response) {
      app.topic = response.data.data;
    });
    next();
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-caeae96a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Edit.vue
var Edit_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h4',[_vm._v("编辑话题")]),_vm._v(" "),_c('group',[_c('x-textarea',{attrs:{"placeholder":"标题","max":100,"rows":1},model:{value:(_vm.topic.title),callback:function ($$v) {_vm.$set(_vm.topic, "title", $$v)},expression:"topic.title"}})],1),_vm._v(" "),_c('mavon-editor',{model:{value:(_vm.topic.content),callback:function ($$v) {_vm.$set(_vm.topic, "content", $$v)},expression:"topic.content"}}),_vm._v(" "),_c('x-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.edittopic($event)}}},[_vm._v("添加新话题")])],1)}
var Edit_staticRenderFns = []
var Edit_esExports = { render: Edit_render, staticRenderFns: Edit_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_Edit = (Edit_esExports);
// CONCATENATED MODULE: ./src/components/Edit.vue
var Edit_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var Edit___vue_template_functional__ = false
/* styles */
var Edit___vue_styles__ = null
/* scopeId */
var Edit___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Edit___vue_module_identifier__ = null
var Edit_Component = Edit_normalizeComponent(
  components_Edit,
  selectortype_template_index_0_src_components_Edit,
  Edit___vue_template_functional__,
  Edit___vue_styles__,
  Edit___vue_scopeId__,
  Edit___vue_module_identifier__
)

/* harmony default export */ var src_components_Edit = (Edit_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js


// import Home from '@/components/Home.vue';










// 全局注册路由
vue_esm["default"].use(vue_router_esm["a" /* default */]);

// 定义路由信息对象
const routes = [
// { path: '/', name: 'home', component: Home },
{ path: '/', redirect: '/topiclist/all' }, { path: '/topiclist/:name', name: 'topiclist', component: src_components_TopicList, props: true }, { path: '/topic/:id', name: 'topic', component: src_components_Topic, props: true },
// 登陆操作
{ path: '/login', name: 'login', component: src_components_Login },
// 个人中心
{ path: '/center', name: 'center', component: src_components_Center }, { path: '/user/:loginname', name: 'user', component: src_components_User, props: true },
// 消息通知
{ path: '/msg', name: 'msg', component: src_components_Msg },
// 登出操作
{ path: '/logout', name: 'logout', component: src_components_Logout },
// 发表新话题：
{ path: '/create', name: 'create', component: src_components_Create },
// 编辑主题
{ path: '/topic/:id/edit', name: 'edit', component: src_components_Edit, props: true }];

// 创建路由管理器
const router_router = new vue_router_esm["a" /* default */]({
  routes
});

// 对外输出模块
/* harmony default export */ var src_router = (router_router);
// CONCATENATED MODULE: ./src/store/mutations.js
const mutations = {
    mutationIsShowMoreMenus: function (state, payload) {
        // state 表示当前状态数据
        // payload 表示使用方传递的附加数据
        state.isShowMoreMenus = payload;
    },
    // 实现用户登录操作
    mutationLogin: function (state) {
        state.isLogined = true;
    },
    // 修改loginname
    mutationLoginname: function (state, payload) {
        state.loginname = payload;
    },
    // 修改accesstoken
    mutationAccessToken: function (state, payload) {
        state.accesstoken = payload;
    },
    // 用户注销操作
    mutationLogout: function (state) {
        state.isLogined = false;
        state.loginname = '';
        state.accesstoken = '';
    },
    //修改author_id
    mutationAuthorId: function (state, payload) {
        state.author_id = payload;
    }
};

/* harmony default export */ var store_mutations = (mutations);
// CONCATENATED MODULE: ./src/store/actions.js
const actions = {};

/* harmony default export */ var store_actions = (actions);
// CONCATENATED MODULE: ./src/store/index.js
// vuex状态管理





// 全局注册
vue_esm["default"].use(vuex_esm["a" /* default */]);

// 创建Store对象
const store = new vuex_esm["a" /* default */].Store({
    // 状态数据
    state: {
        // 主题分类数据
        topics: [{ name: 'all', desc: '全部' }, { name: 'good', desc: '精华' }, { name: 'share', desc: '分享' }, { name: 'ask', desc: '问答' }, { name: 'job', desc: '招聘' }, { name: 'dev', desc: '测试' }],
        // 未登录状态的更多菜单
        unLoginedMoreMenus: {
            login: '登录'
        },
        // 登录状态的更多菜单
        loginedMoreMenus: {
            center: '个人中心',
            create: '发表新话题',
            msg: '消息通知',
            logout: '登出'
        },
        // 是否显示更多菜单
        isShowMoreMenus: false,
        // 是否登陆
        isLogined: false,
        // 登录用户名
        loginname: '',
        // 登录用户的accesstoken
        accesstoken: '',
        // 用户登录id
        author_id: ''
    },
    // 状态数据的计算属性
    getters: {
        moreMenus: function (state) {
            if (state.isLogined) {
                // 用户处于登录状态,返回登录后的更多菜单
                return state.loginedMoreMenus;
            }
            return state.unLoginedMoreMenus;
        },
        getTopicDescByTab: function (state) {
            // 需要返回一个函数结构
            return function (tab) {
                for (var index = 0; index < state.topics.length; index++) {
                    if (state.topics[index].name == tab) {
                        return state.topics[index].desc;
                    }
                }
            };
        }
    },
    mutations: store_mutations,
    actions: store_actions
});

// 对外输出模块
/* harmony default export */ var src_store = (store);
// CONCATENATED MODULE: ./src/ajax.js


// 创建Ajax请求对象
const request = _axios_0_15_3_axios_default.a.create({
    baseURL: 'https://cnodejs.org/api/v1'
});

// 对外输出模块
/* harmony default export */ var ajax = (request);
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



// import router from './router/index.js';




// 为Vue对象添加一个继承属性
vue_esm["default"].prototype.$http = ajax;

fastclick_default.a.attach(document.body);

vue_esm["default"].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["default"]({
  router: src_router,
  store: src_store,
  render: h => h(src_App)
}).$mount('#app-box');

/***/ }),

/***/ "NYDs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Qa7N":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QkNI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "S2lv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YThD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Z2k1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "arLp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bwpr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dqEk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eIHG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fFCe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kF+h":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kf5t":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ls8F":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pon3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qNFV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "w+fm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wU9R":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.d9add6ecfb68993674f1.js.map