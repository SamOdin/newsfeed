(function () {
    
    angular
        .module('chatCtrl', [])
        .controller('chatCtrl', ['$scope', 'chatProvider', chatCtrl]);

        function chatCtrl($scope, chatProvider) {
            
            $scope.messages = [];

            chatProvider.on('testMsg', function (data) {
                $scope.messages.push(data);
            });

            chatProvider.on('message', function (data) {
                $scope.messages.push(data);
            });

            $scope.sendMessage = function () {
                chatProvider.emit('send', {msg: $scope.newMessage})
            };
           
        }
})();