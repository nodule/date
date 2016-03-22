module.exports = {
  name: "getFullYear",
  ns: "date",
  title: "Get Full Year",
  async: true,
  description: "The year (4 digits for 4-digit years) of the specified date according to local time.",
  phrases: {
    active: "Getting Full Year"
  },
  ports: {
    input: {
      "in": {
        title: "Date",
        type: "Date",
        async: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: $.write($.in.getFullYear())
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
        title: "Year",
        type: "number",
        description: "The year (4 digits for 4-digit years) of the specified date according to local time."
      }
    }
  },
  state: {}
}