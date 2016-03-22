module.exports = {
  name: "getDay",
  ns: "date",
  title: "Get Day",
  async: true,
  description: "The day of the week (0-6) for the specified date according to local time.",
  phrases: {
    active: "Getting Day"
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
              out: $.in.getDay()
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
        title: "Day",
        type: "number",
        description: "The day of the week (0-6) for the specified date according to local time."
      }
    }
  },
  state: {}
}