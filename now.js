module.exports = {
  name: "now",
  ns: "date",
  title: "Now",
  description: "Outputs the number of milliseconds elapsed since January 1, 1970",
  phrases: {
    active: "Performing Date.now"
  },
  ports: {
    input: {},
    output: {
      out: {
        title: "Now",
        type: "Date"
      }
    }
  },
  fn: function now(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Date.now());
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}