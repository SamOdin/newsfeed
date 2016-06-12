(function () {
    
    angular
        .module('chatCtrl', [])
        .controller('chatCtrl', ['$scope', 'chatProvider', chatCtrl]);

        function chatCtrl($scope, chatProvider) {

            $scope.enterChat = function () {
                $scope.userAdded = true;
                chatProvider.emit('newUser', {
                    user: $scope.userName
                })
            };
            
            $scope.messages = [];

            chatProvider.on('testMsg', function (data) {
                $scope.messages.push(data.path);
            });

            chatProvider.on('message', function (data) {
                $scope.messages.push(data);
            });

            $scope.sendMessage = function () {
                chatProvider.emit('send', {
                    msg: $scope.newMessage,
                    user: $scope.userName
                });
                console.log($scope.newMessage);
                console.log($scope.userName);
            };

            chatProvider.on('userLeft', function () {
                $scope.messages.push($scope.userName + ' left chat!');
            })

            
           
        }
})();