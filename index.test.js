var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('should convert unicode css selector only', () => {
    return run(
        '.u-p\\00002b\\00261a\\002665{ }',
        '.u-p\\+\\☚\\♥{ }',
        { }
    );
});

it('should not convert the content', () => {
    return run(
        '.u-p\\00002b\\00261a\\002665{ content: "\\002665" }',
        '.u-p\\+\\☚\\♥{ content: "\\002665" }',
        { }
    );
});
