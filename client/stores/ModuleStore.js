import axios from 'axios'
const API = '/api/v1/modules'



let _modules = {}
let _initCalled = false
let _changeListeners = []

const ModuleStore = {

  init: function () {
    if (_initCalled)
      return

    _initCalled = true

    getJSON(API, function (err, res) {
      res.modules.forEach(function (modules) {
        _modules[module.id] = modules
      })

      ModuleStore.notifyChange()
    })
  },

  addModule: function (module, cb) {
    postJSON(API, { module: module }, function (res) {
      _modules[res.module.id] = res.module
      ModuleStore.notifyChange()
      if (cb) cb(res.module)
    })
  },

  removeModule: function (id, cb) {
    deleteJSON(API + '/' + id, cb)
    delete _module[id]
    ModuleStore.notifyChange()
  },

  fakeModules: function() {
    return [1,2,3]
  },

  getModules: function (cb) {
    $.ajax({
      url: API,
      method: 'GET'
    }).done((data) => {
      cb(data)
    })
  },

  getContact: function (id) {
    return _modules[id]
  },


}

export default ModuleStore
