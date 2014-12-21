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
      date: {
        title: "Date",
        type: "Date",
        async: true,
        fn: function __DATE__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: data.getSeconds()
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
  state: {}
}