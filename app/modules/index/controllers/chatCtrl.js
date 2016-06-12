(function () {
    
    angular
        .module('chatCtrl', [])
        .controller('chatCtrl', ['$scope', 'chatProvider', chatCtrl]);

        function chatCtrl($scope, chatProvider) {
            
            $scope.messages = [];
            
            chatProvider.on('testMsg', function (data) {
                $scope.messages.push(data.msg);
            });

            console.log($scope.messages);
           
        }
})();