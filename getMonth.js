module.exports = {
  name: "getMonth",
  ns: "date",
  title: "Get Month",
  async: true,
  description: "The month (0-11) in the specified date according to local time.",
  phrases: {
    active: "Getting Month"
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
              out: data.getMonth()
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
        title: "Month",
        type: "number",
        description: "The month (0-11) in the specified date according to local time."
      }
    }
  },
  state: {}
}