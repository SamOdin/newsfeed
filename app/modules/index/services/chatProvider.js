(function () {

    angular
        .module('chatProvider', [])
        .service('chatProvider', ['socketFactory', chatProvider]);

        function chatProvider(socketFactory) {

            var serverUrl = 'http://localhost:3000';
            var myIoSocket = io.connect(serverUrl);
            var socket = socketFactory({
                ioSocket: myIoSocket
            });

            return socket;
            
        }

})();