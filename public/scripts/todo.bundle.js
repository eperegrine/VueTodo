webpackJsonp([0],[function(o,e,t){"use strict";function d(){for(var o="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=0;5>t;t++)o+=e.charAt(Math.floor(Math.random()*e.length));return o}for(var n=t(1),s=new n({el:"#app",data:{newTodo:"",todos:[{name:"Add some todos",completed:!1},{name:"Add some more todos",completed:!1},{name:"Setup basic todo app",completed:!0}]},methods:{addTodo:function(){var o=this.newTodo.trim();o&&(this.todos.push({name:o,completed:!1}),this.newTodo="")},removeTodo:function(o){this.todos.splice(o,1)}}}),a=0;7>a;a++)s.todos.$set(a,{name:d(),completed:!1})}]);