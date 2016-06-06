(function () {

    angular
        .module('chatCtrl', [])
        .controller('chatCtrl', chatCtrl);

        function chatCtrl() {
            var socket = io();
        }
});