<template>
  <p>{{ label }}</p>
  <table class="table table-bordered table-striped"">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr v-for="user in users">
    <td class="text center" @dblclick="editable($event,'name',user)">
      {{ user.name }}
    </td>
      <td class="text center" @dblclick="editable($event,'age',user)">
        {{ user.age }}
      </td>
  </tr>
  </table>
</template>

<script>

module.exports = {
  props: ['label', 'users'],
  methods:{
    editable:function(e,field,user){

      var target=e.target;
      var value=target.innerText;
      target.innerHTML = "<input type='text' value='" + value + "' id='_editable' style='width:100%;box-sizing:border-box;background:transparent;font-size:13px;color:red;text-align:center'>";
      var input = document.getElementById('_editable');
      input.focus();
      var len = input.value.length;
      
      if (document.selection) {
        var sel = input.createTextRange();
        sel.moveStart('character', len);
        sel.collapse();
        sel.select();
      } else if (typeof input.selectionStart == 'number' && typeof input.selectionEnd == 'number') {
        input.selectionStart = input.selectionEnd = len;
      }

      var action = function() {
        if (value != this.value && this.value != '') {
          target.innerHTML = this.value;
          //callback(this.value)
        } else {
          target.innerHTML = value;
        }
        input.removeEventListener("blur", action, false);
      };
      input.addEventListener("blur", action, false);

    }
  }
}
</script>

<style>
</style>
