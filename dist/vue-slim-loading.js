/*!
 * vue-slim-loading v1.1.1
 * Copyright (c) 2018-present, komo <ko.momo@qq.com>
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['vue-slim-loading'] = factory());
}(this, function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var objectSpread = _objectSpread;

  var name = "vue-slim-loading";
  var version = "1.1.1";
  var description = "💇 开箱即用的 vue 加载组件，改造于 ElementUI/Loading";
  var author = "komo <ko.momo@qq.com>";
  var license = "MIT";
  var repository = {
  	type: "git",
  	url: "https://github.com/komomoo/vue-slim-loading"
  };
  var keywords = [
  	"vue",
  	"slim-loading",
  	"vue-loading",
  	"element-loading",
  	"v-loading"
  ];
  var main = "dist/vue-slim-loading.min.js";
  var module = "dist/vue-slim-loading.esm.min.js";
  var scripts = {
  	dev: "parcel demo/index.html -p 8080 --out-dir demo/dev",
  	"build:demo": "rm -rf demo/dist/ && parcel build demo/index.html --out-dir demo/dist --public-url ./",
  	build: "dio",
  	lint: "eslint --fix --ext .js,.vue .",
  	"docs:dev": "vuepress dev docs",
  	"docs:build": "vuepress build docs",
  	"docs:gen": "node scripts/docs-generate",
  	release: "sh scripts/release.sh"
  };
  var eslintConfig = {
  	"extends": [
  		"@momoko/vue"
  	]
  };
  var eslintIgnore = [
  	"dist"
  ];
  var babel = {
  	presets: [
  		"@momoko/vue"
  	]
  };
  var browserslist = [
  	"iOS >= 9",
  	"Android >= 4.4",
  	"IE >= 9"
  ];
  var dependencies = {
  };
  var devDependencies = {
  	"@babel/core": "^7.3.3",
  	"@momoko/babel-preset-vue": "^0.2.0",
  	"@momoko/eslint-config-vue": "^0.2.2",
  	"dio-bundler": "^0.5.2",
  	"parcel-bundler": "^1.12.3",
  	"standard-version": "^4.4.0",
  	vue: "^2.6.10",
  	"vue-hot-reload-api": "^2.3.2",
  	"vue-template-compiler": "^2.6.10"
  };
  var pkg = {
  	name: name,
  	version: version,
  	description: description,
  	author: author,
  	license: license,
  	"private": false,
  	repository: repository,
  	keywords: keywords,
  	main: main,
  	module: module,
  	scripts: scripts,
  	eslintConfig: eslintConfig,
  	eslintIgnore: eslintIgnore,
  	babel: babel,
  	browserslist: browserslist,
  	dependencies: dependencies,
  	devDependencies: devDependencies
  };

  var pre = pkg.name;
  var mixin = {
    methods: {
      // 生成 css class
      c: function c(className) {
        return className ? "".concat(pre).concat(className) : "".concat(pre);
      }
    }
  };

  //
  var script = {
    name: 'Circular',
    mixins: [mixin],
    props: {
      color: {
        // 颜色
        type: String,
        default: '#409EFF'
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      class: _vm.c('-circular'),
      attrs: {
        "viewBox": "25 25 50 50"
      }
    }, [_c('circle', {
      class: _vm.c('-circular__path'),
      style: {
        'stroke': _vm.color
      },
      attrs: {
        "cx": "50",
        "cy": "50",
        "r": "20",
        "fill": "none"
      }
    })]);
  };

  var __vue_staticRenderFns__ = [];
  /* style */

  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-6722fab1_0", {
      source: ".vue-slim-loading-circular{height:42px;width:42px;-webkit-animation:loading-rotate 2s linear infinite;animation:loading-rotate 2s linear infinite}.vue-slim-loading-circular__path{-webkit-animation:loading-dash 1.5s ease-in-out infinite;animation:loading-dash 1.5s ease-in-out infinite;stroke-dasharray:90,150;stroke-dashoffset:0;stroke-width:2;stroke:#409eff;stroke-linecap:round}@-webkit-keyframes loading-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}100%{stroke-dasharray:90,150;stroke-dashoffset:-120px}}@keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}100%{stroke-dasharray:90,150;stroke-dashoffset:-120px}}",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject SSR */

  var Circular = normalizeComponent_1({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

  //
  var script$1 = {
    name: 'SlimLoading',
    components: {
      Circular: Circular
    },
    mixins: [mixin],
    props: {
      show: {
        // .sync 是否显示
        type: Boolean,
        default: false
      },
      text: {
        // 加载文本
        type: String,
        default: null
      },
      color: {
        // 颜色
        type: String,
        default: '#409EFF'
      },
      maskClass: {
        // 遮罩样式类
        type: Array,
        default: null
      },
      loadingClass: {
        // 加载样式类
        type: Array,
        default: null
      },
      textClass: {
        // 文本样式类
        type: Array,
        default: null
      }
    }
  };

  /* script */
  var __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.c()
    }, [_c('transition', {
      attrs: {
        "name": "loading-fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.show,
        expression: "show"
      }],
      class: [_vm.c('-mask')].concat(_vm.maskClass)
    }, [_c('div', {
      class: [_vm.c('-spinner')]
    }, [_vm._t("default", [_c('Circular', {
      class: _vm.loadingClass,
      attrs: {
        "color": _vm.color
      }
    })]), _vm._v(" "), _vm.text ? _c('p', {
      class: [_vm.c('-spinner__text')].concat(_vm.textClass),
      style: {
        'color': _vm.color
      }
    }, [_vm._v("\n          " + _vm._s(_vm.text) + "\n        ")]) : _vm._e()], 2)])])], 1);
  };

  var __vue_staticRenderFns__$1 = [];
  /* style */

  var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-529225ff_0", {
      source: ".vue-slim-loading-mask{position:absolute;z-index:100;margin:0;top:0;right:0;bottom:0;left:0;background-color:rgba(255,255,255,.9);transition:opacity .3s}html.dark-mode .vue-slim-loading-mask{background-color:rgba(0,0,0,.9)}.vue-slim-loading-spinner{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:100%;text-align:center}.vue-slim-loading-spinner__text{color:#409eff;margin:3px 0;font-size:14px}.vue-slim-loading .loading-fade-enter,.vue-slim-loading .loading-fade-leave-active{opacity:0}",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject SSR */

  var SlimLoading = normalizeComponent_1({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, browser, undefined);

  /**
   * 获取样式
   */
  var getStyle = function getStyle(element, styleName) {
    try {
      switch (styleName) {
        case 'opacity':
          try {
            return element.filters.item('alpha').opacity / 100;
          } catch (e) {
            return 1.0;
          }

        default:
          return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
      }
    } catch (e) {
      return element.style[styleName];
    }
  };

  SlimLoading.install = function (Vue) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Vue.component(SlimLoading.name, SlimLoading);
    var Loading = Vue.extend(SlimLoading);
    Vue.directive('loading', {
      bind: function bind(el, binding, vnode) {
        var textExr = el.getAttribute('loading-text');
        var colorExr = el.getAttribute('loading-color');
        if (!getStyle(el, 'position')) el.style.position = 'relative';
        var div = document.createElement('div');
        el.appendChild(div);
        var loadingInstance = new Loading({
          el: div,
          propsData: objectSpread({
            show: !!binding.value,
            text: textExr || option.text,
            color: colorExr || option.color
          }, option)
        });
        el.loadingInstance = loadingInstance;
        el.loadingEl = loadingInstance.$el;
      },
      update: function update(el, binding) {
        var textExr = el.getAttribute('loading-text');
        var colorExr = el.getAttribute('loading-color');
        if (textExr && el.loadingInstance._props.text !== textExr) el.loadingInstance._props.text = textExr;
        if (colorExr && el.loadingInstance._props.color !== colorExr) el.loadingInstance._props.color = colorExr;
        if (binding.oldValue !== binding.value) el.loadingInstance._props.show = !!binding.value;
      },
      unbind: function unbind(el, binding) {
        if (el.domInserted) {
          el.loadingEl && el.loadingEl.parentNode && el.loadingEl.parentNode.removeChild(el.loadingEl);
        }
      }
    });
  };

  return SlimLoading;

}));
