(function () {
    
    angular
        .module('chatCtrl', [])
        .controller('chatCtrl', ['$scope', 'chatProvider', chatCtrl]);

        function chatCtrl($scope, chatProvider) {
            
            function createCORSRequest(method, url) {
                var xhr = new XMLHttpRequest();

                if ("withCredentials" in xhr) {
                    xhr.open(method, url, true);
                } else if (typeof XDomainRequest != "undefined") {
                    xhr = new XDomainRequest();
                    xhr.open(method, url);
                } else {
                    xhr = null;
                }
                return xhr;
            }

            var url = 'http://backend.loc/';
            var xhr = createCORSRequest('GET', url);
            xhr.send();

            $scope.message = [];

            chatProvider.on('message', function (data) {
                $scope.message.push(data.message);
            });

            console.log($scope.message);
        }
})();