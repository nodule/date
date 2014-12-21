module.exports = {
  name: "getDate",
  ns: "date",
  title: "Get Date",
  async: true,
  description: "The day of the month (1-31) for the specified date according to local time.",
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
              out: data.getDate()
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
        description: "The day of the month (1-31) for the specified date according to local time."
      }
    }
  },
  state: {}
}