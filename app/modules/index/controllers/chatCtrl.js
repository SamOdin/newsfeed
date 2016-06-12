(function () {
    
    angular
        .module('chatCtrl', [])
        .controller('chatCtrl', ['$scope', 'chatProvider', chatCtrl]);

        function chatCtrl($scope, chatProvider) {

            $scope.enterChat = function () {
                $scope.userAdded = true;
            };
            
            $scope.messages = [];

            chatProvider.on('testMsg', function (data) {
                $scope.messages.push(data);
            });

            chatProvider.on('message', function (data) {
                $scope.messages.push(data);
            });

            $scope.sendMessage = function () {
                chatProvider.emit('send', {msg: $scope.newMessage});
                console.log($scope.newMessage);
            };

            chatProvider.on('userLeft', function () {
                $scope.messages.push($scope.userName + ' left chat!');
            })
           
        }
})();