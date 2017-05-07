var postcss = require('postcss');

module.exports = postcss.plugin('postcss-unicode-selector', function () {
    return function (root) {
        root.walkRules(rule => {
            var selector = rule.selector;
            var matches = selector.match(/\\00([a-fA-F0-9]{4})/g) || [];
            matches.forEach(match => {
                var char = String.fromCharCode(match.replace('\\00', '0x'));
                selector = selector.replace(match, '\\' + char);
            });
            rule.selector = selector;
        });

    };
});
