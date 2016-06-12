(function () {

    angular
        .module('chatProvider', [])
        .service('chatProvider', ['socketFactory', chatProvider]);

        function chatProvider(socketFactory) {
            return socketFactory({
                ioSocket: io.connect('/')
            });
        }

})();