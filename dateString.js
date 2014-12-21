module.exports = {
  name: "dateString",
  ns: "date",
  title: "Create Date",
  description: "String value representing a date.",
  phrases: {
    active: "Creating Date"
  },
  ports: {
    input: {
      value: {
        title: "Value",
        type: "string",
        description: "The string should be in a format recognized by the Date.parse() method (IETF-compliant RFC 2822 timestamps and also a version of ISO8601).",
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
  fn: function dateString(input, output, state, done, cb, on) {
    var r = function() {
      output.out = new Date(input.value || undefined);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}