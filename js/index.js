(function () {


  // Create Components
  Vue.component("remote-vue", function (resolve, reject) {
    axios.get("/templates/remote-vue.html")
      .then(function (response) {
        resolve(createRemoteVue(response.data));
      })
      .catch(function () {
        console.log("FAILED");
        reject();
      });
  });

  function createRemoteVue(template) {
    return {
      template: template,
      data: function () {
        return {
          foo: "Hello",
          items: [{
              name: "Shawn",
              age: 48
            },
            {
              name: "Steve",
              age: 33
            }
          ]
        };
      },
      methods: {
        onSave: function (item) {
          alert(item.name); 
        }
      }
    }
  }


  // Bootstraping the vue
  var vm = new Vue({
    el: "#theApp"
  });
})();