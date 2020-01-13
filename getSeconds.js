module.exports = {
  name: "getSeconds",
  ns: "date",
  title: "Get Seconds",
  async: true,
  description: "The seconds (0-59) in the specified date according to local time.",
  phrases: {
    active: "Getting Seconds"
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
              out: $.write('in', $.in.getSeconds())
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
        title: "Seconds",
        type: "number",
        description: "The seconds (0-59) in the specified date according to local time."
      }
    }
  },
  state: {},
  on: {}
}