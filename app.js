new Vue({
    el: '#app',

    data: {
        newTask:{ title: '', completed: false},

        editingTask: false,

        tasks: []
    },

    methods: {
        pressedEnter: function() {
            (this.editingTask)
                ? this.removeIfEmpty()
                : this.addTask();

            this.newTask = { title: '', completed: false};
            this.editingTask = false;
        },

        addTask: function() {
            if ( ! this.newTask.title) {
                return;
            }

            this.tasks.push({
                title: this.newTask.title,
                completed: false
            });
        },

        startEditingTask: function(task) {
            this.newTask = task;
            this.editingTask = true;
        },

        removeTask: function(task) {
            this.tasks.$remove(task);
        },

        removeIfEmpty: function() {
            if ( ! this.newTask.title) {
                this.removeTask(this.newTask);
            }
        }
    }
});