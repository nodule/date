module.exports = {
  name: "getTime",
  ns: "date",
  title: "Get Time",
  async: true,
  description: "The numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for prior times).",
  phrases: {
    active: "Getting Time"
  },
  ports: {
    input: {
      "in": {
        title: "Date",
        type: "Date",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.write('in', $.in.getTime())
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "Time",
        type: "number",
        description: "The numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for prior times)."
      }
    }
  },
  state: {},
  on: {}
}