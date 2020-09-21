// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../images/hero.png":[["hero.d8eebeaf.png","images/hero.png"],"images/hero.png"],"./../images/hero@2x.png":[["hero@2x.14f11319.png","images/hero@2x.png"],"images/hero@2x.png"],"./../images/hero2-tablet.png":[["hero2-tablet.49536506.png","images/hero2-tablet.png"],"images/hero2-tablet.png"],"./../images/hero2-tablet@2x.png":[["hero2-tablet@2x.cb0465ad.png","images/hero2-tablet@2x.png"],"images/hero2-tablet@2x.png"],"./../images/hero2-desktop.png":[["hero2-desktop.f8b567d4.png","images/hero2-desktop.png"],"images/hero2-desktop.png"],"./../images/hero2-desktop@2x.png":[["hero2-desktop@2x.905391b6.png","images/hero2-desktop@2x.png"],"images/hero2-desktop@2x.png"],"./../images/hero3-tablet.png":[["hero3-tablet.428241f1.png","images/hero3-tablet.png"],"images/hero3-tablet.png"],"./../images/hero3-tablet@2x.png":[["hero3-tablet@2x.965f033e.png","images/hero3-tablet@2x.png"],"images/hero3-tablet@2x.png"],"./../images/hero3-desktop.png":[["hero3-desktop.243e5e1b.png","images/hero3-desktop.png"],"images/hero3-desktop.png"],"./../images/hero3-desktop@2x.png":[["hero3-desktop@2x.1a8d0119.png","images/hero3-desktop@2x.png"],"images/hero3-desktop@2x.png"],"./../images/hero1-tablet.png":[["hero1-tablet.a69b3392.png","images/hero1-tablet.png"],"images/hero1-tablet.png"],"./../images/hero1-tablet@2x.png":[["hero1-tablet@2x.76d9c266.png","images/hero1-tablet@2x.png"],"images/hero1-tablet@2x.png"],"./../images/hero1-desktop.png":[["hero1-desktop.785ac0f6.png","images/hero1-desktop.png"],"images/hero1-desktop.png"],"./../images/hero1-desktop@2x.png":[["hero1-desktop@2x.3c00534f.png","images/hero1-desktop@2x.png"],"images/hero1-desktop@2x.png"],"./../images/pseudoelement.svg":[["pseudoelement.5f53b1ea.svg","images/pseudoelement.svg"],"images/pseudoelement.svg"],"./../images/background-milk.png":[["background-milk.85171885.png","images/background-milk.png"],"images/background-milk.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/background-milk@2x.png":[["background-milk@2x.42c3ebc2.png","images/background-milk@2x.png"],"images/background-milk@2x.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/background-milk-desktop.png":[["background-milk-desktop.f4bd7545.png","images/background-milk-desktop.png"],"images/background-milk-desktop.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/background-milk-desktop@2x.png":[["background-milk-desktop@2x.0c4eb715.png","images/background-milk-desktop@2x.png"],"images/background-milk-desktop@2x.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/production.png":[["production.cf234c30.png","images/production.png"],"images/production.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/production@2x.png":[["production@2x.73239e75.png","images/production@2x.png"],"images/production@2x.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/production-tablet.png":[["production-tablet.319f8a54.png","images/production-tablet.png"],"images/production-tablet.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/production-tablet@2x.png":[["production-tablet@2x.98fed1ac.png","images/production-tablet@2x.png"],"images/production-tablet@2x.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/production-desktop.png":[["production-desktop.9978bc05.png","images/production-desktop.png"],"images/production-desktop.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/production-desktop@2x.png":[["production-desktop@2x.f8d49d2b.png","images/production-desktop@2x.png"],"images/production-desktop@2x.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/production-icon1.png":[["production-icon1.8a9c4cbb.png","images/production-icon1.png"],"images/production-icon1.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/production-icon2.png":[["production-icon2.a137fb76.png","images/production-icon2.png"],"images/production-icon2.png"],"/Users/oleksijgelich/Documents/GitHub/parcel-project-template/src/images/production-icon3.png":[["production-icon3.721b4a6b.png","images/production-icon3.png"],"images/production-icon3.png"],"./../images/comment-bg.png":[["comment-bg.cd8a165a.png","images/comment-bg.png"],"images/comment-bg.png"],"./../images/comment-bg@2x.png":[["comment-bg@2x.973fc22c.png","images/comment-bg@2x.png"],"images/comment-bg@2x.png"],"./../images/comment-bg-tablet.png":[["comment-bg-tablet.0f165895.png","images/comment-bg-tablet.png"],"images/comment-bg-tablet.png"],"./../images/comment-bg-tablet@2x.png":[["comment-bg-tablet@2x.431a2a66.png","images/comment-bg-tablet@2x.png"],"images/comment-bg-tablet@2x.png"],"./../images/comment-bg-desktop.png":[["comment-bg-desktop.3bb2a23a.png","images/comment-bg-desktop.png"],"images/comment-bg-desktop.png"],"./../images/comment-bg-desktop@2x.png":[["comment-bg-desktop@2x.dd9aecf7.png","images/comment-bg-desktop@2x.png"],"images/comment-bg-desktop@2x.png"],"./../images/review-bg-mob.png":[["review-bg-mob.27ec0af2.png","images/review-bg-mob.png"],"images/review-bg-mob.png"],"./../images/review-bg-tablet.png":[["review-bg-tablet.340e9597.png","images/review-bg-tablet.png"],"images/review-bg-tablet.png"],"./../images/review-bg-desktop.png":[["review-bg-desktop.f3396570.png","images/review-bg-desktop.png"],"images/review-bg-desktop.png"],"./../images/quote.png":[["quote.0222001b.png","images/quote.png"],"images/quote.png"],"./../images/slider-dots.svg":[["slider-dots.d17b27e5.svg","images/slider-dots.svg"],"images/slider-dots.svg"],"./../images/slider-left.svg":[["slider-left.dbcbd991.svg","images/slider-left.svg"],"images/slider-left.svg"],"./../images/slider-right.svg":[["slider-right.c16078a4.svg","images/slider-right.svg"],"images/slider-right.svg"],"./../images/slider-home.svg":[["slider-home.fea1d2d9.svg","images/slider-home.svg"],"images/slider-home.svg"],"./../images/location-desktop.png":[["location-desktop.16d55285.png","images/location-desktop.png"],"images/location-desktop.png"],"./../images/location-desktop@2x.png":[["location-desktop@2x.160f221b.png","images/location-desktop@2x.png"],"images/location-desktop@2x.png"],"./../images/arrow-up.svg":[["arrow-up.c5f9bc3a.svg","images/arrow-up.svg"],"images/arrow-up.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52550" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map