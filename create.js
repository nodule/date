module.exports = {
  name: "create",
  ns: "date",
  title: "Create Date",
  description: "Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.",
  phrases: {
    active: "Creating Date"
  },
  ports: {
    input: {
      value: {
        title: "Value",
        type: "number",
        description: "Integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).",
        "default": null
      }
    },
    output: {
      out: {
        title: "Date",
        type: "Date"
      }
    }
  },
  fn: function create(input, output, state, done, cb, on) {
    var r = function() {
      if (input.value) {
        output.out = new Date(input.value);
      } else {
        output.out = new Date();
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}