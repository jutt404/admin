(function antiDebug() {
    function block() {
        setInterval(function() {
            // Generate junk function in memory
            Function("debugger")();
        }, 50);
    }

    try {
        block();
    } catch (e) {
        // ignore
    }
})();
